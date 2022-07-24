enum keys {
  choices = 'choices'
}

const parseChoices = (choicesFlatten: string) => choicesFlatten.split(',');

export const useLocalStorage = () => {
  const choicesRaw = localStorage.getItem(keys.choices);
  const choices = choicesRaw ? parseChoices(choicesRaw) : [];
  const resetChoices = () => {
    localStorage.setItem(keys.choices, '');
  };
  const addChoice = (choice: string) => {
    const choices = localStorage.getItem(keys.choices);
    if (choices === null) {
      return;
    }
    const choiceAdded = choices === '' ? choice : `${choices},${choice}`;
    localStorage.setItem(keys.choices, choiceAdded);
  };
  const setChoice = () => localStorage.setItem(keys.choices, '');

  return {
    choices,
    resetChoices,
    addChoice,
    setChoice
  };
};
