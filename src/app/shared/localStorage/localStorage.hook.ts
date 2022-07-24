enum keys {
  Choices = 'choices',
  InActivity = 'inActivity'
}

const parseChoices = (choicesFlatten: string) => choicesFlatten.split(',');

export const useLocalStorage = () => {
  // choices
  const choicesRaw = localStorage.getItem(keys.Choices);
  const choices = choicesRaw ? parseChoices(choicesRaw) : [];
  const resetChoices = () => {
    localStorage.setItem(keys.Choices, '');
  };
  const addChoice = (choice: string) => {
    const choices = localStorage.getItem(keys.Choices);
    if (choices === null) {
      return;
    }
    const choiceAdded = choices === '' ? choice : `${choices},${choice}`;
    localStorage.setItem(keys.Choices, choiceAdded);
  };
  const setChoices = (val: string) => localStorage.setItem(keys.Choices, val);

  // inActivity
  const getInActivity = () => {
    const val = localStorage.getItem(keys.InActivity);
    return !val || val === 'false' ? false : true;
  };
  const setInActivity = (inActivity: boolean) => localStorage.setItem(keys.InActivity, `${inActivity}`);

  return {
    choicesRaw,
    choices,
    resetChoices,
    addChoice,
    setChoices,
    getInActivity,
    setInActivity
  };
};
