import styled, { css } from 'styled-components';
import { TypographyProps } from './typography';

const headingStyle = css`
  font-size: 32px;
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 600;
`;

const subHeadingStyle = css``;

const bodySmallStyle = css``;

const bodyRegularStyle = css`
  font-size: 28px;
  font-family: ${(props) => props.theme.font.regular};
`;

export const TypographySC = styled.div<TypographyProps>`
  ${(props) => props.variant === 'heading' && headingStyle}
  ${(props) => props.variant === 'subHeading' && subHeadingStyle}
  ${(props) => props.variant === 'bodyRegular' && bodyRegularStyle}
  ${(props) => props.variant === 'bodySmall' && bodySmallStyle}
`;
