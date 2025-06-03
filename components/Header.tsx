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
              <img 
                src="/lovable-uploads/d79a9e64-a441-41f9-b5f4-79c0ae0ad628.png" 
                alt="EzylyHired Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">EzylyHired</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          // ... keep existing code (navigation dropdowns)

          {/* Right side */}
          // ... keep existing code (search, sign in, post job buttons and mobile menu)
        </div>

        {/* Mobile Navigation */}
        // ... keep existing code (mobile menu)
      </div>
    </header>
  );
};

export default Header;
