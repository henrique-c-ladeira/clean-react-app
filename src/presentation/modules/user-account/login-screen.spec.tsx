import React from 'react';
import { render } from '~/shared/tests-utils';
import { LoginScreen } from '.';

describe('LoginScreen Component', () => {
  it('should not render loading or error on start', () => {
    const sut = render(<LoginScreen />);
    expect(sut.queryByTestId('status-indicator')).toBeNull();
  });
});
