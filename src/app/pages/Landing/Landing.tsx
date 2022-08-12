import React, { useCallback, useEffect, useMemo } from 'react';
import './landing.css';
import Separator from '../../components/Separator';
import ActionButton from '~/app/components/ActionButton';
import { useNavigation } from '~/app/shared/router/router.hook';
import { useLocalStorage } from '~/app/shared/localStorage/localStorage.hook';
import { tree } from '~/app/core/binaryTree/tree';
import { checkIfLastChild, inOrder } from '~/app/core/binaryTree/utils';
import { routes } from '~/app/shared/routes';

const root = tree();

const Landing = () => {
  const { navigateTo } = useNavigation();
  const { choicesRaw, choices, setChoices, getInActivity, setInActivity, getSnackTime, setSnackTime } =
    useLocalStorage();

  const isChoicesEmpty = useMemo(() => !choicesRaw, [choicesRaw]);

  const syncDataFromLocalStorage = useCallback(() => {
    if (isChoicesEmpty) {
      setChoices('');
    } else {
      setChoices(choicesRaw);
    }
    const inActivity = getInActivity();
    setInActivity(inActivity);
    const snackTime = getSnackTime();
    setSnackTime(snackTime);
  }, [isChoicesEmpty, choicesRaw, setChoices, getInActivity, setInActivity, getSnackTime, setSnackTime]);

  useEffect(() => {
    syncDataFromLocalStorage();
  }, [syncDataFromLocalStorage]);

  const handleStart = useCallback(() => {
    const inActivity = getInActivity();
    const cur = choices.length > 0 && inOrder(root, choices[choices.length - 1]);
    if (checkIfLastChild(cur) && !inActivity) {
      navigateTo(routes.TheEnd);
    } else {
      navigateTo(routes.MakeChoice);
    }
  }, [choices, navigateTo, getInActivity]);

  return (
    <div className="main">
      <h1>카운터 컬쳐</h1>
      <p>
        우리 크리스쳔들뿐만 아니라, 세상에 사는 모든 사람들은 인생에서 무언가는 <b>선택</b>을 해야만 하는 순간이 옵니다.{' '}
        <b>선택</b>을 했을때, 그 <b>선택</b>에 대한 결과가 따라오며, 그에 대한 책임을 져야하는 세상에서 살아가고
        있습니다.
      </p>
      <Separator height="20px" />
      <h2>개요</h2>
      <p>1. 두가지 선택지 중 하나를 그룹별로 선택하세요.</p>
      <p>2. 각 선택에 따라 페이지에 나와있는 액티비티를 진행해주세요.</p>
      <p>3. 액티비티 완료 후 다시 두가지 선택지 중 하나를 선택해주세요.</p>
      <p>(각 질문에 따라 전혀 다른 액티비티 결과가 있습니다.)</p>
      <p style={{ color: 'red' }}>
        주의사항: 한번 선택한 결과는 <b>되돌릴 수 없습니다</b>. 주의해서 선택해주세요.
      </p>
      <p style={{ color: 'red', fontSize: '15px' }}>
        단, 불가피하게 다시 시작해야 한다면, 왼쪽 상단 메뉴의 &apos;다시 시작&apos;을 방문해주세요.
      </p>
      <Separator height="20px" />
      <ActionButton label={isChoicesEmpty ? '시작하기' : '계속하기'} onClick={handleStart} />
      <Separator height="20px" />
    </div>
  );
};

export default Landing;
