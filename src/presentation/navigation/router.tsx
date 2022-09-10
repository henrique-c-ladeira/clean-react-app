import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type Props = {
  MakeLogin: React.FC;
};

const Router: React.FC<Props> = ({ MakeLogin }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeLogin />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
