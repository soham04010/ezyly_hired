"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      title: "90‑Day Job Placement Assurance",
      description: "Get the latest data for 450-plus positions With US OPT deadlines and post‑study visa windows, timing is critical—our 90‑day placement commitment keeps your future on track.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      gradient: "from-teal-400 via-yellow-400 to-orange-400"
    },
    {
      title: "Tailored for Global Students",
      description: "Whether you studied in the US, UK, or Canada, we understand visa nuances and connector local employers with international talent.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      gradient: "from-blue-900 to-blue-600"
    },
    {
      title: "End‑to‑End Support", 
      description: "From resume optimization and interview prep to employer outreach and onboarding—you’re supported every step of the way.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      title: "Extensive Employer Network",
      description: "Get fast-tracked to top roles through our 500+ company network hiring international grads across the US, UK & Canada.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop", 
      gradient: "from-gray-300 to-gray-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div></div>
          {/* <div className="flex space-x-2">
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div> */}
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
