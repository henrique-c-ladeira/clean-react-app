import React from 'react';
import { RemoteAuthentication } from '~/data/usecases/authentication/remote-authentication';
import { AxiosHttpAdapter } from '~/infra/http/axios-http-adapter/axios-http-adapter';
import Login from '~/presentation/views/user-account/login-screen';
import { ValidationBuilder } from '~/validation/builder/validation-builder';
import { ValidationComposite } from '~/validation/validators';

export const MakeLogin: React.FC = () => {
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
  ]);
  const url = 'https://blooming-bayou-30676.herokuapp.com/token';
  const httpClient = new AxiosHttpAdapter();
  const authentication = new RemoteAuthentication(url, httpClient);
  return (
    <Login validation={validationComposite} authentication={authentication} />
  );
};
