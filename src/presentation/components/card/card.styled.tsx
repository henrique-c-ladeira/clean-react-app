import styled, { css } from 'styled-components';
import BoxContent from '../box-content/box-content';
import { CardProps } from './card';

export const BoxContentSC = styled(BoxContent)<CardProps>`
  padding: 24px;
  border-radius: 6px;
  box-shadow: 3px 3px 10px #0000003f;
  ${(props) =>
    props.flex &&
    css`
      flex: 1;
    `};
  background-color: ${(props) => props.theme.colors.background};
`;
