import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onClose = null }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: name/email, 2: password
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose();
    } else {
      navigate('/');
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!displayName || !email) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, displayName);
      handleClose(); // Close the modal
      // Navigation will be handled by the App component when user state changes
    } catch (error) {
      setError('Failed to create an account. ' + error.message);
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      handleClose(); // Close the modal
      // Navigation will be handled by the App component when user state changes
    } catch (error) {
      setError('Failed to sign up with Google.');
      console.error('Google sign-up error:', error);
    } finally {
      setLoading(false);
    }
  };

  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black rounded-2xl p-8 w-full max-w-md mx-4 relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white mb-6">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          
          <h2 className="text-white text-2xl font-bold mb-8">Join X today</h2>
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500 text-white p-3 rounded-lg text-sm mb-4 w-full">
              {error}
            </div>
          )}
          
          <div className="w-full space-y-4">
            <button
              onClick={handleGoogleSignUp}
              disabled={loading}
              className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <GoogleIcon />
              <span>Sign up with Google</span>
            </button>
            
            <button className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
              <AppleIcon />
              <span>Sign up with Apple</span>
            </button>
            
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-600"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>
            
            {/* Step 1: Name/Email */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Name"
                  className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:border-blue-500 focus:outline-none"
                  autoFocus
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Phone, email, or username"
                  className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Next
                </button>
              </form>
            )}
            
            {/* Step 2: Passwords */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:border-blue-500 focus:outline-none"
                  autoFocus
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-500 py-3 px-4 rounded-md focus:border-blue-500 focus:outline-none"
                />
                <div className="flex items-center">
                  <input
                    id="showPassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="mr-2"
                  />
                  <label htmlFor="showPassword" className="text-sm text-gray-400">Show password</label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
              </form>
            )}
            
            <div className="text-xs text-gray-500 mt-4">
              By signing up, you agree to the{' '}
              <a href="#" className="text-blue-500 hover:text-blue-400">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-500 hover:text-blue-400">Privacy Policy</a>
              , including{' '}
              <a href="#" className="text-blue-500 hover:text-blue-400">Cookie Use</a>.
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <span className="text-gray-500">Have an account already? </span>
            <button 
              onClick={onSwitchToLogin}
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 