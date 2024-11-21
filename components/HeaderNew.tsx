'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Menu, Check } from 'lucide-react'

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      {/* Header */}
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

      {/* Hero section */}
      <div className="relative min-h-screen flex">
        <div className="mx-auto max-w-[1200px] px-4 flex flex-col lg:flex-row items-center w-full">
          {/* Left content section */}
          <div className="w-full lg:w-2/3 pt-32 lg:pt-48 z-10">
            <main>
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
                Fitness is not a goal but a lifestyle
              </h1>
              <p className="mt-6 text-xl text-gray-800 max-w-xl">
                Achieve strength, balance, and lasting wellness with tailored programs for every level.
              </p>
              <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      All Professional features
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      API access
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-red-500" />
                      Custom integrations
                    </li>
                  </ul>
                  {/* Google Rating Images */}
        <div className="flex mt-6 gap-4">
          <img 
            src="/g.png" 
            alt="Google Rate"
            className="w-32 h-auto"
          />
          <img 
            src="/g1.png" 
            alt="Google Rating"
            className="w-36 h-auto"
          />
        </div>
            </main>
          </div>
        </div>
        {/* Right image section */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/1.png"
            alt="Fitness Model"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      {/* Notification banner */}
      {showNotification && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xl mx-auto px-4 transition-opacity duration-500 ease-in-out opacity-100">
          <div className="bg-black bg-opacity-70 backdrop-filter backdrop-blur-md text-white rounded-lg p-2 flex items-center justify-between shadow-lg">
            <p className="text-sm px-6">
              Improve performance by hardware acceleration
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="link"
                className="text-white hover:text-gray-200 px-0"
              >
                Learn more
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-200"
                onClick={() => setShowNotification(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}