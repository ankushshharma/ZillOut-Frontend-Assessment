import { useState } from 'react';

const SidebarLeft = () => {
  return (
    <div className="w-64 min-h-screen border-r border-gray-200 p-4">
      <div className="mb-8 px-4 py-2 flex items-center justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="32" height="32">
          <g fill="#fefbfb" fillRule="nonzero">
            <g transform="scale(5.12,5.12)">
              <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
            </g>
          </g>
        </svg>
      </div>
      <nav className="space-y-2">
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-full text-left bg-gray-100 text-gray-900 font-semibold">
          <span className="text-xl">🏠</span>
          <span className="text-lg">Home</span>
        </button>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-full text-left text-gray-700 hover:bg-gray-50">
          <span className="text-xl">🔍</span>
          <span className="text-lg">Explore</span>
        </button>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-full text-left text-gray-700 hover:bg-gray-50">
          <span className="text-xl">🔔</span>
          <span className="text-lg">Notifications</span>
        </button>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-full text-left text-gray-700 hover:bg-gray-50">
          <span className="text-xl">💬</span>
          <span className="text-lg">Messages</span>
        </button>
        <button className="w-full flex items-center space-x-4 px-4 py-3 rounded-full text-left text-gray-700 hover:bg-gray-50">
          <span className="text-xl">👤</span>
          <span className="text-lg">Profile</span>
        </button>
      </nav>
      <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-full mt-6 hover:bg-blue-600 transition-colors">
        Tweet
      </button>
    </div>
  );
};

export default SidebarLeft; 