"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/banner.jpg" 
          alt="Professional woman with laptop" 
          className="w-full h-max object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-teal-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8] h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-white mb-8 leading-tight">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-sans mb-4">
              Your Dream Job Awaits 
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-sans mb-4">
               Let's Make It Happen!
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">
              
            </span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
           Guaranteed Placement Within 90 Days
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-medium rounded-full">
              Find a job
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-medium rounded-full bg-transparent">
              Hire talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;