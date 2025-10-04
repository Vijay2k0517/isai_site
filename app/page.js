'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/about', section: 'about' },
    { name: 'Menu', href: '/menu', section: 'menu' },
    { name: 'Events', href: '/events', section: 'events' },
    { name: 'Blog', href: '/blog', section: 'blog' },
    { name: 'Contact', href: '/contact', section: 'contact' },
  ]

  // Set active section based on current path
  useEffect(() => {
    const path = window.location.pathname
    const currentSection = navItems.find(item => item.href === path)?.section || 'home'
    setActiveSection(currentSection)
  }, [])

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="flex items-center justify-between">
        {/* Logo Image - Left side outside nav */}
        <Link href="/" className="flex-shrink-0 mr-4">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759387620201.png" 
            alt="Logo" 
            className="h-9 w-9 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Navigation - Much less white background */}
      <nav className="glass-nav rounded-full px-6 py-1.5 flex-1 mx-4 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-pill px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.section
                    ? 'nav-pill-active text-white'
                    : 'text-white hover:text-[#EFC1A9]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

        {/* Phone Number - Right side outside nav */}
        <div className="flex-shrink-0 ml-4">
          <div className="glass-nav rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">
              +1 (555) 123-4567
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
// Hero Section Component
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="parallax-bg absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1757534932627-539a974d4b93')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-8xl md:text-9xl font-bold text-white mb-4 animate-fade-in">
            Isai
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light tracking-wider">
            the art café
          </p>
        </div>
      </div>
    </section>
  )
}

// About Snippet Component
const AboutSnippet = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-8">
            <h2 className="isai-font text-6xl md:text-7xl font-extrabold text-[#EFC1A9]">ABOUT US</h2>
            <div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#EFC1A9] text-[#0a0a0a] rounded-full px-6 py-3 shadow hover:bg-[#d4b088] transition-colors font-semibold">
                <span>Learn more</span>
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <p className="text-xl leading-relaxed text-white">
              We started with a simple idea: make coffee that feels like home and tastes like joy. Everything we serve is handmade, heartfelt, and a little unexpected.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden ring-8 ring-[#EFC1A9]">
              <img src="https://images.unsplash.com/photo-1573822028151-731623cb0722" alt="Barista at work" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Opening Hours with Floating Cards
const OpeningHoursBento = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef()

  const hours = [
    { day: 'Monday', hours: '06:00 to 16:00', position: 'top-left' },
    { day: 'Tuesday', hours: 'CLOSED', position: 'top-right' },
    { day: 'Wednesday', hours: '06:00 to 16:00', position: 'left' },
    { day: 'Thursday', hours: '06:00 to 16:00', position: 'right' },
    { day: 'Friday', hours: '06:00 to 16:00', position: 'bottom-left' },
    { day: 'Saturday', hours: '06:00 to 16:00', position: 'bottom-right' },
    { day: 'Sunday', hours: 'CLOSED', position: 'bottom' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.7 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getCardPosition = (position) => {
    const positions = {
      'top-left': 'absolute top-8 left-8 md:top-16 md:left-16',
      'top-right': 'absolute top-8 right-8 md:top-16 md:right-16',
      'left': 'absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2',
      'right': 'absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2',
      'bottom-left': 'absolute bottom-8 left-8 md:bottom-16 md:left-16',
      'bottom-right': 'absolute bottom-8 right-8 md:bottom-16 md:right-16',
      'bottom': 'absolute bottom-4 left-1/2 transform -translate-x-1/2'
    }
    return positions[position] || ''
  }

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1759244328512-e4a9128150f4')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Central Heading */}
        <div className="text-center relative">
          <h2 className={`isai-font text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`}>
            OPENING HOURS
          </h2>
        </div>

        {/* Floating Cards */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          {hours.map((item, index) => (
            <div
              key={item.day}
              className={`${getCardPosition(item.position)} floating-card ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 3}px) rotate(${(Math.random() - 0.5) * 4}deg)`
              }}
            >
              <div className="bg-[#D0E7C1] rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-[200px] md:max-w-[250px]">
                <h3 className="font-bold text-lg md:text-xl text-[#2d5016] mb-2">{item.day}</h3>
                <p className={`text-sm md:text-base ${
                  item.hours === 'CLOSED' 
                    ? 'text-[#e85d75] font-semibold' 
                    : 'text-[#2d5016]'
                }`}>
                  {item.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// View Menu Section
const ViewMenuSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-6xl md:text-7xl font-extrabold text-[#EFC1A9] mb-8">
            VIEW MENU
          </h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Discover our carefully crafted selection of artisanal coffees, fresh pastries, and seasonal specialties.
          </p>
          <Link href="/menu" className="inline-flex items-center gap-3 bg-[#EFC1A9] text-[#0a0a0a] rounded-full px-8 py-4 shadow-lg hover:bg-[#d4b088] transition-colors font-semibold text-lg">
            <span>Explore Menu</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="isai-font text-3xl font-bold text-[#EFC1A9]">
              Isai
            </Link>
            <p className="mt-4 text-[#a8a8a8]">
              Where music and home blend into one
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#EFC1A9]">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#EFC1A9]">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-[#a8a8a8]">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#EFC1A9]" />
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#EFC1A9]" />
                hello@isai.cafe
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#EFC1A9]" />
                123 Art Street, Music District
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#2a2a2a] mt-8 pt-8 text-center text-[#6b6b6b]">
          <p>&copy; 2025 Isai Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen light-components">
      <Navigation />
      <HeroSection />
      <AboutSnippet />
      <OpeningHoursBento />
      <ViewMenuSection />
      <Footer />
    </div>
  )
}