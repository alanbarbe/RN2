import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;