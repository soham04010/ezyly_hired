'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="w-full bg-black shadow-lg shadow-cyan-500/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-cyan-400 tracking-wider hover:text-white transition-all">
          EzylyHired
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          <HoverLink href="/" text="Home" />
          <HoverLink href="/about" text="About Us" />

          {/* Services Dropdown */}
<div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <button className="flex items-center text-white hover:text-cyan-400 font-medium transition-all px-2 py-1">
    Services <ChevronDown size={16} className="ml-1" />
  </button>

  <div
    className={`absolute left-0 w-64 bg-zinc-950 border border-cyan-700 rounded-lg shadow-xl py-2 transition-all duration-200 z-50 ${
      servicesOpen ? 'block' : 'hidden'
    }`}
  >
    <DropdownLink href="/services/individual" text="Individual Services" />
    <DropdownLink href="/services/description" text="Service Description" />
    <DropdownLink href="/services/plans" text="Plans" />
  </div>
</div>

          <HoverLink href="/contact" text="Contact Us" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-cyan-400">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-cyan-800 px-4 py-4 space-y-3">
          <HoverLink href="/" text="Home" mobile />
          <HoverLink href="/about" text="About Us" mobile />

          {/* Expandable Services on Mobile */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-white hover:text-cyan-400"
            >
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <HoverLink href="/services/individual" text="Individual Services" mobile />
                <HoverLink href="/services/description" text="Service Description" mobile />
                <HoverLink href="/services/plans" text="Plans" mobile />
              </div>
            )}
          </div>

          <HoverLink href="/contact" text="Contact" mobile />
        </div>
      )}
    </header>
  )
}

// 💡 Neon hover nav link
function HoverLink({ href, text, mobile = false, className = '' }: { href: string; text: string; mobile?: boolean; className?: string }) {
  return (
    <Link
      href={href}
      className={`${mobile ? 'block' : 'relative'} ${className} text-white font-medium transition-all hover:text-cyan-400 hover:tracking-wide`}
    >
      {text}
    </Link>
  )
}

// 💡 Submenu item style
function DropdownLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-white hover:text-cyan-400 transition-all hover:bg-zinc-900"
    >
      {text}
    </Link>
  )
}
