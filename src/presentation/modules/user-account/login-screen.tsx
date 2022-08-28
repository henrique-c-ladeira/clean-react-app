import React from 'react';
import {
  BoxContent,
  Button,
  Input,
  Typography,
} from '~/presentation/components';
import StatusIndicator from '~/presentation/components/status-indicator/status-indicator';

const Login: React.FC = () => (
  <BoxContent center fillVertical>
    <Typography variant="heading">Login</Typography>
    <BoxContent h={16} />
    <Input type="email" placeholder="E-mail" />
    <BoxContent h={16} />
    <Input type="password" placeholder="Password" />
    <BoxContent h={40} />
    <Button title="Submit" data-testid="submit-button" disabled />
    <StatusIndicator />
  </BoxContent>
);

export default Login;
