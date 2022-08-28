import React from 'react';
import { TypographySC } from './typography.styled';

type Variants = 'bodySmall' | 'bodyRegular' | 'heading' | 'subHeading';

export interface TypographyProps {
  children: string;
  variant?: Variants;
  testID?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'bodyRegular',
  ...props
}) => (
  <TypographySC {...props} variant={variant}>
    {children}
  </TypographySC>
);

export default Typography;
