import React, { useState } from 'react';
import { Authentication } from '~/domain/usecases/authentication';
import { SaveAccessToken } from '~/domain/usecases/save-access-token';
import {
  BoxContent,
  Button,
  Input,
  Switch,
  Typography,
} from '~/presentation/components';
import StatusIndicator from '~/presentation/components/status-indicator/status-indicator';
import { useStateWithValidation } from '~/presentation/hooks';
import { Validation } from '~/presentation/contracts/validation';
import { useNavigate } from 'react-router-dom';

type LoginProps = {
  validation: Validation;
  authentication: Authentication;
  saveAccessToken: SaveAccessToken;
};

type LoginState = {
  email: string;
  password: string;
};

const initalState = {
  email: '',
  password: '',
};

const Login: React.FC<LoginProps> = ({
  validation,
  authentication,
  saveAccessToken,
}) => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const [state, setState, stateError] = useStateWithValidation<LoginState>(
    initalState,
    validation
  );

  const appendState = (value: Partial<LoginState>) => {
    setState((prev) => ({ ...prev, ...value }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const isAnyError = !!stateError?.email || !!stateError?.password;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await authentication.auth({
        email: state.email,
        password: state.password,
      });
      console.log(result);
      await saveAccessToken.save(result.accessToken);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <BoxContent center fillVertical>
      <Switch active={active} onToggle={() => setActive((prev) => !prev)} />
      <BoxContent h={16} />
      <Typography variant="heading">Login</Typography>
      <BoxContent h={16} />
      <Input
        value={state.email}
        onChange={(e) => appendState({ email: e.target.value })}
        type="email"
        placeholder="E-mail"
        data-testid="email"
        error={!!stateError?.email}
      />
      <BoxContent h={16} />
      <Input
        value={state.password}
        onChange={(e) => appendState({ password: e.target.value })}
        type="password"
        placeholder="Password"
        data-testid="password"
        error={!!stateError?.password}
      />
      <BoxContent h={40} />
      <Button
        title="Submit"
        data-testid="submit-button"
        disabled={isAnyError}
        loading={isLoading}
        onClick={onSubmit}
      />
      <Button title="Sign up" onClick={navigateToSignUp} />
      <StatusIndicator />
    </BoxContent>
  );
};

export default Login;
