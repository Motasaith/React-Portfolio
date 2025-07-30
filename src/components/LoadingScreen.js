import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="loading-dots mb-8">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          Abdul Rauf Azhar
        </h1>
        <p className="text-xl text-blue-100 animate-fade-in">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
