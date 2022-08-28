import styled, { css } from 'styled-components';
import { BoxContentProps } from './box-content';

const centerStyle = css`
  align-items: center;
  justify-content: center;
`;

export const BoxContentSC = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: column;
  ${(props) => props.center && centerStyle}
`;
