import React from 'react';
import { AddAccount, AddAccountParams } from '~/domain/usecases';
import { SignUp } from '~/presentation/views/signup';
import { makeSignUpValidation } from './signup-validation-factory';

//TODO - remove mock
class AddAcountStub implements AddAccount {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async add(params: AddAccountParams) {
    return;
  }
}

export const MakeSignUp: React.FC = () => (
  <SignUp signUp={new AddAcountStub()} validation={makeSignUpValidation()} />
);
