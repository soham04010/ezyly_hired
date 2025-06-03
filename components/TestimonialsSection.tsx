"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I have worked with recruiters across several placements and am always impressed with their enthusiasm, empathy and communication.",
      author: "Graphic designer",
      type: "left"
    },
    {
      quote: "Robert Half understood our expectations and brought me unicorn candidates — the kind who get rave reviews by colleagues in their first week.",
      author: "Chief client officer",
      type: "center"
    },
    {
      quote: "They look for candidates who aren't just qualified, but who are truly engaged and excited about the work and the company culture.",
      author: "Administrator",
      type: "right"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Explore testimonials</h2>
        </div>
        
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-gray-900 font-medium not-italic">- {testimonial.author}</cite>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center space-x-2">
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-3 rounded-full border border-gray-300 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-12 h-1 bg-gray-300 rounded"></div>
            <div className="w-12 h-1 bg-blue-600 rounded"></div>
            <div className="w-12 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
