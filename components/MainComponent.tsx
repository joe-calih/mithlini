'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import Hero from './Hero'

export default function MainComponent() {
  const [showNotification, setShowNotification] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false)
    }, 60000) // 1 minute

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#E5E5E5] overflow-x-hidden">
      <Hero />

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

