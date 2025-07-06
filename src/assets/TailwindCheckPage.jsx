// TailwindCheckPage.jsx

import React from 'react';

const TailwindCheckPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS Test Page
        </h1>
        <p className="text-gray-700 mb-4">
          If you can see colors, spacing, and fonts correctly, Tailwind CSS is working!
        </p>
        <div className="flex gap-4 justify-center">
          <div className="w-16 h-16 bg-red-500 rounded-full"></div>
          <div className="w-16 h-16 bg-green-500 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default TailwindCheckPage;
