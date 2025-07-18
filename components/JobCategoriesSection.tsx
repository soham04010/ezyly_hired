"use client";
import React, { useState } from 'react';

const JobCategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: "Finance & Accounting",
      path: "/services/finance",
      description: "From accountants to CFOs, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      jobs: [
        { title: "Controller", category: "left" },
        { title: "Internal auditor", category: "right" },
        { title: "Senior accountant", category: "left" },
        { title: "Accounts payable/receivable specialist", category: "right" },
        { title: "Senior financial analyst", category: "left" },
        { title: "Bookkeeper", category: "right" }
      ],
      learnMore: "learn more about our hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      ]
    },
    {
      name: "Information Technology",
      path: "/services/technology",
      description: "From software developers to IT managers, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      jobs: [
        { title: "Software developer", category: "left" },
        { title: "Data scientist", category: "right" },
        { title: "DevOps engineer", category: "left" },
        { title: "Cloud architect", category: "right" },
        { title: "Full-stack developer", category: "left" },
        { title: "Cybersecurity specialist", category: "right" }
      ],
      learnMore: "Learn more about our hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=400&fit=crop"
      ]
    },
    {
      name: "Marketing & Creative",
      path: "/services/marketing",
      description: "From copywriters to creative directors, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      jobs: [
        { title: "Graphic designer", category: "left" },
        { title: "Digital marketing specialist", category: "right" },
        { title: "Copywriter", category: "left" },
        { title: "UX designer", category: "right" },
        { title: "Production artist", category: "left" },
        { title: "Marketing manager", category: "right" }
      ],
      learnMore: "learn more about our hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
      ]
    }
  ];

  const currentCategory = categories[activeCategory];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="mb-8 sm:mb-12">
          <div className="sm:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(parseInt(e.target.value))}
              className="w-full p-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#424242] font-gilroy"
            >
              {categories.map((category, index) => (
                <option key={index} value={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden sm:flex flex-wrap justify-center">
            <div className="flex space-x-0 bg-white rounded-full p-1 shadow-lg overflow-x-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap font-gilroy ${
                    index === activeCategory
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-[#424242] hover:text-gray-900"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {currentCategory.description}
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#424242] mb-4 sm:mb-6">
              Trending job titles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                {currentCategory.jobs
                  ?.filter((job) => job.category === "left")
                  .map((job, index) => (
                    <p
                      key={index}
                      className="text-gray-800 font-medium text-sm sm:text-base"
                    >
                      {job.title}
                    </p>
                  ))}
              </div>
              <div className="space-y-3 sm:space-y-4">
                {currentCategory.jobs
                  ?.filter((job) => job.category === "right")
                  .map((job, index) => (
                    <p
                      key={index}
                      className="text-gray-800 font-medium text-sm sm:text-base"
                    >
                      {job.title}
                    </p>
                  ))}
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 sm:mt-6 text-sm sm:text-base cursor-pointer"
            >
              {currentCategory.learnMore} →
            </a>
          </div>

          {/* Right Images */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={currentCategory.images?.[0]}
                    alt={`${currentCategory.name} professional`}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={currentCategory.images?.[1]}
                    alt="Team collaboration"
                    className="w-full h-24 sm:h-28 md:h-32 object-cover"
                  />
                </div>
              </div>
              <div className="pt-4 sm:pt-6 md:pt-8">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={currentCategory.images?.[2]}
                    alt={`${currentCategory.name} workspace`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
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
