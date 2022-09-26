import React from 'react';
import { AbsoluteBoxContentSC } from './box-content.styled';

export interface AbsoluteBoxContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  position?: string;
  r?: number;
  l?: number;
  t?: number;
  b?: number;
}

const AbsoluteBoxContent: React.FC<AbsoluteBoxContentProps> = (props) => (
  <AbsoluteBoxContentSC {...props}>{props.children}</AbsoluteBoxContentSC>
);

export default AbsoluteBoxContent;
