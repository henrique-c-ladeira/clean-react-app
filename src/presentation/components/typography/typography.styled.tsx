import styled, { css } from 'styled-components';
import { TypographyProps } from './typography';

const bodySmallStyle = css``;
const bodyRegularStyle = css`
  font-size: 28px;
  font-family: ${(props) => props.theme.font.regular};
`;

export const TypographySC = styled.div<TypographyProps>`
  ${(props) => props.variant === 'bodyRegular' && bodyRegularStyle}
  ${(props) => props.variant === 'bodySmall' && bodySmallStyle}
`;
