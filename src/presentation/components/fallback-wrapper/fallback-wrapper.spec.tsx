import { render } from '~/shared/tests-utils';
import FallbackWrapper, { Status } from './fallback-wrapper';

const makeSut = (status: Status = 'idle') => {
  const sut = render(
    <FallbackWrapper
      status={status}
      renderSuccess={() => <div data-testid="success" />}
    />
  );
  return { sut };
};

describe('Fallback Wrapper', () => {
  it('should render success if status is success', () => {
    const { sut } = makeSut('success');
    expect(sut.getByTestId('success'));
  });

  it('should NOT render success if status idle', () => {
    const { sut } = makeSut('idle');
    expect(sut.queryByTestId('success')).toBeNull();
  });

  it('should NOT render success if status pending', () => {
    const { sut } = makeSut('pending');
    expect(sut.queryByTestId('success')).toBeNull();
  });

  it('should NOT render success if status error', () => {
    const { sut } = makeSut('error');
    expect(sut.queryByTestId('success')).toBeNull();
  });

  it('should render default loading indicator if status is pending', () => {
    const { sut } = makeSut('pending');
    expect(sut.getByTestId('default-loading'));
  });

  it('should render default error if status is error', () => {
    const { sut } = makeSut('error');
    expect(sut.getByTestId('default-error'));
  });

  it('should render null if status is idle', () => {
    const { sut } = makeSut('idle');
    expect(sut.container.innerHTML).toEqual('');
  });
});
