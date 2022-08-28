import React from 'react';
import { BoxContentSC } from './box-content.styled';

export interface BoxContentProps extends React.HTMLAttributes<HTMLDivElement> {
  center: boolean;
}

const BoxContent = (props: BoxContentProps) => (
  <BoxContentSC {...props}>{props.children}</BoxContentSC>
);

export default BoxContent;
