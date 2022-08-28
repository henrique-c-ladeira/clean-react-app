import styled from 'styled-components';
import { ButtonProps } from './button';

export const ButtonSC = styled.button<ButtonProps>`
  padding: 4px 24px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.textLight};
  border-width: 0px;
  border-color: ${(props) => props.theme.colors.primaryLight};
  box-shadow: 1px 1px 1px ${(props) => props.theme.colors.primaryLight};

  &:active {
    box-shadow: 0px 0px 5px ${(props) => props.theme.colors.primaryLight};
    transform: scale(0.98);
  }
`;
