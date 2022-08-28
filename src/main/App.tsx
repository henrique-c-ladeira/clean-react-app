import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '~/presentation/components';
import { GlobalStyle, theme } from '~/presentation/theme';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
