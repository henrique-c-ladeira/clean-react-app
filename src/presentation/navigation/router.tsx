import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type Props = {
  MakeLogin: React.FC;
  MakeSignUp: React.FC;
};

const Router: React.FC<Props> = ({ MakeLogin, MakeSignUp }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeLogin />} />
      <Route path="/signup" element={<MakeSignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
