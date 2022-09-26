import { BoxContentProps } from '../box-content/box-content';
import { BoxContentSC } from './card.styled';

export type CardProps = BoxContentProps & {
  flex?: number;
};

export const Card: React.FC<CardProps> = ({
  children,
  flex,
  ...otherProps
}) => (
  <BoxContentSC flex={flex} {...otherProps}>
    {children}
  </BoxContentSC>
);
