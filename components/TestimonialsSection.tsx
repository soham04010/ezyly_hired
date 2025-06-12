"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const testimonials = [
  {
    name: "Richard Densen",
    title: "Lead Customer Executive at Skilight Indus",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    quote:
      "From beginning to end, the cooperation was smooth and contact with High wages's representatives was very easy.",
    rating: 5,
  },
  {
    name: "David Patel",
    title: "Talent Acquisition at TechNest",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
    quote:
      "An amazing hiring platform! We consistently get qualified candidates with minimal effort.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    title: "HR Director at BrightTech",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
    quote:
      "Reliable, quick, and professional service. We value the relationship we've built with the team.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000); // auto-scroll every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="TestimonialsSection" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 md:py-20 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
          What Do Our Clients Say About Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients
        </p>

        {/* Floating avatars - hidden on mobile for cleaner look */}
        <div className="hidden sm:flex absolute inset-x-0 top-16 justify-center gap-4 md:gap-6 opacity-20 blur-sm pointer-events-none">
          {testimonials.map((t, i) => (
            <img
              key={i}
              src={t.image}
              alt={t.name}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-full object-cover grayscale border-2 border-white shadow-lg transition-all duration-500 ${
                i === current ? "scale-125 opacity-60 blur-0" : ""
              }`}
            />
          ))}
        </div>

        {/* Testimonial Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 relative z-10 transition-all duration-700 ease-in-out border border-gray-100">
          {/* Quote Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 opacity-50" />
          </div>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl scale-110 opacity-30"></div>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl object-cover transition-all duration-700"
              />
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 italic max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 transition-opacity duration-700 ease-in-out px-2">
            "{testimonials[current].quote}"
          </p>

          {/* Star Rating */}
          <div className="flex justify-center mb-3 sm:mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <div className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">
            {testimonials[current].name}
          </div>
          <div className="text-sm sm:text-base md:text-lg text-blue-600 font-medium">
            {testimonials[current].title}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={prev}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    i === current 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Background Decorations - smaller on mobile */}
        <div className="absolute top-8 left-4 sm:top-10 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-8 right-4 sm:bottom-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-2 sm:left-5 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
