import React from 'react';
import Typography from '../typography/typography';
import { ButtonSC } from './button.styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  transparent?: boolean;
  title: string;
  'data-testid'?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  loading,
  ...otherProps
}) => (
  <ButtonSC
    {...otherProps}
    data-testid={otherProps['data-testid']}
    disabled={disabled || loading}
  >
    <Typography>{otherProps.title}</Typography>
  </ButtonSC>
);

export default Button;
