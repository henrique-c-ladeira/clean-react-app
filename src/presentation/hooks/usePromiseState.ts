import { useState } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

const usePromiseState = <T>(promise: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  const exec = async () => {
    try {
      setStatus('pending');
      const response = await promise();
      setData(response);
      setStatus('success');
      setError(null);
    } catch (error: any) {
      setData(null);
      setStatus('error');
      setError(error?.message ?? null);
    }
  };

  return { data, status, exec, error };
};

export default usePromiseState;
