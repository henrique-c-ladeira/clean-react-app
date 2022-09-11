import React from 'react';
import { render } from '~/shared/tests-utils';
import { App } from './App';

const makeSut = () => {
  const sut = render(<App />);
  return { sut };
};

describe('App', () => {
  it('should render child nodes', () => {
    const { sut } = makeSut();
    expect(sut.container.hasChildNodes()).toBeTruthy();
  });
});
