import React from 'react';
import Login from '~/presentation/views/login/login-screen';
import { makeLocalSaveAccessToken } from '../../usecases/local-save-access-token';
import { makeRemoteAuthentication } from '../../usecases/remote-authentication-factory';
import { makeLoginValidation } from './login-validation-factory';

export const MakeLogin: React.FC = () => (
  <Login
    validation={makeLoginValidation()}
    authentication={makeRemoteAuthentication()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
);
