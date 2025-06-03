"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const HiringSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-200">
                <path d="M20,50 Q50,10 80,50 Q50,90 20,50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" 
              alt="Business team meeting"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
              Find your next hire
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Preview recruiter-assessed and AI-matched candidates
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Book a consultation with one of our recruiters to discuss your hiring needs
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Get dedicated expert support at every step of the way
                </p>
              </div>
            </div>
            
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-full">
              Preview candidates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
