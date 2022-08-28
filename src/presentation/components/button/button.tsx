import React from 'react';
import Typography from '../typography/typography';
import { ButtonSC } from './button.styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inverted?: boolean;
  transparent?: boolean;
  title: string;
}

const Button: React.FC<ButtonProps> = (props) => (
  <ButtonSC {...props}>
    <Typography>{props.title}</Typography>
  </ButtonSC>
);

export default Button;
