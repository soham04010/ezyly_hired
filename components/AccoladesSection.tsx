"use client";
import React from 'react';

const AccoladesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          You're in good company
        </h2>
        
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <div className="flex animate-scroll space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-20">
            {/* First set of logos */}
            {/* <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/7d0e971e-28c7-4cf1-8e39-7fd1691f627b.png"
                alt="E-Verify Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div> */}
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            {/* Duplicate set for seamless loop */}
            {/* <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/7d0e971e-28c7-4cf1-8e39-7fd1691f627b.png"
                alt="E-Verify Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div> */}
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"></p>
      </div>
    </section>
  );
};

export default AccoladesSection;
