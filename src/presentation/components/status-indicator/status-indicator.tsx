import React from 'react';
import Typography from '../typography/typography';

interface StatusIndicatorProps {
  isSuccess?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  'data-testid'?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = (props) => {
  const testId = props['data-testid']
    ? props['data-testid']
    : 'status-indicator';
  if (props.isSuccess)
    return (
      <Typography variant="bodySmall" data-testid={testId}>
        ✅
      </Typography>
    );
  if (props.isLoading)
    return (
      <Typography variant="bodySmall" data-testid={testId}>
        ...
      </Typography>
    );
  if (props.isError)
    return (
      <Typography variant="bodySmall" data-testid={testId}>
        ❌
      </Typography>
    );
  return null;
};

export default StatusIndicator;
