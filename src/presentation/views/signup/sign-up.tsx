import React, { useState } from 'react';
import {
  BoxContent,
  Button,
  Input,
  Typography,
} from '~/presentation/components';
import StatusIndicator from '~/presentation/components/status-indicator/status-indicator';
import { useStateWithValidation } from '~/presentation/hooks';
import { Validation } from '~/presentation/contracts/validation';
import { AddAccount } from '~/domain/usecases';
import { useNavigate } from 'react-router-dom';

type SignUpProps = {
  validation: Validation;
  signUp: AddAccount;
};

type SignUpState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialState: SignUpState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: React.FC<SignUpProps> = ({ validation, signUp }) => {
  const navigate = useNavigate();
  const [state, setState, stateError] = useStateWithValidation<SignUpState>(
    initialState,
    validation
  );

  const appendState = (value: Partial<SignUpState>) => {
    setState((prev) => ({ ...prev, ...value }));
  };

  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  // const isAnyError = !!emailError || !!passwordError;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await signUp.add(state);
      navigate('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToLogin = () => {
    navigate('/');
  };

  return (
    <BoxContent center fillVertical>
      <BoxContent h={16} />
      <Typography variant="heading">SignUp</Typography>

      <BoxContent h={16} />
      <Input
        value={state.name}
        onChange={(e) => appendState({ name: e.target.value })}
        placeholder="Name"
        data-testid="name"
        error={!!(stateError as Record<keyof SignUpState, string>)?.name}
      />

      <BoxContent h={16} />
      <Input
        value={state.email}
        type="email"
        onChange={(e) => appendState({ email: e.target.value })}
        placeholder="E-mail"
        data-testid="email"
        error={!!(stateError as Record<keyof SignUpState, string>)?.email}
      />

      <BoxContent h={16} />
      <Input
        value={state.password}
        onChange={(e) => appendState({ password: e.target.value })}
        placeholder="Password"
        type="password"
        data-testid="password"
        error={!!(stateError as Record<keyof SignUpState, string>)?.password}
      />

      <BoxContent h={16} />
      <Input
        value={state.confirmPassword}
        onChange={(e) => appendState({ confirmPassword: e.target.value })}
        placeholder="Confirm Password"
        type="password"
        data-testid="confirmPassword"
        error={
          !!(stateError as Record<keyof SignUpState, string>)?.confirmPassword
        }
      />

      <BoxContent h={40} />

      <BoxContent inline>
        <Button inverted title="Back" onClick={navigateToLogin} />
        <BoxContent w={24} />
        <Button
          title="Submit"
          data-testid="submit-button"
          // disabled={isAnyError}
          loading={isLoading}
          onClick={onSubmit}
        />
      </BoxContent>
    </BoxContent>
  );
};

export default SignUp;
