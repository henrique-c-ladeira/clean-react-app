import React from 'react';
import Typography from '../typography/typography';

interface StatusIndicatorProps {
  isSuccess?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = (props) => {
  if (props.isSuccess)
    return <Typography testID="status-indicator"> Success</Typography>;
  if (props.isLoading)
    return <Typography testID="status-indicator"> Loading...</Typography>;
  if (props.isError)
    return <Typography testID="status-indicator"> Error</Typography>;
  return null;
};

export default StatusIndicator;
