import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '~/presentation/theme';
import Router from '~/main/routes/router';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
