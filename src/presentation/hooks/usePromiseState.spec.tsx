import { useCallback } from 'react';
import { fireEvent, render, waitFor } from '~/shared/tests-utils';
import usePromiseState from './usePromiseState';

const UsePromiseStateComponent = ({
  promise,
}: {
  promise: () => Promise<string>;
}) => {
  const { data, status, exec, error } = usePromiseState(promise);

  return (
    <div>
      <button onClick={exec} data-testid="exec" />
      <div data-testid="status">{status}</div>
      <div data-testid="data">{`${data}`}</div>
      <div data-testid="error">{`${error}`}</div>
    </div>
  );
};

const makeSut = (promise: () => Promise<string> = jest.fn()) => {
  const sut = render(<UsePromiseStateComponent promise={promise} />);
  return { sut, promise };
};

describe('usePromiseState', () => {
  it('should start with idle status', async () => {
    const { sut } = makeSut();

    await waitFor(async () => {
      expect(sut.getByTestId('status').textContent).toBe('idle');
    });
  });

  it('should resolve to success status', async () => {
    const promiseMock = jest.fn();
    promiseMock.mockImplementation(() => Promise.resolve());

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('status').textContent).toBe('success');
    });
  });

  it('should rejects to error status', async () => {
    const promiseMock = jest.fn();
    promiseMock.mockImplementation(() => Promise.reject());

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('status').textContent).toBe('error');
    });
  });

  it('should have pending status while trying to resolve', async () => {
    const promiseMock = jest.fn();
    promiseMock.mockImplementation(
      () => new Promise((resolve) => setTimeout(resolve, 10))
    );

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(
      () => {
        expect(sut.getByTestId('status').textContent).toBe('pending');
      },
      { timeout: 5 }
    );
  });

  it('should return data if promise resolves', async () => {
    const promiseMock = jest.fn();
    const dataMock = 'any_data';
    promiseMock.mockImplementation(() => Promise.resolve(dataMock));

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('data').textContent).toBe(dataMock);
    });
  });

  it('should return error = null if promise resolves', async () => {
    const promiseMock = jest.fn();
    const dataMock = 'any_data';
    promiseMock.mockImplementation(() => Promise.reject(dataMock));

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('error').textContent).toBe('null');
    });
  });

  it('should return data = null if promise rejects', async () => {
    const promiseMock = jest.fn();
    const dataMock = 'any_data';
    promiseMock.mockImplementation(() => Promise.reject(dataMock));

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('data').textContent).toBe('null');
    });
  });

  it('should return error message if promise rejects', async () => {
    const promiseMock = jest.fn();
    const errorMock = { message: 'error_message' };
    promiseMock.mockImplementation(() => Promise.reject(errorMock));

    const { sut } = makeSut(promiseMock);

    fireEvent.click(sut.getByTestId('exec'));

    await waitFor(() => {
      expect(sut.getByTestId('error').textContent).toBe('error_message');
    });
  });
});
