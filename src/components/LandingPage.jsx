import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const XLogo = () => (
    <svg viewBox="0 0 24 24" className="w-64 h-64 fill-white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

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
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex flex-1">
        {/* Left side - Logo */}
        <div className="flex-1 flex items-center justify-center">
          <XLogo />
        </div>
        {/* Right side - Content */}
        <div className="flex-1 flex items-center justify-center px-8 pb-2">
          <div className="max-w-md w-full">
            <h1 className="text-white text-6xl font-bold mb-8 leading-tight whitespace-nowrap">
              Happening now
            </h1>
            
            <h2 className="text-white text-3xl font-bold mb-8">
              Join today.
            </h2>
            
            <div className="space-y-4 mb-8">
              <button 
                onClick={openSignup}
                className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
              >
                <GoogleIcon />
                <span>Sign up with Google</span>
              </button>
              
              <button 
                onClick={openSignup}
                className="w-full bg-white text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
              >
                <AppleIcon />
                <span>Sign up with Apple</span>
              </button>
              
              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-gray-600"></div>
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <div className="flex-1 border-t border-gray-600"></div>
              </div>
              
              <button 
                onClick={openSignup}
                className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-full hover:bg-blue-600 transition-colors"
              >
                Create account
              </button>
              
              <div className="text-xs text-gray-500 mt-4">
                By signing up, you agree to the{' '}
                <Link to="/tos" className="text-blue-500 hover:text-blue-400">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-blue-500 hover:text-blue-400">Privacy Policy</Link>
                , including{' '}
                <Link to="/cookies" className="text-blue-500 hover:text-blue-400">Cookie Use</Link>.
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                Already have an account?
              </h3>
              <button 
                onClick={openLogin}
                className="w-full bg-transparent border border-gray-600 text-blue-500 font-semibold py-3 px-4 rounded-full hover:bg-gray-900 transition-colors"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full py-4">
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-gray-500 text-sm max-w-5xl mx-auto">
          <a href="#" className="hover:text-gray-300">About</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Get the X app</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Get the Grok app</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Careers</a>
          <span>|</span>
          <Link to="/tos" className="hover:text-gray-300">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          <span>|</span>
          <Link to="/cookies" className="hover:text-gray-300">Cookie Policy</Link>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Developers</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Advertising</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">Settings</a>
          <span>|</span>
          <span className="text-gray-400">© 2025 X Corp.</span>
        </div>
      </footer>
      {/* Login Modal */}
      {showLogin && (
        <Login 
          onClose={closeModals}
          onSwitchToSignup={openSignup}
        />
      )}
      {/* Signup Modal */}
      {showSignup && (
        <Signup 
          onClose={closeModals}
          onSwitchToLogin={openLogin}
        />
      )}
    </div>
  );
};

export default LandingPage; 