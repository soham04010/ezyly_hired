"use client";
import React from 'react';

const AccoladesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#424242] mb-8 sm:mb-12 md:mb-16">You're in good company</h2>
        
        <div className="flex justify-center mb-8 sm:mb-12">
          <a 
            href="https://www.e-verify.gov/e-verify-employer-search"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="/E-Verify_Logo-2x.png"
              alt="E-Verify Logo"
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccoladesSection;
