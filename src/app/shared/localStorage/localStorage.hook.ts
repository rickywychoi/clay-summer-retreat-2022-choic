enum keys {
  Choices = 'choices',
  InActivity = 'inActivity',
  SnackTime = 'snackTime'
}

const parseChoices = (choicesFlatten: string) => choicesFlatten.split(',');

export const useLocalStorage = () => {
  // choices
  const choicesRaw = localStorage.getItem(keys.Choices);
  const choices = !!choicesRaw ? parseChoices(choicesRaw) : [];
  const resetChoices = () => {
    localStorage.setItem(keys.Choices, '');
  };
  const addChoice = (choice: string) => {
    const choicesRaw = localStorage.getItem(keys.Choices);
    if (choicesRaw === null) {
      return;
    }
    const choiceAdded = choicesRaw === '' ? choice : `${choicesRaw},${choice}`;
    localStorage.setItem(keys.Choices, choiceAdded);
  };
  const setChoices = (val: string) => localStorage.setItem(keys.Choices, val);

  // inActivity
  const getInActivity = () => {
    const val = localStorage.getItem(keys.InActivity);
    return !val || val === 'false' ? false : true;
  };
  const setInActivity = (inActivity: boolean) => localStorage.setItem(keys.InActivity, `${inActivity}`);

  // snackTime
  const getSnackTime = () => {
    const val = localStorage.getItem(keys.SnackTime);
    return !val || val === 'false' ? false : true;
  };
  const setSnackTime = (snackTime: boolean) => localStorage.setItem(keys.SnackTime, `${snackTime}`);

  return {
    choicesRaw,
    choices,
    resetChoices,
    addChoice,
    setChoices,
    getInActivity,
    setInActivity,
    getSnackTime,
    setSnackTime
  };
};
