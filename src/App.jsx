import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { mockTweets, trendingTopics, whoToFollow } from './utils/mockData';
import Login from './components/Login';
import Signup from './components/Signup';
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
