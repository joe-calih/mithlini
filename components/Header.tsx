'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {  Menu } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D9D9D9] rounded-full flex items-center justify-center p-2">
              <img 
                src="/mithlini.png" 
                alt="Mithlini Logo" 
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
            <span className="text-xl font-medium text-black">Mithlini</span>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="ghost" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            <Menu className="h-6 w-6 text-black" />
          </Button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-medium text-black hover:text-gray-600" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-black hover:text-gray-600" href="#">
              Programs
            </Link>
            <Link className="text-sm font-medium text-black hover:text-gray-600" href="#Testimonials">
              Testimonials
            </Link>
            <Link className="text-sm font-medium text-black hover:text-gray-600" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium text-black hover:text-gray-600" href="/contact">
              Contact Us
            </Link>
            <Button className="bg-black text-white rounded-full hover:bg-gray-800">
              Book a call
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-1">
            <Link className="block text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Home</Link>
            <Link className="block text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Programs</Link>
            <Link className="block text-sm font-medium text-gray-900 hover:text-gray-600" href="#">Testimonials</Link>
            <Link className="block text-sm font-medium text-gray-900 hover:text-gray-600" href="/about">About</Link>
            <Link className="block text-sm font-medium text-gray-900 hover:text-gray-600" href="/contact">Contact Us</Link>
            <Button className="w-full mt-2 bg-black text-white rounded-full hover:bg-gray-800">Book a call</Button>
          </div>
        </div>
      )}
    </header>
  )
}
