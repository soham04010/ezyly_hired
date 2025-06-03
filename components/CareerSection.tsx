"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CareerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-200">
                <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
              alt="Professional woman smiling"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
              Make the career move you want
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Get instant job recommendations tailored to your skills and goals
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Gain exposure to a range of companies and job types: fully remote, hybrid or on-site, and contract or permanent
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Access competitive pay, benefits, and free online training and development
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-full">
                Get job matches
              </Button>
              <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg font-medium rounded-full">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
