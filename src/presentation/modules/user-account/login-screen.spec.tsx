import { faker } from '@faker-js/faker';
import { ValidationSpy } from '~/presentation/test';
import { cleanup, fireEvent, render, RenderResult } from '~/shared/tests-utils';
import LoginScreen from './login-screen';

type SutTypes = {
  sut: RenderResult;
  validationSpy: ValidationSpy;
};

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy();
  const sut = render(<LoginScreen validation={validationSpy} />);
  return { sut, validationSpy };
};

describe('LoginScreen Component', () => {
  afterEach(cleanup);

  it('should render initial state correctly', () => {
    const { sut } = makeSut();
    expect(sut.queryByTestId('status-indicator')).toBeNull();
    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });

  it('should call validation correctly with email and password', () => {
    const { sut, validationSpy } = makeSut();
    const emailInput = sut.getByTestId('email');

    const email = faker.internet.email();
    const password = faker.internet.password();

    fireEvent.input(emailInput, { target: { value: email } });
    expect(validationSpy.input).toEqual({
      email,
    });

    const passwordInput = sut.getByTestId('password');
    fireEvent.input(passwordInput, { target: { value: password } });
    expect(validationSpy.input).toEqual({
      password,
    });
  });
});
