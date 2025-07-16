"use client";
import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections: any[] = [
    // {
    //   title: "Services",
    //   links: ["Browse Jobs", "Contract Talent", "Permanent Talent", "Consulting Solutions"]
    // },
    // {
    //   title: "Areas of Expertise", 
    //   links: ["Finance & Accounting", "Technology", "Marketing & Creative", "Administrative & Customer Support", "Legal"]
    // },
    // {
    //   title: "Resources & Tools",
    //   links: ["Discover Insights", "Invoice", "Job Directory", "Salary Guide", "Time Reports", "Contact Us"]
    // },
    // {
    //   title: "About",
    //   links: ["About Ezyly Hired", "Leadership", "Careers With Us", "Locations", "Investor Center", "Press", "Our Brands", "Supplier Relations"]
    // }
  ];

  const legalLinks = [
    { label: "Privacy Notice", path: "/PrivacyNotice" },
    { label: "Terms of Use", path: "/TermsOfUse" }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
        </div> */}
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo and Social - Centered */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EH</span>
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
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                {/* <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" /> */}
                <Link href="https://www.linkedin.com/company/ezyly-hired" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </a>
                </Link>
                {/* <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" /> */}
                <Link href="https://www.instagram.com/ezylyhired?igsh=OTB6aTB3dXdwZW5h" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-wrap justify-center space-x-6">
                {legalLinks.map((link, index) => (
                  <Link key={index} href={link.path} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="text-gray-400 text-sm text-center">
                <p>© 2025 EzylyHired. All rights reserved.</p>
              </div>
              
              {/* <div className="text-gray-400 text-sm">
                <p>© 2025 Ezyly Hired Inc.</p>
                <p className="mt-1">An Equal Opportunity Employer M/F/Disability/Veterans.</p>
              </div> */}
            </div>

            <div className="mt-4">
              {/* <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Settings
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
