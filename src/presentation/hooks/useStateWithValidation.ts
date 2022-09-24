import { useEffect, useState } from 'react';
import { Validation } from '../contracts/validation';

type ValidationReturn<T> = Record<keyof T, string | null> | null;

function useStateWithValidation<T extends object>(
  initialState: T,
  validation: Validation
): [T, React.Dispatch<React.SetStateAction<T>>, ValidationReturn<T>] {
  const [state, setState] = useState<T>(initialState);
  const [stateError, setStateError] = useState<ValidationReturn<T>>(null);

  const validateState = (state: T): ValidationReturn<T> =>
    Object.keys(state).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: validation.validate(cur, state as Record<string, string>),
      }),
      {}
    ) as ValidationReturn<T>;

  useEffect(() => {
    setStateError(validateState(state));
  }, [state]);

  return [state, setState, stateError];
}

export default useStateWithValidation;
