"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const HiringSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 sm:-top-6 md:-top-10 -left-4 sm:-left-6 md:-left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-200">
                <path d="M20,50 Q50,10 80,50 Q50,90 20,50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" 
              alt="Business team meeting"
              className="rounded-xl sm:rounded-2xl shadow-xl w-full"
            />
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#424242] mb-6 sm:mb-8 leading-tight">
              Get Hired Within EAD Period
            </h2>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                Speak with a recruiter who understands your goals and the urgency of your timeline.
                </p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Get personalized support—from profile building to interview prep and job placement.
                </p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-base sm:text-lg">
                  Apply to exclusive roles with employers actively hiring international graduates.
                </p>
              </div>
            </div>
            
            <Button className="cursor-pointer bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium rounded-full w-full sm:w-auto font-gilroy">
             Start My Job Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
