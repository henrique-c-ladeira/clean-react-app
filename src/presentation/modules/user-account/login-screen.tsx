import React, { useEffect, useState } from 'react';
import {
  BoxContent,
  Button,
  Input,
  Typography,
} from '~/presentation/components';
import StatusIndicator from '~/presentation/components/status-indicator/status-indicator';
import { Validation } from '~/presentation/protocols/validation';

type LoginProps = {
  validation: Validation;
};

const Login: React.FC<LoginProps> = ({ validation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    validation.validate({ email });
  }, [email]);

  useEffect(() => {
    validation.validate({ password });
  }, [password]);

  return (
    <BoxContent center fillVertical>
      <Typography variant="heading">Login</Typography>
      <BoxContent h={16} />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
        data-testid="email"
        error
      />
      <BoxContent h={16} />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        data-testid="password"
        error
      />
      <BoxContent h={40} />
      <Button title="Submit" data-testid="submit-button" disabled />
      <StatusIndicator />
    </BoxContent>
  );
};

export default Login;
