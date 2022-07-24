import React from 'react';

import { Dialog, DialogTitle } from '@mui/material';
import ActionButtonCombo from './ActionButtonCombo';

type Props = {
  open: boolean;
  onClose: () => void;
  onProceed: () => void;
  title: string;
};

const ConfirmDialog: React.FunctionComponent<Props> = ({ open, onClose, onProceed, title }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <ActionButtonCombo onSubmit={onProceed} onCancel={handleClose} />
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
