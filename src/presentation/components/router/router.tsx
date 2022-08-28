import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '~/presentation/modules/user-account';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
