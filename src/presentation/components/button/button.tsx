import React from 'react';
import Typography from '../typography/typography';
import { ButtonSC } from './button.styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  transparent?: boolean;
  title: string;
  'data-testid'?: string;
}

const Button: React.FC<ButtonProps> = (props) => (
  <ButtonSC {...props} data-testid={props['data-testid']}>
    <Typography>{props.title}</Typography>
  </ButtonSC>
);

export default Button;
