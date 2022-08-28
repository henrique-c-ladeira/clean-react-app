import React from 'react';
import { InputSC } from './input.styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => <InputSC {...props} />;

export default Input;
