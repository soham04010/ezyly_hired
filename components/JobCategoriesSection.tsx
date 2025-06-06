"use client";
import React, { useState } from 'react';
import Link from 'next/link';

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
      learnMore: "Learn more about our Accounting and Finance hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      ]
    },
    {
      name: "Technology",
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
      learnMore: "Learn more about our Technology hiring solutions",
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
      learnMore: "Learn more about our Marketing and Creative hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
      ]
    },
    {
      name: "Legal",
      path: "/services/legal",
      description: "From lawyers to paralegals, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      jobs: [
        { title: "Lawyer", category: "left" },
        { title: "In-house counsel", category: "right" },
        { title: "Paralegal", category: "left" },
        { title: "Contract administrator", category: "right" },
        { title: "Legal assistant", category: "left" },
        { title: "Legal secretary", category: "right" }
      ],
      learnMore: "Learn more about our Legal hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      ]
    },
    {
      name: "Administrative & Customer Support",
      path: "/services/administrative",
      description: "From executive assistants to customer service representatives, we'll bring you top candidates with in-demand skills and experience and help manage the hiring process for you.",
      jobs: [
        { title: "Executive assistant", category: "left" },
        { title: "Customer service representative", category: "right" },
        { title: "Administrative assistant", category: "left" },
        { title: "Data entry specialist", category: "right" },
        { title: "Office manager", category: "left" },
        { title: "Virtual assistant", category: "right" }
      ],
      learnMore: "Learn more about our Administrative and Customer Support hiring solutions",
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
      ]
    }
  ];

  const currentCategory = categories[activeCategory];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex space-x-0 bg-white rounded-full p-1 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === activeCategory 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {currentCategory.description}
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trending job titles</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {currentCategory.jobs.filter(job => job.category === 'left').map((job, index) => (
                  <a key={index} href="#" className="block text-blue-600 hover:text-blue-700 font-medium underline">
                    {job.title}
                  </a>
                ))}
              </div>
              <div className="space-y-4">
                {currentCategory.jobs.filter(job => job.category === 'right').map((job, index) => (
                  <a key={index} href="#" className="block text-blue-600 hover:text-blue-700 font-medium underline">
                    {job.title}
                  </a>
                ))}
              </div>
            </div>
            
            <Link 
              href={currentCategory.path}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6"
            >
              {currentCategory.learnMore} →
            </Link>
          </div>
          
          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={currentCategory.images[0]} 
                    alt={`${currentCategory.name} professional`}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={currentCategory.images[1]} 
                    alt="Team collaboration"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={currentCategory.images[2]} 
                    alt={`${currentCategory.name} workspace`}
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
