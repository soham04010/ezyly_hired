"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JobCategoriesSection = () => {
  const categories = [
    "Finance & Accounting",
    "Technology", 
    "Marketing & Creative",
    "Legal",
    "Administrative & Customer Support"
  ];

  const trendingJobs = [
    { title: "Graphic designer", category: "left" },
    { title: "Digital marketing specialist", category: "right" },
    { title: "Copywriter", category: "left" },
    { title: "UX designer", category: "right" },
    { title: "Production artist", category: "left" },
    { title: "Marketing manager", category: "right" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 relative">
          <div className="flex space-x-0 bg-white rounded-full p-1 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 2 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="absolute right-0 top-0 flex space-x-2">
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From copywriters to creative directors, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trending job titles</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {trendingJobs.filter(job => job.category === 'left').map((job, index) => (
                  <a key={index} href="#" className="block text-blue-600 hover:text-blue-700 font-medium underline">
                    {job.title}
                  </a>
                ))}
              </div>
              <div className="space-y-4">
                {trendingJobs.filter(job => job.category === 'right').map((job, index) => (
                  <a key={index} href="#" className="block text-blue-600 hover:text-blue-700 font-medium underline">
                    {job.title}
                  </a>
                ))}
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6">
              Learn more about our Marketing and Creative hiring solutions →
            </a>
          </div>
          
          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" 
                    alt="Creative professional"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" 
                    alt="Marketing professional"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategoriesSection;
