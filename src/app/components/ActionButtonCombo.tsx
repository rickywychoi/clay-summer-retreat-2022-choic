import React from 'react';
import ActionButton from './ActionButton';

type Props = {
  submitLabel?: string;
  cancelLabel?: string;
  onSubmit: () => void;
  onCancel: () => void;
};

const ActionButtonCombo: React.FunctionComponent<Props> = ({
  submitLabel = '예',
  cancelLabel = '아니오',
  onSubmit,
  onCancel
}) => {
  return (
    <span>
      <ActionButton label={submitLabel} onClick={onSubmit} customStyle={{ marginRight: '15px' }} color="primary" />
      <ActionButton label={cancelLabel} onClick={onCancel} color="error" />
    </span>
  );
};

export default ActionButtonCombo;
