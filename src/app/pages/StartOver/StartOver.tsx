import React from 'react';
import ActionButtonCombo from '~/app/components/ActionButtonCombo';
import Separator from '~/app/components/Separator';
import { useNavigation } from '~/app/shared/router/router.hook';
import { useLocalStorage } from '~/app/shared/localStorage/localStorage.hook';

const StartOverPage = () => {
  const { resetChoices, setInActivity, setSnackTime } = useLocalStorage();
  const { navigateTo, goBack } = useNavigation();

  const handleReset = () => {
    resetChoices();
    setInActivity(false);
    setSnackTime(false);
    navigateTo('/');
  };

  return (
    <div>
      <h1 style={{ color: 'red' }}>
        <b>*주의*</b>
      </h1>
      <p>지금까지 해온 선택들이 리셋됩니다.</p>
      <p>처음부터 다시 시작하시겠습니까?</p>
      <p style={{ color: 'red', fontSize: '15px' }}>(웬만하면 이 기능을 남용하지 말아주세요.)</p>
      <Separator height="50px" />
      <ActionButtonCombo onSubmit={handleReset} onCancel={goBack} />
    </div>
  );
};

export default StartOverPage;
