import React from 'react';
import { AddAccount } from '~/domain/usecases';
import { SignUp } from '~/presentation/views/signup';
import { makeSignUpValidation } from './sign-up-validation-factory';

//TODO - remove mock
class AddAcountStub implements AddAccount {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async add(params: AddAccount.Params) {
    return;
  }
}

export const MakeSignUp: React.FC = () => (
  <SignUp signUp={new AddAcountStub()} validation={makeSignUpValidation()} />
);
