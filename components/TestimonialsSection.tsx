"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const testimonials = [
  {
    name: "Richard Densen",
    title: "Lead Customer Executive at Skilight Indus",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    quote:
      "From beginning to end, the cooperation was smooth and contact with High wages’s representatives was very easy.",
  },
  {
    name: "David Patel",
    title: "Talent Acquisition at TechNest",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    quote:
      "An amazing hiring platform! We consistently get qualified candidates with minimal effort.",
  },
  {
    name: "Sophia Lee",
    title: "HR Director at BrightTech",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    quote:
      "Reliable, quick, and professional service. We value the relationship we’ve built with the team.",
  },
];

export default function Testimonial() {
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
    <section className="relative bg-white py-24 text-center overflow-hidden">
      {/* <h2 className="text-4xl font-bold mb-20">What Do Our Clients Say About Us</h2> */}

      {/* Floating avatars */}
      <div className="absolute inset-x-0 top-10 flex justify-center gap-6 opacity-30 blur-sm pointer-events-none">
        {testimonials.map((t, i) => (
          <img
            key={i}
            src={t.image}
            alt={t.name}
            className={`w-12 h-12 rounded-full object-cover grayscale border-2 border-white ${
              i === current ? "scale-125 opacity-80 blur-0" : ""
            }`}
          />
        ))}
      </div>

      {/* Testimonial Box */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 relative z-10 transition-all duration-700 ease-in-out">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-100 blur-2xl scale-110"></div>
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="relative z-10 w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-lg text-gray-700 italic max-w-2xl mx-auto transition-opacity duration-700 ease-in-out">
          “{testimonials[current].quote}”
        </p>
        <div className="mt-4 font-bold text-gray-900">{testimonials[current].name}</div>
        <div className="text-sm text-blue-500">{testimonials[current].title}</div>

        {/* Arrows */}
        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
