import React from 'react';
import Login from '~/presentation/modules/user-account/login-screen';
import { ValidationBuilder } from '~/validation/builder/validation-builder';
import { ValidationComposite } from '~/validation/validators';

export const MakeLogin: React.FC = () => {
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
  ]);
  return <Login validation={validationComposite} />;
};
