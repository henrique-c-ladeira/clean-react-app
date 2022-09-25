import React from 'react';
import { BoxContentSC } from './box-content.styled';

export interface BoxContentProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: boolean;
  fillVertical?: boolean;
  inline?: boolean;
  w?: number;
  h?: number;
}

const BoxContent = (props: BoxContentProps) => (
  <BoxContentSC {...props}>{props.children}</BoxContentSC>
);

export default BoxContent;
