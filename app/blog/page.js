"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Calendar, User, Share2, Eye } from 'lucide-react';

// Navigation Component (shared)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("blog");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const navItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/about", section: "about" },
    { name: "Menu", href: "/menu", section: "menu" },
    { name: "Events", href: "/events", section: "events" },
    { name: "Blog", href: "/blog", section: "blog" },
    { name: "Contact", href: "/contact", section: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={ref}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4"
    >
      <div className="flex items-center justify-center">
        <nav className="glass-nav rounded-full px-8 py-1.5 shadow-lg flex items-center justify-center">
          <Link href="/" className="flex-shrink-0 mr-6">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1759387620201.png"
              alt="Logo"
              className="h-12 w-12 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="flex items-center justify-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-pill px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.section
                      ? "nav-pill-active text-white"
                      : "text-white hover:text-[#EFC1A9]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

// Hero Section
const BlogHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <motion.h1
            className="isai-font text-8xl md:text-9xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white font-light tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Stories, recipes, and musical journeys from Isai Café.
          </motion.p>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Perfect Filter Coffee',
    excerpt: 'Discover the secrets behind brewing the perfect South Indian filter coffee that will transport you to the streets of Chennai.',
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
    excerpt: 'How classical compositions influence our menu design and create a unique dining experience for our guests.',
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
    excerpt: 'Explore our winter special dishes that bring warmth and comfort during the chilly season.',
    author: 'Anjali Nair',
    date: '2025-01-10',
    category: 'Seasonal Menu',
    readTime: '4 min read',
    views: 567,
    image: 'https://images.unsplash.com/photo-1593518468260-7e32a7467614',
    featured: false
  }
];

const sharePost = (post) => {
  const shareData = {
    title: post.title,
    text: post.excerpt,
    url: `${window.location.origin}/blog/${post.id}`
  };
  if (navigator.share) {
    navigator.share(shareData);
  } else {
    const text = `${post.title}\n${post.excerpt}\n${shareData.url}`;
    navigator.clipboard.writeText(text);
    alert('Post link copied to clipboard!');
  }
};

const BlogPostCard = ({ post, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-600 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={`cursor-pointer transition-all duration-400 ease-out h-full flex flex-col overflow-hidden border border-gray-700 bg-[#2B2B2B] hover:border-[#EFC1A9] hover:shadow-2xl ${
          isHovered ? 'shadow-lg -translate-y-1' : 'shadow-md'
        }`}
      >
        <div className="relative overflow-hidden">
          <div 
            className="h-60 bg-cover bg-center transition-transform duration-500 ease-out"
            style={{ 
              backgroundImage: `url('${post.image}')`,
              transform: isHovered ? 'scale(1.08)' : 'scale(1)'
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-70'
          }`} />
          
          {/* Badge Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <Badge 
              variant={post.featured ? 'default' : 'outline'} 
              className={`transition-all duration-300 ${
                post.featured 
                  ? 'bg-[#EFC1A9] text-black font-medium' 
                  : 'bg-black/80 text-white border-gray-500'
              } ${isHovered ? 'scale-105' : 'scale-100'}`}
            >
              {post.category}
            </Badge>
            {post.featured && (
              <Badge className="bg-yellow-500 text-black font-medium transition-all duration-300">
                Featured
              </Badge>
            )}
          </div>
        </div>
        
        <CardHeader className="pb-4 flex-grow px-6 pt-6">
          <CardTitle className="text-xl font-semibold leading-tight text-white mb-3 line-clamp-2">
            {post.title}
          </CardTitle>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </CardHeader>
        
        <CardContent className="pt-0 px-6 pb-6">
          {/* Author and Date Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between border-t border-gray-700 pt-4">
            <Link href={`/blog/${post.id}`} className="flex-1">
              <Button 
                variant="outline" 
                className="w-full hover:bg-[#EFC1A9] hover:text-black border-gray-600 text-white transition-all duration-300 font-medium py-2"
              >
                Read More
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => sharePost(post)} 
              className="text-gray-400 hover:text-[#EFC1A9] hover:bg-gray-800 transition-all duration-300 ml-3 px-3"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BlogListing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-5xl font-bold mb-6" style={{ color: '#EFC1A9' }}>Latest Stories</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover insights from our culinary and musical journey through our curated stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Events', href: '/events' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

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
                  <Link href={item.href} className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#EFC1A9]">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors duration-300 hover:scale-110 transform">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors duration-300 hover:scale-110 transform">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#a8a8a8] hover:text-[#EFC1A9] transition-colors duration-300 hover:scale-110 transform">
                <Youtube size={24} />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-[#a8a8a8]">
              <div className="flex items-center transition-colors duration-300 hover:text-white">
                <Phone size={16} className="mr-2 text-[#EFC1A9]" />
                +91 98765 43210
              </div>
              <div className="flex items-center transition-colors duration-300 hover:text-white">
                <Mail size={16} className="mr-2 text-[#EFC1A9]" />
                hello@isai.cafe
              </div>
              <div className="flex items-center transition-colors duration-300 hover:text-white">
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
  );
};

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1E1E1E' }}>
      <Navigation />
      <BlogHero />
      <BlogListing />
      <Footer />
    </div>
  );
}