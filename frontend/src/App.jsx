import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthProvider from './context/AuthContext';
import MentorsPage from './pages/MentorsPage';
import ProfilePage from './pages/ProfilePage';
import MentorSignPage from './pages/MentorSignPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit" element={<ProfilePage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/apply" element={<MentorSignPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
