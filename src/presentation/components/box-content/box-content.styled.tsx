import styled, { css } from 'styled-components';
import { AbsoluteBoxContentProps } from './absolute-box-content';
import { BoxContentProps } from './box-content';

const centerStyle = css`
  align-items: center;
  justify-content: center;
`;

export const BoxContentSC = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: column;
  ${(props) => props.center && centerStyle}

  ${(props) => props.fillVertical && 'min-height: 100vh;'}
  ${(props) => props.h && `height: ${props.h}px`}
  ${(props) => props.w && `width: ${props.w}px`}
`;

export const AbsoluteBoxContentSC = styled.div<AbsoluteBoxContentProps>`
  position: absolute;
  ${(props) => props.r && `right: ${props.r}px;`}
  ${(props) => props.l && `left: ${props.l}px;`}
  ${(props) => props.b && `bottom: ${props.b}px;`}
  ${(props) => props.t && `top: ${props.t}px;`}
`;
