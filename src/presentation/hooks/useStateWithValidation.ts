import { useEffect, useState } from 'react';

function useStateWithValidation<T>(
  initialState: T,
  validate: (args: T) => string | null
): [T, React.Dispatch<React.SetStateAction<T>>, string | null] {
  const [state, setState] = useState<T>(initialState);
  const [stateError, setStateError] = useState<string | null>('');

  useEffect(() => {
    setStateError(validate(state));
  }, [state]);

  return [state, setState, stateError];
}

export default useStateWithValidation;
