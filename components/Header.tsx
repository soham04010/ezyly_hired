"use client";
import React, { useState } from 'react';
import { ChevronDown, Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/d79a9e64-a441-41f9-b5f4-79c0ae0ad628.png" 
                alt="EzylyHired Logo" 
                className="h-6 sm:h-8 md:h-10 w-auto mr-2 sm:mr-3"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">EzylyHired</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="/about" className="text-gray-700 hover:text-gray-900 px-2 xl:px-3 py-2 text-sm font-medium">
              About Us
            </a>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="text-gray-700 hover:text-gray-900 px-2 xl:px-3 py-2 text-sm font-medium flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a href="/services/job-search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Job Search</a>
                  <a href="/services/recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Recruitment</a>
                  <a href="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Consulting</a>
                </div>
              )}
            </div>
            
            <a href="/contact" className="text-gray-700 hover:text-gray-900 px-2 xl:px-3 py-2 text-sm font-medium">
              Contact Us
            </a>
            
            <a href="/testimonial" className="text-gray-700 hover:text-gray-900 px-2 xl:px-3 py-2 text-sm font-medium">
              Testimonial
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden md:block text-gray-700 hover:text-gray-900">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
            <button className="hidden md:flex items-center text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              Sign in
            </button>
            
            <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium">
              Post a job
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-gray-900 p-1"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="/about" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About Us
              </a>
              
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="pl-6">
                    <a href="/services/job-search" className="block px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">Job Search</a>
                    <a href="/services/recruitment" className="block px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">Recruitment</a>
                    <a href="/services/consulting" className="block px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">Consulting</a>
                  </div>
                )}
              </div>
              
              <a href="/contact" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Contact Us
              </a>
              
              <a href="/testimonial" className="block px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Testimonial
              </a>
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="flex items-center px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Search
                </button>
                
                <button className="flex items-center px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 w-full">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Sign in
                </button>
                
                <button className="mx-3 mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium w-[calc(100%-1.5rem)]">
                  Post a job
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
