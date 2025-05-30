'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react'
import { setTheme, getSavedTheme } from '@/theme'  // Your theme utils

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [theme, setThemeState] = useState<'light' | 'dark'>(getSavedTheme())
  const [isScrolled, setIsScrolled] = useState(false)

  const NAVBAR_HEIGHT = 64 // px, adjust if needed

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    setThemeState(newTheme)
  }

  useEffect(() => {
    setTheme(theme) // Apply saved theme on load
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transparent only on homepage and scroll at top
  const isTransparent = pathname === '/' && !isScrolled

  return (
    <>
      <header
        style={{ height: NAVBAR_HEIGHT }}
        className={`w-full z-50 transition-colors duration-300
          ${isTransparent
            ? 'fixed top-0 left-0 right-0 bg-transparent shadow-none'
            : 'sticky top-0 bg-background shadow-lg shadow-cyan-500/10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/final print.png"
              alt="EzylyHired Logo"
              width={200}
              height={200}
              priority
            />
            <span className="ml-2 text-2xl font-extrabold text-cyan-400 tracking-wider hover:text-foreground transition-all hidden sm:inline" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            <HoverLink href="/" text="Home" />
            <HoverLink href="/about" text="About Us" />

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-cyan-400 font-medium transition-all px-2 py-1">
                Services <ChevronDown size={16} className="ml-1" />
              </button>

              <div
                className={`absolute left-0 w-64 bg-popover border border-cyan-700 rounded-lg shadow-xl py-2 transition-all duration-200 z-50 ${
                  servicesOpen ? 'block' : 'hidden'
                }`}
              >
                <DropdownLink href="/services/individual" text="Individual Services" />
                <DropdownLink href="/services/description" text="Service Description" />
                <DropdownLink href="/services/plans" text="Plans" />
              </div>
            </div>

            <HoverLink href="/contact" text="Contact Us" />

            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-cyan-400 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-cyan-400 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-cyan-400">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-cyan-800 px-4 py-4 space-y-3">
            <HoverLink href="/" text="Home" mobile />
            <HoverLink href="/about" text="About Us" mobile />

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-cyan-400"
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

            <HoverLink href="/contact" text="Contact Us" mobile />
          </div>
        )}
      </header>

      {/* Spacer to prevent content jump when navbar sticky */}
      {!isTransparent && <div style={{ height: NAVBAR_HEIGHT }} />}
    </>
  )
}

// 🌀 Neon hover nav link
function HoverLink({
  href,
  text,
  mobile = false,
  className = '',
}: {
  href: string
  text: string
  mobile?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`${mobile ? 'block' : 'relative'} ${className} text-foreground font-medium transition-all hover:text-cyan-400 hover:tracking-wide`}
    >
      {text}
    </Link>
  )
}

// ⬇️ Submenu item
function DropdownLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-foreground hover:text-cyan-400 transition-all hover:bg-muted"
    >
      {text}
    </Link>
  )
}
