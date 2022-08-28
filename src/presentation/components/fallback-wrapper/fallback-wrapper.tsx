import React from 'react';
import Typography from '../typography/typography';

interface FallbackWrapperProps {
  renderSuccess: () => JSX.Element;
  isSuccess: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: () => boolean;
}

const FallbackWrapper: React.FC<FallbackWrapperProps> = (props) => (
  <>
    {props.isSuccess && !props.isEmpty && props.renderSuccess()}
    {props.isEmpty && <Typography> Empty</Typography>}
    {props.isLoading && <Typography>Loading...</Typography>}
  </>
);

export default FallbackWrapper;
