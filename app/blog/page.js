
"use client";
import { Clock } from "lucide-react";   // ✅ Fix here
import React from "react";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Calendar, User, Share2, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Navigation Component (shared)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('blog')
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
              +91 7806929935
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Blog Hero Section
const BlogHero = () => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1737140790906-14518fa29d1c')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-8xl md:text-9xl font-bold text-white mb-4 animate-fade-in">
            Blog
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light tracking-wider">
            Stories, recipes and musical inspirations.
          </p>
        </div>
      </div>
    </section>
  )
}

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Art of Perfect Filter Coffee',
    excerpt: 'Discover the secrets behind brewing the perfect South Indian filter coffee that has made Isai famous among coffee connoisseurs.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Priya Sharma',
    date: '2025-01-15',
    category: 'Coffee Culture',
    readTime: '5 min read',
    views: 1205,
    image: 'https://images.unsplash.com/photo-1670978738759-cd4693a1b46b',
    featured: true
  },
  {
    id: 2,
    title: 'Classical Music and Culinary Harmony',
    excerpt: 'How the tempo and rhythm of classical compositions influence our menu design and dining experience at Isai.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Ravi Kumar',
    date: '2025-01-12',
    category: 'Music & Food',
    readTime: '7 min read',
    views: 892,
    image: 'https://images.pexels.com/photos/15818965/pexels-photo-15818965.jpeg',
    featured: false
  },
  {
    id: 3,
    title: 'Seasonal Menu Highlights: Winter Comfort',
    excerpt: 'Explore our winter special dishes that bring warmth and comfort during the cooler months, inspired by traditional recipes.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Anjali Nair',
    date: '2025-01-10',
    category: 'Seasonal Menu',
    readTime: '4 min read',
    views: 567,
    image: 'https://images.unsplash.com/photo-1593518468260-7e32a7467614',
    featured: false
  },
  {
    id: 4,
    title: 'Behind the Scenes: A Day at Isai',
    excerpt: 'Follow our team through a typical day at the café, from morning preparations to evening wind-down.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Team Isai',
    date: '2025-01-08',
    category: 'Behind the Scenes',
    readTime: '6 min read',
    views: 743,
    image: 'https://images.unsplash.com/photo-1573822028151-731623cb0722',
    featured: false
  },
  {
    id: 5,
    title: 'The Philosophy of Slow Food Movement',
    excerpt: 'Understanding how the slow food philosophy aligns with our commitment to quality ingredients and mindful dining.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Dr. Sita Ramesh',
    date: '2025-01-05',
    category: 'Philosophy',
    readTime: '8 min read',
    views: 1021,
    image: 'https://images.pexels.com/photos/34027074/pexels-photo-34027074.jpeg',
    featured: false
  },
  {
    id: 6,
    title: 'Community Events: Building Connections',
    excerpt: 'How our weekly community events foster connections among local artists, musicians, and food enthusiasts.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Maya Chatterjee',
    date: '2025-01-03',
    category: 'Community',
    readTime: '5 min read',
    views: 456,
    image: 'https://images.unsplash.com/photo-1759244328512-e4a9128150f4',
    featured: false
  }
]

// Share functionality
const sharePost = (post) => {
  const shareData = {
    title: post.title,
    text: post.excerpt,
    url: `${window.location.origin}/blog/${post.id}`
  }

  if (navigator.share) {
    navigator.share(shareData)
  } else {
    // Fallback for browsers that don't support Web Share API
    const text = `${post.title}\n${post.excerpt}\n${shareData.url}`
    navigator.clipboard.writeText(text)
    alert('Post link copied to clipboard!')
  }
}

// Blog Post Card Component
const BlogPostCard = ({ post, index }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Card 
      ref={ref}
      className={`cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${post.featured ? 'ring-2 ring-isai-primary' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div 
        className="h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url('${post.image}')` }}
      />
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={post.featured ? 'default' : 'outline'} className={post.featured ? 'bg-isai-primary' : ''}>
            {post.category}
          </Badge>
          {post.featured && (
            <Badge className="bg-yellow-500 text-white">Featured</Badge>
          )}
        </div>
        <CardTitle className="isai-font text-xl leading-tight">{post.title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views}
            </div>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Link href={`/blog/${post.id}`}>
            <Button variant="outline" className="hover:bg-isai-primary hover:text-white">
              Read More
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => sharePost(post)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Instagram Feed Mock Component
const InstagramFeed = () => {
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

  const instagramPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1670978738759-cd4693a1b46b', likes: 245 },
    { id: 2, image: 'https://images.unsplash.com/photo-1593518468260-7e32a7467614', likes: 189 },
    { id: 3, image: 'https://images.pexels.com/photos/15818965/pexels-photo-15818965.jpeg', likes: 321 },
    { id: 4, image: 'https://images.unsplash.com/photo-1573822028151-731623cb0722', likes: 156 },
    { id: 5, image: 'https://images.unsplash.com/photo-1759244328512-e4a9128150f4', likes: 278 },
    { id: 6, image: 'https://images.pexels.com/photos/34027074/pexels-photo-34027074.jpeg', likes: 203 },
  ]

  return (
    <section ref={ref} className="py-16 px-4" style={{ backgroundColor: '#2B2B2B' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-4xl font-bold mb-4" style={{ color: '#EFC1A9' }}>
            Follow Us on Instagram
          </h2>
          <p style={{ color: '#FFFFFF' }}>@isai.artcafe</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="aspect-square bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-sm">❤️ {post.likes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/isai.artcafe/?hl=en" 
            target="_blank"
            className="inline-block"
            style={{ filter: 'drop-shadow(0 0 10px rgba(239, 193, 169, 0.3))' }}
          >
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:shadow-lg transition-all">
              <Instagram className="w-4 h-4 mr-2" />
              Follow @isai.artcafe
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

// YouTube + Instagram Side-by-side Section
const SocialVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [youtubeItems, setYoutubeItems] = useState([])
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY
    const channelId = process.env.NEXT_PUBLIC_YT_CHANNEL_ID
    if (!apiKey || !channelId) return
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`)
      .then(r => r.json())
      .then(d => setYoutubeItems((d.items || []).filter(it => it.id.videoId)))
      .catch(() => {})
  }, [])

  return (
    <section ref={ref} className="py-20 px-4" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <div>
            <h3 className="isai-font text-3xl font-bold mb-6" style={{ color: '#EFC1A9' }}>Instagram</h3>
            <InstagramFeed />
          </div>
          <div>
            <h3 className="isai-font text-3xl font-bold mb-6" style={{ color: '#EFC1A9' }}>YouTube</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {youtubeItems.length > 0 ? (
                youtubeItems.map((v) => (
                  <a key={v.id.videoId} href={`https://www.youtube.com/watch?v=${v.id.videoId}`} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                      <img src={`https://i.ytimg.com/vi/${v.id.videoId}/hqdefault.jpg`} alt={v.snippet.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <p className="mt-2 text-sm text-gray-700 line-clamp-2">{v.snippet.title}</p>
                  </a>
                ))
              ) : (
                <p className="text-gray-500">Connect YouTube API keys to show latest videos.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Blog Listing Section
const BlogListing = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4" style={{ backgroundColor: '#2B2B2B' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-4xl font-bold mb-4" style={{ color: '#EFC1A9' }}>
            Latest Stories
          </h2>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Insights from our culinary and musical journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer Component (shared)
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

// YouTube Video Section
const YouTubeSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-20 px-4" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-3xl md:text-4xl font-bold mb-4" style={{ color: '#EFC1A9' }}>
            Watch Our Story
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#FFFFFF' }}>
            Experience Isai Café through our video
          </p>
        </div>

        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/jLRAxmMpYE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Isai Café Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Blog Component
export default function Blog() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1E1E1E' }}>
      <Navigation />
      <BlogHero />
      <YouTubeSection />
      <SocialVideoSection />
      <BlogListing />
      <Footer />
    </div>
  )
}