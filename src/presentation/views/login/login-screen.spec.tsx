import { faker } from '@faker-js/faker';
import { AccountModel } from '~/domain/models';
import { Authentication } from '~/domain/usecases/authentication';
import { SaveAccessToken } from '~/domain/usecases/save-access-token';
import { ValidationSpy } from '~/presentation/test';
import { cleanup, fireEvent, render, RenderResult } from '~/shared/tests-utils';
import { Login } from '.';

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

jest.mock('react-router-dom', () => ({ useNavigate: jest.fn() }));

// TODO - add tests for authentication and saveAccessToken
// and remove Spy from this file
class AuthenticationSpy implements Authentication {
  auth(params: Authentication.Params): Promise<AccountModel> {
    return Promise.resolve({ accessToken: 'mock' });
  }
}
class SaveAccessTokenSpy implements SaveAccessToken {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async save(accessToken: string): Promise<void> {}
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(
    <Login
      saveAccessToken={new SaveAccessTokenSpy()}
      validation={validationSpy}
      authentication={new AuthenticationSpy()}
    />
  );
  return { sut, validationSpy };
};

describe('Login Component', () => {
  afterEach(cleanup);

  it('should render initial state correctly', () => {
    const { sut } = makeSut();
    expect(sut.queryByTestId('status-indicator')).toBeNull();
    expect(sut.getAllByText('❌'));
    expect(sut.queryByText('✅')).toBeNull();
    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('should call validation correctly with email and password', () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId('email');
    const passwordInput = sut.getByTestId('password');

    const email = faker.internet.email();
    const password = faker.internet.password();

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.input(passwordInput, { target: { value: password } });
    expect(validationSpy.input).toEqual({ email, password });
  });

  it('should render validation success if email and password input correctly', () => {
    const { sut, validationSpy } = makeSut();
    validationSpy.errorMessage = null;
    const emailInput = sut.getByTestId('email');
    const passwordInput = sut.getByTestId('password');

    const email = faker.internet.email();
    const password = faker.internet.password();

    fireEvent.input(emailInput, { target: { value: email } });
    fireEvent.input(passwordInput, { target: { value: password } });

    expect(sut.getAllByText('✅'));
    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(false);
  });
});
