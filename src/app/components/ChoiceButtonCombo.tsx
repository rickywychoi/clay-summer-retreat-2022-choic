import React, { useEffect, useState } from 'react';
import { shuffle } from '../core/array/utils';
import ActionButton from './ActionButton';

type Props = {
  optionALabel: string;
  optionBLabel: string;
  handleOptionA: () => void;
  handleOptionB: () => void;
};

const colors: ('inherit' | 'warning' | 'primary' | 'secondary' | 'success' | 'error' | 'info')[] = [
  'success',
  'primary'
];

const ChoiceButtonCombo: React.FunctionComponent<Props> = ({
  optionALabel,
  optionBLabel,
  handleOptionA,
  handleOptionB
}) => {
  const [ran, setRan] = useState(0);
  useEffect(() => {
    shuffle(colors);
    setRan(Math.floor(Math.random() * 2));
  }, []);

  return (
    <div style={{ border: '3px solid lightgrey', borderRadius: '10px', padding: '15px' }}>
      <ActionButton
        label={optionALabel}
        onClick={handleOptionA}
        customStyle={{ marginBottom: '50px' }}
        color={colors[ran]}
        fullWidth
      />
      <br />
      <ActionButton label={optionBLabel} onClick={handleOptionB} color={colors[1 - ran]} fullWidth />
    </div>
  );
};

export default ChoiceButtonCombo;
