import { getByTestId } from '@testing-library/react';
import React from 'react';
import { render } from '~/shared/tests-utils';
import { LoginScreen } from '.';

describe('LoginScreen Component', () => {
  it('should render initial state correctly', () => {
    const sut = render(<LoginScreen />);
    expect(sut.queryByTestId('status-indicator')).toBeNull();
    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
