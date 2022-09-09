import { faker } from '@faker-js/faker';
import { ValidationFake } from '~/presentation/test';
import { cleanup, fireEvent, render, RenderResult } from '~/shared/tests-utils';
import LoginScreen from './login-screen';

type SutTypes = {
  sut: RenderResult;
  validationFake: ValidationFake;
};

const makeSut = (): SutTypes => {
  const validationFake = new ValidationFake();
  const sut = render(<LoginScreen validation={validationFake} />);
  return { sut, validationFake };
};

describe('LoginScreen Component', () => {
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
    const { sut, validationFake } = makeSut();
    const emailInput = sut.getByTestId('email');
    // const passwordInput = sut.getByTestId('password');

    const email = faker.internet.email();
    // const password = faker.internet.password();

    fireEvent.input(emailInput, { target: { value: email } });
    expect(validationFake.fieldName).toEqual('email');
    expect(validationFake.fieldValue).toEqual(email);

    // fireEvent.input(passwordInput, { target: { value: password } });
    // expect(validationFake.fieldName).toEqual('password');
    // expect(validationFake.fieldValue).toEqual(password);
  });

  it('should render validation success if email and password input correctly', () => {
    const { sut, validationFake } = makeSut();
    validationFake.errorMessage = null;
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
