import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from '../pages/access/SignUpPage.jsx';
import SignInPage from '../pages/access/SignInPage.jsx';
import ResetPasswordPage from '../pages/access/ResetPasswordPage.jsx';
import './Access.css';

const Access = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default Access