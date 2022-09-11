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
import { Validation } from '~/presentation/protocols/validation';

type LoginProps = {
  validation: Validation;
  authentication: Authentication;
  saveAccessToken: SaveAccessToken;
};

const Login: React.FC<LoginProps> = ({
  validation,
  authentication,
  saveAccessToken,
}) => {
  const [active, setActive] = useState(false);

  const validateField = (fieldName: string) => (fieldValue: string) =>
    validation.validate(fieldName, fieldValue);

  const [email, setEmail, emailError] = useStateWithValidation<string>(
    '',
    validateField('email')
  );
  const [password, setPassword, passwordError] = useStateWithValidation<string>(
    '',
    validateField('password')
  );

  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);

  const isAnyError = !!emailError || !!passwordError;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const result = await authentication.auth({ email, password });
      console.log(result);
      await saveAccessToken.save(result.accessToken);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BoxContent center fillVertical>
      <Switch active={active} onToggle={() => setActive((prev) => !prev)} />
      <BoxContent h={16} />
      <Typography variant="heading">Login</Typography>
      <BoxContent h={16} />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
        data-testid="email"
        error={!!emailError}
      />
      <BoxContent h={16} />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        data-testid="password"
        error={!!passwordError}
      />
      <BoxContent h={40} />
      <Button
        title="Submit"
        data-testid="submit-button"
        disabled={isAnyError}
        loading={isLoading}
        onClick={onSubmit}
      />
      <StatusIndicator />
    </BoxContent>
  );
};

export default Login;
