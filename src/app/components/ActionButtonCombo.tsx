import React from 'react';
import ActionButton from './ActionButton';

type Props = {
  submitLabel: string;
  cancelLabel: string;
  onSubmit: () => void;
  onCancel: () => void;
};

const ActionButtonCombo: React.FunctionComponent<Props> = ({ submitLabel, cancelLabel, onSubmit, onCancel }) => {
  return (
    <span>
      <ActionButton label={submitLabel} onClick={onSubmit} customStyle={{ marginRight: '15px' }} color="primary" />
      <ActionButton label={cancelLabel} onClick={onCancel} color="warning" />
    </span>
  );
};

export default ActionButtonCombo;
