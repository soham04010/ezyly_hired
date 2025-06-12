
"use client";
import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: ["Browse Jobs", "Contract Talent", "Permanent Talent", "Consulting Solutions"]
    },
    {
      title: "Areas of Expertise", 
      links: ["Finance & Accounting", "Technology", "Marketing & Creative", "Administrative & Customer Support", "Legal"]
    },
    {
      title: "Resources & Tools",
      links: ["Discover Insights", "Invoice", "Job Directory", "Salary Guide", "Time Reports", "Contact Us"]
    },
    {
      title: "About",
      links: ["About Ezyly Hired", "Leadership", "Careers With Us", "Locations", "Investor Center", "Press", "Our Brands", "Supplier Relations"]
    }
  ];

  const legalLinks = ["Fraud Alert", "Government Notice", "Privacy Notice", "Terms of Use"];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Logo and Social */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">EH</span>
                </div>
                <a 
                  href="https://www.e-verify.gov/e-verify-employer-search" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/E-Verify_Logo-2x.png" 
                    alt="E-Verify" 
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            {/* Region Selector */}
            <div className="flex flex-col items-end space-y-4">
              <div className="text-right">
                <div className="text-lg font-medium mb-2">United States (English)</div>
                <button className="border border-gray-600 rounded-full px-6 py-2 text-sm hover:bg-gray-700 transition-colors">
                  Select a region and language →
                </button>
              </div>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap space-x-6 mb-4 lg:mb-0">
                {legalLinks.map((link, index) => (
                  <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                ))}
              </div>
              <div className="text-gray-400 text-sm">
                <p>© 2025 Ezyly Hired Inc.</p>
                <p className="mt-1">An Equal Opportunity Employer M/F/Disability/Veterans.</p>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
