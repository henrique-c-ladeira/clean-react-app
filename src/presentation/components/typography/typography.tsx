import React from 'react';
import { TypographySC } from './typography.styled';

type Variants = 'bodySmall' | 'bodyRegular' | 'heading' | 'subHeading';

export interface TypographyProps {
  children: string;
  variant?: Variants;
  'data-testid'?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'bodyRegular',
  ...props
}) => (
  <TypographySC {...props} variant={variant} data-testid={props['data-testid']}>
    {children}
  </TypographySC>
);

export default Typography;
