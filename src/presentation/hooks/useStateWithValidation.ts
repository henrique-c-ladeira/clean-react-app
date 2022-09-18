import { useEffect, useState } from 'react';

type ValidationReturn = string | null | Record<string, string | null>;

function useStateWithValidation<T>(
  initialState: T,
  validate: (args: T) => ValidationReturn
): [T, React.Dispatch<React.SetStateAction<T>>, ValidationReturn] {
  const [state, setState] = useState<T>(initialState);
  const [stateError, setStateError] = useState<ValidationReturn>('');

  useEffect(() => {
    setStateError(validate(state));
  }, [state]);

  return [state, setState, stateError];
}

export default useStateWithValidation;
