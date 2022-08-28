import React from 'react';
import { BoxContent, Input, Typography } from '~/presentation/components';

const Login: React.FC = () => (
  <BoxContent center>
    <Typography>Login</Typography>
    <Input type="email" placeholder="E-mail" />
    <Input type="password" placeholder="Password" />
  </BoxContent>
);

export default Login;
