"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      title: "Salary Guide",
      description: "Get the latest data for 450-plus positions and learn what you should earn or pay in local and global markets.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      gradient: "from-teal-400 via-yellow-400 to-orange-400"
    },
    {
      title: "What jobs are in demand?",
      description: "Check out our Demand for Skilled Talent report to learn about employers' hiring plans and needs.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      gradient: "from-blue-900 to-blue-600"
    },
    {
      title: "Navigate tech skills gaps", 
      description: "Discover strategies for building a comprehensive tech team to support business priorities.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      title: "Multigenerational workforce",
      description: "Learn how to build an inclusive workplace that works for today's professionals across all life stages and careers.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop", 
      gradient: "from-gray-300 to-gray-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div></div>
          <div className="flex space-x-2">
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`h-64 bg-gradient-to-br ${insight.gradient} relative overflow-hidden`}>
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
