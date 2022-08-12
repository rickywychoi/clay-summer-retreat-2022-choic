enum keys {
  Choices = 'choices',
  InActivity = 'inActivity',
  SnackTime = 'snackTime',
  ResetLocalStorage = 'resetLocalStorage'
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
    return parseBoolean(val);
  };
  const setInActivity = (inActivity: boolean) => localStorage.setItem(keys.InActivity, `${inActivity}`);

  // snackTime
  const getSnackTime = () => {
    const val = localStorage.getItem(keys.SnackTime);
    return parseBoolean(val);
  };
  const setSnackTime = (snackTime: boolean) => localStorage.setItem(keys.SnackTime, `${snackTime}`);

  // resetLocalStorage
  const getResetLocalStorage = () => {
    const val = localStorage.getItem(keys.ResetLocalStorage);
    return parseBoolean(val);
  };
  const setResetLocalStorage = (resetLocalStorage: boolean) =>
    localStorage.setItem(keys.ResetLocalStorage, `${resetLocalStorage}`);

  // helper
  const parseBoolean = (val: string) => (!val || val === 'false' ? false : true);

  const resetEverything = () => {
    resetChoices();
    setInActivity(false);
    setSnackTime(false);
    setResetLocalStorage(false);
  };
  return {
    choicesRaw,
    choices,
    resetChoices,
    addChoice,
    setChoices,
    getInActivity,
    setInActivity,
    getSnackTime,
    setSnackTime,
    getResetLocalStorage,
    setResetLocalStorage,
    resetEverything
  };
};
