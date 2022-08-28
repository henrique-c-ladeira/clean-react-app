import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '~/presentation/modules/user-account';
import { Validation } from '~/presentation/protocols/validation';

// TODO - remove mock
class ValidationMock implements Validation {
  validate() {
    return 'error';
  }
}

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<LoginScreen validation={new ValidationMock()} />}
      />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
