import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { mockTweets, trendingTopics, whoToFollow } from './utils/mockData';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './components/LandingPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiesPolicy from './components/CookiesPolicy';
import TwitterHome from './components/TwitterHome';
import { Toaster } from 'react-hot-toast';

// Main App Component
function App() {
  // Use context to check auth status
  const AuthRoutes = () => {
    const { currentUser } = useAuth();
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route
          path="/"
          element={<TwitterHome />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  };

  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" toastOptions={{ style: { background: '#16181c', color: '#fff' } }} />
        <AuthRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
