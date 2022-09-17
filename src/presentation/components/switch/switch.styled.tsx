import styled, { css } from 'styled-components';
import BoxContent from '../box-content/box-content';
import { SwitchProps } from './switch';

export const TouchableSC = styled.button<SwitchProps>`
  position: relative;
  padding: 16px 32px;
  cursor: pointer;
  border-radius: 16px;

  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.disabled};

  box-shadow: 0px 0px 2px
    ${(props) =>
      props.active
        ? props.theme.colors.primaryDark
        : props.theme.colors.darkContrast};
`;

export const SwitchSC = styled(BoxContent).attrs({})<SwitchProps>`
  position: absolute;
  top: 15%;
  left: 8%;
  height: 70%;
  width: 35%;
  border-radius: 100%;
  background-color: white;

  ${(props) =>
    props.active &&
    css`
      transform: translateX(142%);
    `};
  transition-duration: 200ms;
  box-shadow: 0px 0px 2px
    ${(props) =>
      props.active
        ? props.theme.colors.lightContrast
        : props.theme.colors.darkContrast};
`;
