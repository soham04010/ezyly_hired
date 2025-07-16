"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetCurrent = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
  }, [isTransitioning]);

  const next = useCallback(() => {
    handleSetCurrent((current + 1) % testimonials.length);
  }, [current, handleSetCurrent]);

  const prev = useCallback(() => {
    handleSetCurrent((current - 1 + testimonials.length) % testimonials.length);
  }, [current, handleSetCurrent]);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000); // auto-scroll every 6 seconds
    return () => clearInterval(timer);
  }, [next]);

  const currentTestimonial = testimonials[current];

  return (
    <section id="TestimonialsSection" className="bg-gradient-to-br from-slate-50 via-gray-50 to-sky-100 py-16 sm:py-20 md:py-24 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
          Real stories from satisfied partners who trust High Wages.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 relative z-10 border border-gray-100">
          <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 text-slate-100 transform -translate-x-1/4 -translate-y-1/4" />
          
          <div className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6 border-4 border-white shadow-lg">
                <AvatarImage src={currentTestimonial.image} alt={currentTestimonial.name} />
                <AvatarFallback>{currentTestimonial.name.substring(0, 1)}</AvatarFallback>
              </Avatar>

              <h3 className="font-semibold text-xl sm:text-2xl text-slate-800 mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm sm:text-base text-sky-600 font-medium mb-6">
                {currentTestimonial.title}
              </p>
              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-700 italic leading-relaxed max-w-xl mx-auto mb-8">
                "{currentTestimonial.quote}"
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 sm:mt-10">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 text-slate-600 hover:bg-slate-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSetCurrent(i)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none
                    ${ i === current ? "bg-sky-500 scale-125" : "bg-slate-300 hover:bg-slate-400" }
                  `}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 text-slate-600 hover:bg-slate-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
