import React from 'react';
import AbsoluteBoxContent from '../box-content/absolute-box-content';
import StatusIndicator from '../status-indicator/status-indicator';
import { ContainerSC, InputSC } from './input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  'data-testid'?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => (
  <ContainerSC>
    <InputSC {...props} />
    <AbsoluteBoxContent r={5}>
      <StatusIndicator
        isSuccess={!error}
        isError={error}
        data-testid={`${props['data-testid']}-status-indicator`}
      />
    </AbsoluteBoxContent>
  </ContainerSC>
);

export default Input;
