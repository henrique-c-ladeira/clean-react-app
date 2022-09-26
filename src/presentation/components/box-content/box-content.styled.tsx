import styled, { css } from 'styled-components';
import { AbsoluteBoxContentProps } from './absolute-box-content';
import BoxContent, { BoxContentProps } from './box-content';

const centerStyle = css`
  align-items: center;
  justify-content: center;
`;

export const BoxContentSC = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
  flex-wrap: wrap;
  align-items: baseline;
  text-align: left;
  ${(props) => props.center && centerStyle}

  ${(props) => props.justify && `justify-content: ${props.justify};`};
  ${(props) => props.align && `align-items: ${props.align};`};

  ${(props) => props.fillVertical && 'min-height: 100vh;'}
  ${(props) => props.h && `height: ${props.h}px`}
  ${(props) => props.w && `width: ${props.w}px`}
`;

export const AbsoluteBoxContentSC = styled(BoxContent)<AbsoluteBoxContentProps>`
  ${(props) =>
    props.position ? `position: ${props.position};` : 'position: absolute'};
  ${(props) => (props.t || props.t === 0) && `top: ${props.t}px;`}
  ${(props) => (props.r || props.t === 0) && `right: ${props.r}px;`}
  ${(props) => (props.l || props.t === 0) && `left: ${props.l}px;`}
  ${(props) => (props.b || props.t === 0) && `bottom: ${props.b}px;`}
`;
