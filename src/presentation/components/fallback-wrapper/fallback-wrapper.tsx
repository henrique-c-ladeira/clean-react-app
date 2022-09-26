import React from 'react';
import { DefaultError } from './default-error';
import { DefaultLoading } from './default-loading';

export type Status = 'idle' | 'pending' | 'success' | 'error';
interface FallbackWrapperProps {
  renderSuccess: () => JSX.Element;
  status: Status;
}

const FallbackWrapper: React.FC<FallbackWrapperProps> = (props) => {
  if (props.status === 'pending') return <DefaultLoading />;
  if (props.status === 'success') return props.renderSuccess();
  if (props.status === 'error') return <DefaultError />;
  return null;
};

export default FallbackWrapper;
