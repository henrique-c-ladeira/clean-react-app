import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '~/presentation/components';
import { GlobalStyle, theme } from '~/presentation/theme';
import { MakeLogin } from '../factories/views/login/login-factory';
import { MakeSignUp } from '../factories/views/sign-up/sign-up-factory';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router MakeLogin={MakeLogin} MakeSignUp={MakeSignUp} />
  </ThemeProvider>
);
