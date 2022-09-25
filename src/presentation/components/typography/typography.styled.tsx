import styled, { css } from 'styled-components';
import { TypographyProps } from './typography';

const headingStyle = css`
  font-size: 32px;
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 600;
`;

const subHeadingStyle = css``;

const bodySmallStyle = css`
  font-size: 18px;
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 300;
`;

const bodyTinyStyle = css`
  font-size: 14px;
  font-family: ${(props) => props.theme.font.regular};
  font-weight: 500;
`;

const bodyRegularStyle = css`
  font-size: 22px;
  font-family: ${(props) => props.theme.font.regular};
`;

export const TypographySC = styled.div<TypographyProps>`
  ${(props) => props.variant === 'heading' && headingStyle}
  ${(props) => props.variant === 'subHeading' && subHeadingStyle}
  ${(props) => props.variant === 'bodyRegular' && bodyRegularStyle}
  ${(props) => props.variant === 'bodySmall' && bodySmallStyle}
  ${(props) => props.variant === 'bodyTiny' && bodyTinyStyle}
`;
