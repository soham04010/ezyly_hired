"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop" 
          alt="Professional woman with laptop" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-teal-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl pt-16 sm:pt-20 md:pt-24">
          <h1 className="text-white mb-6 sm:mb-8 leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans mb-2 sm:mb-4">
              Your Dream Job 
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans">
              Awaits
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans">
               Let's Make It Happen!
            </span>
          </h1>
          
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed">
           Guaranteed Placement Within 90 Days
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full min-w-[160px] h-12 sm:h-14">
              Find a job
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full bg-transparent min-w-[160px] h-12 sm:h-14">
              Hire talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
