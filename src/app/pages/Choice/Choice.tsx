import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ChoiceButtonCombo from '~/app/components/ChoiceButtonCombo';
import ConfirmDialog from '~/app/components/ConfirmDialog';
import Separator from '~/app/components/Separator';
import { useLocalStorage } from '~/app/shared/localStorage/localStorage.hook';
import { treeExample } from '~/app/core/binaryTree/treeExample';
import { Node } from '~/app/core/binaryTree/types';
import { checkIfLastChild, inOrder } from '~/app/core/binaryTree/utils';
import ActionButton from '~/app/components/ActionButton';
import { useNavigation } from '~/app/shared/router/router.hook';
import { routes } from '~/app/shared/routes';
import { Dialog, DialogTitle } from '@mui/material';

const root = treeExample();
const countDownDefaultValue = 5;

const Choice = () => {
  // local storage
  const { choices, addChoice, getInActivity, setInActivity } = useLocalStorage();

  // navigation
  const { navigateTo } = useNavigation();

  // activity
  const inActivity = useMemo(() => getInActivity(), [getInActivity]);
  const [activityConfirmDialogOpen, setActivityConfirmDialogOpen] = useState(false);

  const handleEndActivityCancel = () => {
    setActivityConfirmDialogOpen(false);
  };

  const handleEndActivity = () => {
    setInActivity(false);
    setActivityConfirmDialogOpen(false);
    setCancelIntervalFunc(true);
  };

  const navigateToSummaryPage = () => {
    setInActivity(false);
    navigateTo(routes.TheEnd);
  };

  // choices
  const [choiceConfirmDialogOpen, setChoiceConfirmDialogOpen] = useState(false);
  const [choiceConfirmCancelDialogOpen, setChoiceConfirmCancelDialogOpen] = useState(false);
  const [currentNode, setCurrentNode] = useState<Node | undefined>();
  const [optionToProceed, setOptionToProceed] = useState<Node | undefined>();
  const [choiceConfirmCountdown, setChoiceConfirmCountdown] = useState(countDownDefaultValue);
  const [cancelIntervalFunc, setCancelIntervalFunc] = useState(true);
  const loading = useMemo(() => !currentNode, [currentNode]);
  const level = useMemo(() => choices.length + 1, [choices]);
  const process = useMemo(() => {
    const choiceLabels = choices.map((c) => inOrder(root, c).label);
    return choiceLabels.join(' > ');
  }, [choices]);
  const isEnd = useMemo(() => checkIfLastChild(currentNode), [currentNode]);

  const handleOption = (option: Node) => {
    setChoiceConfirmDialogOpen(true);
    setOptionToProceed(option);
  };

  const handleOptionProcessCancel = () => {
    setChoiceConfirmDialogOpen(false);
    setOptionToProceed(undefined);
  };

  const handleProceedChoice = () => {
    setChoiceConfirmDialogOpen(false);
    setChoiceConfirmCancelDialogOpen(true);
    setCancelIntervalFunc(false);
  };

  const resetCountdown = useCallback(() => {
    setTimeout(() => {
      setChoiceConfirmCountdown(countDownDefaultValue);
    }, 300);
  }, [setChoiceConfirmCountdown]);

  const handleProceedOptionConfirm = useCallback(() => {
    if (optionToProceed) {
      setCurrentNode(optionToProceed);
      addChoice(optionToProceed.key);
      setOptionToProceed(undefined);
      setChoiceConfirmCancelDialogOpen(false);
      setInActivity(true);
      resetCountdown();
      setCancelIntervalFunc(false);
    }
  }, [
    setOptionToProceed,
    setChoiceConfirmCancelDialogOpen,
    setInActivity,
    addChoice,
    optionToProceed,
    resetCountdown,
    setCancelIntervalFunc
  ]);

  const handleOptionConfirmProcessCancel = () => {
    handleChoiceConfirmCancelDialogClose();
    setOptionToProceed(undefined);
  };

  const handleChoiceConfirmCancelDialogClose = useCallback(() => {
    setCancelIntervalFunc(true);
    setChoiceConfirmCancelDialogOpen(false);
  }, [setCancelIntervalFunc, setChoiceConfirmCancelDialogOpen]);

  useEffect(() => {
    let intervalFunc: NodeJS.Timer;
    if (cancelIntervalFunc) {
      intervalFunc && clearInterval(intervalFunc);
      resetCountdown();
    } else {
      if (!inActivity) {
        intervalFunc = setInterval(() => {
          if (choiceConfirmCountdown !== 0) {
            setChoiceConfirmCountdown((prev) => prev - 1);
          }
        }, 1000);
      }
    }

    if (choiceConfirmCountdown === 0) {
      handleProceedOptionConfirm();
    }

    return () => {
      clearInterval(intervalFunc);
    };
  }, [choiceConfirmCountdown, handleProceedOptionConfirm, cancelIntervalFunc, resetCountdown, inActivity]);

  useEffect(() => {
    if (choices.length === 0) {
      setCurrentNode(root);
    } else {
      setCurrentNode(inOrder(root, choices[choices.length - 1]));
    }
  }, [choices]);

  return !!loading ? (
    <div>loading...</div>
  ) : (
    <div>
      {choices.length > 0 && <span>Choices: {process}</span>}
      <h1>{!inActivity ? `Level ${level}` : `<${currentNode.label}>`}</h1>
      {!inActivity ? (
        <div>
          <p>{currentNode.question}</p>
          <Separator height="15px" />
          <ChoiceButtonCombo
            optionALabel={currentNode.left.label}
            handleOptionA={() => handleOption(currentNode.left)}
            optionBLabel={currentNode.right.label}
            handleOptionB={() => handleOption(currentNode.right)}
          />
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '30px' }}>{currentNode.content}</p>
          <Separator height="30px" />
          {!isEnd ? (
            <ActionButton label="다음 선택" onClick={() => setActivityConfirmDialogOpen(true)} />
          ) : (
            <ActionButton label="끝내기" onClick={() => navigateToSummaryPage()} />
          )}
        </div>
      )}

      <ConfirmDialog
        open={choiceConfirmDialogOpen}
        onClose={handleOptionProcessCancel}
        onProceed={handleProceedChoice}
        title={!!optionToProceed ? `${optionToProceed.label} - 확실합니까?` : ''}
      />

      <ConfirmDialog
        open={activityConfirmDialogOpen}
        onClose={handleEndActivityCancel}
        onProceed={handleEndActivity}
        title="액티비티를 끝내고 다음 선택으로 넘어가시겠습니까?"
      />

      <Dialog onClose={handleOptionConfirmProcessCancel} open={choiceConfirmCancelDialogOpen}>
        <DialogTitle>진행합니다...</DialogTitle>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0 }}>{choiceConfirmCountdown}</h1>
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <ActionButton label="앗, 잠깐만요!!!" color="error" onClick={handleOptionConfirmProcessCancel} />
        </div>
      </Dialog>
    </div>
  );
};

export default Choice;
