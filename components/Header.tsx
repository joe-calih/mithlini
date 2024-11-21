'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Render a placeholder during SSR and initial client-side render
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 bg-[#0000ff]">
        <nav>
          <div className="max-w-[1200px] mx-auto px-4 h-16"></div>
        </nav>
      </header>
    )
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white shadow-md' : 'bg-[#0000ff]'
    }`}>
      <nav>
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className={`font-semibold text-xl ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
              lumi
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {['Features', 'Pricing', 'Integrations', 'Clients', 'Blog'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className={`text-base ${
                    isScrolled 
                      ? 'text-black hover:text-gray-900' 
                      : 'text-white hover:text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className={`text-base ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-white hover:text-white/90'
              }`}
            >
              Log In
            </Button>
            <Button 
              className={`text-base ${
                isScrolled 
                  ? 'bg-[#0000ff] text-white hover:bg-blue-700' 
                  : 'bg-white text-[#0000ff] hover:bg-white/90'
              }`}
            >
              Sign up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}