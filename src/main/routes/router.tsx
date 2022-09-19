import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MakeLogin } from '~/main/factories/views/login/login-factory';
import { MakeSignUp } from '~/main/factories/views/sign-up/sign-up-factory';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeLogin />} />
      <Route path="/signup" element={<MakeSignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
