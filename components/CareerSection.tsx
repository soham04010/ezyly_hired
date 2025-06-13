"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CareerSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 sm:-top-6 md:-top-10 -left-4 sm:-left-6 md:-left-10 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-200">
                <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
              alt="Professional woman smiling"
              className="rounded-xl sm:rounded-2xl shadow-xl w-full"
            />
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#424242] mb-6 sm:mb-8 leading-tight">
              Why Ezyly Hired Works
            </h2>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Get instant job recommendations tailored to your skills and goals
                </p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent
                </p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Access competitive pay, benefits, and free online training and development
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium rounded-full w-full sm:w-auto">
                Learn more
              </Button>
              {/* <Button variant="outline" className="border-2 border-gray-900 text-[#424242] hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium rounded-full w-full sm:w-auto">
                Learn more
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
