
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Spinning ring around the logo */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-b-green-500 border-l-green-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Static logo in the center */}
          <img 
            src="/Fevicon_website.png" 
            alt="Loading" 
            className="w-16 h-16 relative z-10"
          />
        </div>
        <div className="text-lg font-medium text-foreground">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
