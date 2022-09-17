import React from 'react';
import { SwitchSC, TouchableSC } from './switch.styled';

export interface SwitchProps {
  active: boolean;
  onToggle?: () => void;
}

const Switch: React.FC<SwitchProps> = ({ active, onToggle }) => {
  return (
    <TouchableSC active={active} onClick={() => onToggle?.()}>
      <SwitchSC active={active} />
    </TouchableSC>
  );
};

export default Switch;
