import { Button } from '@mui/material';
import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
  customStyle?: React.CSSProperties;
  color?: 'inherit' | 'warning' | 'primary' | 'secondary' | 'success' | 'error' | 'info';
  fullWidth?: boolean;
};

const ActionButton: React.FunctionComponent<Props> = ({ label, onClick, customStyle, color, fullWidth }) => {
  return (
    <Button
      variant="contained"
      size="large"
      style={{ fontSize: '18px', ...customStyle }}
      onClick={onClick}
      color={color}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
