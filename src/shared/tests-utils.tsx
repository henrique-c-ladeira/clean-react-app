import { render as TLRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~/presentation/theme';

export const render = (component: JSX.Element) =>
  TLRender(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export * from '@testing-library/react';
