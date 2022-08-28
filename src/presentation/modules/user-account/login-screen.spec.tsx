import { render, RenderResult } from '~/shared/tests-utils';
import { LoginScreen } from '.';

type SutTypes = {
  sut: RenderResult;
};

const makeSut = (): SutTypes => {
  const sut = render(<LoginScreen />);
  return { sut };
};
describe('LoginScreen Component', () => {
  it('should render initial state correctly', () => {
    const { sut } = makeSut();
    expect(sut.queryByTestId('status-indicator')).toBeNull();
    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
