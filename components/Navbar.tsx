
"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    dropdown: [
      { label: "Individual Services", href: "/services/individual" },
      { label: "Plans", href: "/services/plans" },
    ],
  },
  { label: "Testimonial", href: "/#TestimonialsSection" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close desktop dropdown when clicking outside
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !mobileMenuRef.current?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isWhite = !isHome || isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isWhite ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <img
                src={isWhite ? "/logo1.png" : "/logo (2).png"}
                alt="Logo"
                className="h-10 w-auto transition duration-300"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href, dropdown }) => (
                <div
                  key={label}
                  className="relative group"
                  ref={label === "Services" ? dropdownRef : null}
                >
                  {!dropdown ? (
                    <a
                      href={href}
                      className={`text-base font-semibold ${
                        isWhite ? "text-gray-800" : "text-white"
                      } hover:text-red-600 transition-colors`}
                    >
                      {label}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(label)}
                        className={`flex items-center text-base font-semibold ${
                          isWhite ? "text-gray-800" : "text-white"
                        } hover:text-red-600 transition-colors`}
                      >
                        {label}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {activeDropdown === label && (
                        <div className="absolute top-full left-0 mt-2 py-2 w-52 bg-white rounded-md shadow-lg z-50">
                          {dropdown.map(({ label: dLabel, href: dHref }) => (
                            <a
                              key={dLabel}
                              href={dHref}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {dLabel}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isWhite ? "text-gray-900" : "text-white"
              } transition-colors`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden mt-4 space-y-4 bg-white rounded-md p-4 shadow-lg">
            {navLinks.map(({ label, href, dropdown }) => (
              <div key={label} className="space-y-2">
                {!dropdown ? (
                  <a
                    href={href}
                    className="block text-base text-gray-700 font-medium hover:text-red-600"
                  >
                    {label}
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(label)}
                      className="flex justify-between items-center w-full text-base text-gray-700 font-medium"
                    >
                      {label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === label && (
                      <div className="ml-4 space-y-1">
                        {dropdown.map(({ label: dLabel, href: dHref }) => (
                          <a
                            key={dLabel}
                            href={dHref}
                            className="block text-sm text-gray-600 hover:text-gray-800"
                          >
                            {dLabel}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
