"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ConsultingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
              Consulting solutions to drive business impact
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Develop a clear vision and strategy
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Enhance business performance with critical technologies and processes
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-gray-700 text-lg">
                  Implement a plan or manage operations
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-full">
                Find your consulting solution
              </Button>
              <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg font-medium rounded-full">
                Learn more
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-200">
                <path d="M20,50 Q50,10 80,50 Q50,90 20,50" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop" 
              alt="Consulting team at work"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
