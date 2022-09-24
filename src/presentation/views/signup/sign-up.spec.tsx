import { AddAccount } from '~/domain/usecases';
import { ValidationSpy } from '~/presentation/test';
import { cleanup, render, RenderResult } from '~/shared/tests-utils';
import { SignUp } from '.';

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

// TODO - add tests for add account
// and remove Spy from this file
class AddAcountSpy implements AddAccount {
  async add(): Promise<void> {
    return;
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const addAccountSpy = new AddAcountSpy();
  const sut = render(
    <SignUp validation={validationSpy} signUp={addAccountSpy} />
  );
  return { sut, validationSpy };
};

describe('SignUp Component', () => {
  afterEach(cleanup);

  it.todo('should render initial state correctly');

  it.todo('should call validation correctly with all fields');

  it.todo(
    'should render validation success if email and password input correctly'
  );
});
