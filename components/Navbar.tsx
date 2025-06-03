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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div> */}
              <img 
                src="logo.png" 
                alt="EzylyHired Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-2xl font-bold text-gray-900">EzylyHired</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => toggleDropdown('jobs')}
              >
                Find Jobs
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'jobs' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border transition-all duration-300 transform ${activeDropdown === 'jobs' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                <div className="p-4">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Browse All Jobs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Remote Jobs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Part-time Jobs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Contract Jobs</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => toggleDropdown('employers')}
              >
                For Employers
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'employers' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border transition-all duration-300 transform ${activeDropdown === 'employers' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                <div className="p-4">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Post a Job</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Talent Solutions</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Recruitment Services</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Employer Resources</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border transition-all duration-300 transform ${activeDropdown === 'services' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                <div className="p-4">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Consulting Solutions</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Training Programs</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Career Development</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Workforce Solutions</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border transition-all duration-300 transform ${activeDropdown === 'resources' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                <div className="p-4">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Career Tips</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Industry Insights</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Salary Guide</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors">Blog</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300">
              Sign in
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105">
              Post a Job
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 py-4 space-y-2 bg-gray-50 rounded-lg mt-2">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-white rounded transition-colors">Find Jobs</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-white rounded transition-colors">For Employers</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-white rounded transition-colors">Services</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-white rounded transition-colors">Resources</a>
            <div className="pt-2 border-t border-gray-200">
              <button className="w-full text-left px-4 py-2 text-blue-600 font-medium">Sign in</button>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full font-medium mt-2">Post a Job</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
