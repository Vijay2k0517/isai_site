'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('events')
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/about', section: 'about' },
    { name: 'Menu', href: '/menu', section: 'menu' },
    { name: 'Events', href: '/events', section: 'events' },
    { name: 'Blog', href: '/blog', section: 'blog' },
    { name: 'Contact', href: '/contact', section: 'contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <nav ref={ref} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="flex items-center justify-between">
        {/* Logo Image - Left side outside nav */}
        <Link href="/" className="flex-shrink-0 mr-4">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759387620201.png" 
            alt="Logo" 
            className="h-12 w-12 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Navigation - Dark theme */}
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
          <a href="tel:+917806929935" className="block">
            <div className="glass-nav rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
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
                +91 7806929935
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
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

// Enhanced Split Text Component for Letter Animation
const SplitText = ({ text, className = "", delay = 0, isVisible = false, staggerDelay = 0.05 }) => {
  const letters = text.split('').map((letter, index) => (
    <span
      key={index}
      className="inline-block overflow-hidden"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay + index * staggerDelay}s`,
        willChange: 'transform, opacity'
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ))

  return <span className={`inline-block ${className}`}>{letters}</span>
}

// About Snippet Component - Full Page Height with Enhanced Animation
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
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 bg-[#2B2B2B]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with Enhanced Animations */}
          <div className="space-y-8">
            {/* Title with Stagger Scroll Animation */}
            <h2 className="isai-font text-6xl md:text-7xl font-extrabold text-[#EFC1A9] overflow-hidden">
              <SplitText 
                text="ABOUT US" 
                isVisible={isVisible}
                delay={0.1}
                staggerDelay={0.04}
              />
            </h2>
            
            {/* Button with Slide-in Animation */}
            <div className={`transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#EFC1A9] text-[#0a0a0a] rounded-full px-6 py-3 shadow hover:bg-[#d4b088] transition-all duration-300 font-semibold hover:scale-105">
                <span>Learn more</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
            </div>
            
            {/* Description with Staggered Line Animation */}
            <div className="space-y-4">
              <p className={`text-xl leading-relaxed text-white transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                We started with a simple idea: make coffee that feels like home and tastes like joy.
              </p>
              <p className={`text-xl leading-relaxed text-white transition-all duration-700 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                Everything we serve is handmade, heartfelt, and a little unexpected.
              </p>
            </div>
          </div>
          
          {/* Right Image with Enhanced Animation - Removed colored dots */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
          }`}>
            <div className="rounded-3xl overflow-hidden ring-8 ring-[#EFC1A9] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1573822028151-731623cb0722" 
                alt="Barista at work" 
                className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Ultra Smooth Wave-like Floating Opening Hours with Enhanced Waves
const OpeningHoursBento = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef()

  const hours = [
    { day: 'Monday', hours: 'CLOSED', isClosed: true, offset: -25, delay: 0, waveSpeed: 1.2, wavePhase: 0.8 },
    { day: 'Tuesday', hours: '06:00 - 16:00', isClosed: false, offset: 35, delay: 150, waveSpeed: 1.6, wavePhase: 1.4 },
    { day: 'Wednesday', hours: '06:00 - 16:00', isClosed: false, offset: -30, delay: 300, waveSpeed: 1.1, wavePhase: 2.1 },
    { day: 'Thursday', hours: '06:00 - 16:00', isClosed: false, offset: 40, delay: 450, waveSpeed: 1.8, wavePhase: 2.8 },
    { day: 'Friday', hours: '06:00 - 16:00', isClosed: false, offset: -35, delay: 600, waveSpeed: 1.3, wavePhase: 3.5 },
    { day: 'Saturday', hours: '06:00 - 16:00', isClosed: false, offset: 30, delay: 750, waveSpeed: 0.9, wavePhase: 4.2 },
    { day: 'Sunday', hours: 'CLOSED', isClosed: true, offset: -40, delay: 900, waveSpeed: 1.5, wavePhase: 4.9 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 min-h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1759244328512-e4a9128150f4')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
   }}
/>
      <div className="absolute inset-0 bg-black/30"/>
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Central Heading with Letter Animation */}
        <div className="text-center relative mb-20">
          <h2 className="isai-font text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8">
            <SplitText 
              text="OPENING HOURS" 
              isVisible={isVisible}
              delay={0.2}
              staggerDelay={0.03}
            />
          </h2>
        </div>

        {/* Enhanced Wave-like Grid Layout with More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto relative">
          {hours.map((item, index) => {
            // Enhanced wave calculations with multiple sine waves for complex motion
            const wave1 = Math.sin(scrollY * 0.006 + item.wavePhase) * 35 * item.waveSpeed;
            const wave2 = Math.cos(scrollY * 0.004 + index * 0.7) * 20 * (item.waveSpeed * 0.6);
            const wave3 = Math.sin(scrollY * 0.008 + index * 1.3) * 15 * (item.waveSpeed * 0.4);
            
            const totalWaveOffset = wave1 + wave2 + wave3;
            
            // Enhanced rotation with multiple sine waves
            const rotation1 = Math.sin(scrollY * 0.005 + index * 0.9) * 3;
            const rotation2 = Math.cos(scrollY * 0.003 + index * 1.7) * 1.5;
            const totalRotation = rotation1 + rotation2;
            
            // Enhanced scale animation
            const scale1 = 1 + Math.sin(scrollY * 0.01 + index * 0.5) * 0.08;
            const scale2 = Math.cos(scrollY * 0.007 + index * 1.1) * 0.03;
            const totalScale = scale1 + scale2;
            
            // Individual horizontal offsets for more dynamic spacing
            const horizontalOffset = Math.sin(scrollY * 0.005 + index * 0.6) * 15;
            
            return (
              <div
                key={item.day}
                className={`bg-[#EFC1A9] rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-1200 group overflow-hidden backdrop-blur-sm transform border-2 border-transparent hover:border-white/20 ${
                  isVisible ? 'opacity-100' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${item.delay}ms`,
                  transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s ease-out, box-shadow 0.6s ease',
                  transform: `
                    translateY(${totalWaveOffset + item.offset}px)
                    translateX(${horizontalOffset}px)
                    rotate(${totalRotation}deg)
                    scale(${totalScale})
                  `,
                  // Enhanced individual spacing
                  marginLeft: index % 4 === 0 ? '2rem' : index % 3 === 1 ? '1rem' : '0',
                  marginRight: index % 4 === 2 ? '2rem' : index % 3 === 0 ? '1rem' : '0',
                  marginTop: index % 2 === 0 ? '3rem' : '1rem',
                  marginBottom: index % 3 === 1 ? '3rem' : '1rem',
                }}
              >
                {/* Enhanced Day Name with Gradient Text */}
                <h3 className="font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-6 group-hover:text-white transition-all duration-500 text-center tracking-wide">
                  {item.day}
                </h3>
                
                {/* Enhanced Hours with Better Typography */}
                <div className="text-center">
                  {item.isClosed ? (
                    <p className="text-xl font-bold text-red-600 group-hover:text-red-200 transition-colors duration-500 tracking-wider">
                      {item.hours}
                    </p>
                  ) : (
                    <p className="text-xl font-semibold text-[#1A1A1A] group-hover:text-white transition-colors duration-500 tracking-wider">
                      {item.hours}
                    </p>
                  )}
                </div>
                
                {/* Subtle decorative element */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#1A1A1A] group-hover:bg-white rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Info */}
        <div className={`text-center mt-20 transition-all duration-1200 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-white text-2xl opacity-90 font-light tracking-wide">
            Visit us during our opening hours for the best coffee experience
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-[#EFC1A9] rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Add custom shadow utility */}
      <style jsx global>{`
        .shadow-4xl {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(239, 193, 169, 0.3),
            0 0 60px rgba(239, 193, 169, 0.1);
        }
        
        .hover\\:shadow-4xl:hover {
          box-shadow: 
            0 35px 60px -12px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(239, 193, 169, 0.4),
            0 0 80px rgba(239, 193, 169, 0.2);
        }
      `}</style>
    </section>
  )
}

// Massive Marquee Menu Section with Hover Color Change
const ViewMenuSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      className="min-h-screen flex flex-col justify-center bg-[#1A1A1A] overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Clickable overlay for menu link */}
      <Link href="/menu" className="absolute inset-0 z-10 cursor-pointer"></Link>
      
      {/* Marquee Wrapper */}
      <div className="marquee-wrapper relative w-full h-screen flex flex-col">
        
        {/* Top Marquee - Continuous Left to Right */}
        <div className="marquee-container relative h-1/2 flex items-center overflow-hidden py-16">
          <div className="marquee-track flex">
            {/* First set */}
            <div className="marquee-content flex items-center space-x-20 animate-marquee-infinite whitespace-nowrap">
              {['VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸'].map((item, index) => (
                <h2 
                  key={`top-${index}`} 
                  className={`font-black flex-shrink-0 text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-[#EFC1A9]'
                  }`}
                  style={{ lineHeight: '0.7' }}
                >
                  {item}
                </h2>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-content flex items-center space-x-20 animate-marquee-infinite whitespace-nowrap">
              {['VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸', 'VIEW', '✸'].map((item, index) => (
                <h2 
                  key={`top-dup-${index}`} 
                  className={`font-black flex-shrink-0 text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-[#EFC1A9]'
                  }`}
                  style={{ lineHeight: '0.7' }}
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Marquee - Continuous Right to Left */}
        <div className="marquee-container relative h-1/2 flex items-center overflow-hidden py-16">
          <div className="marquee-track flex">
            {/* First set */}
            <div className="marquee-content flex items-center space-x-20 animate-marquee-infinite-reverse whitespace-nowrap">
              {['✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU'].map((item, index) => (
                <h2 
                  key={`bottom-${index}`} 
                  className={`font-black flex-shrink-0 text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-[#EFC1A9]'
                  }`}
                  style={{ lineHeight: '0.7' }}
                >
                  {item}
                </h2>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="marquee-content flex items-center space-x-20 animate-marquee-infinite-reverse whitespace-nowrap">
              {['✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU', '✸', 'MENU'].map((item, index) => (
                <h2 
                  key={`bottom-dup-${index}`} 
                  className={`font-black flex-shrink-0 text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] transition-colors duration-500 ${
                    isHovered ? 'text-white' : 'text-[#EFC1A9]'
                  }`}
                  style={{ lineHeight: '0.7' }}
                >
                  {item}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for perfect infinite marquee animation with medium speed */}
      <style jsx global>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee-infinite-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        .animate-marquee-infinite {
          animation: marquee-infinite 40s linear infinite;
        }
        
        .animate-marquee-infinite-reverse {
          animation: marquee-infinite-reverse 45s linear infinite;
        }
        
        .marquee-track {
          width: max-content;
        }
        
        .marquee-content {
          display: flex;
          align-items: center;
        }
        
        /* Smooth edges with gradient mask */
        .marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
        
        /* Ensure smooth performance */
        .marquee-content {
          will-change: transform;
        }

        /* Hover effects */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
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
    <footer className="bg-[#000000] text-white py-16">
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