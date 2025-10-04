'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

// Navigation Component (shared)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('contact')

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/about', section: 'about' },
    { name: 'Menu', href: '/menu', section: 'menu' },
    { name: 'Events', href: '/events', section: 'events' },
    { name: 'Blog', href: '/blog', section: 'blog' },
    { name: 'Contact', href: '/contact', section: 'contact' },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass-nav rounded-full px-8 py-3">
      <div className="flex items-center justify-between">
        <Link href="/" className="isai-font text-2xl font-bold isai-primary mr-8">
          Isai
        </Link>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-pill px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === item.section
                  ? 'bg-isai-primary text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Contact Hero Section
const ContactHero = () => {
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
          backgroundImage: "url('https://images.pexels.com/photos/8937347/pexels-photo-8937347.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-7xl md:text-8xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-white font-light">
            Get in touch with us
          </p>
        </div>
      </div>
    </section>
  )
}

// Contact Information Section
const ContactInfo = () => {
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
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to see you at our café
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <Card className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-isai-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                123 Art Street<br />
                Music District<br />
                Chennai, Tamil Nadu 600001<br />
                India
              </p>
            </CardContent>
          </Card>

          {/* Phone & Email */}
          <Card className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-isai-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Phone:</strong><br />
                  +91 98765 43210
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong><br />
                  hello@isai.cafe
                </p>
                <p className="text-gray-700">
                  <strong>Events:</strong><br />
                  events@isai.cafe
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours */}
          <Card className={`text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-isai-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <p><strong>Monday - Thursday:</strong><br />8:00 AM - 10:00 PM</p>
                <p><strong>Friday - Saturday:</strong><br />8:00 AM - 11:00 PM</p>
                <p><strong>Sunday:</strong><br />CLOSED</p>
              </div>
              <Link href="/" className="inline-block mt-3">
                <Button variant="outline" size="sm">
                  View Detailed Hours
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map Placeholder */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Find Us Here</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2977644321953!2d80.24565831482293!3d13.079198790779468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x89a76edf2b7b7b2e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1642678945123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Isai Café Location"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Easily accessible by public transport • Free parking available nearby
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Contact Form Section
const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Isai Café Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoUrl = `mailto:hello@isai.cafe?subject=${subject}&body=${body}`
    
    window.location.href = mailtoUrl
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hello Isai Café! 

My name is ${formData.name}. 
${formData.message || 'I would like to get in touch with you.'}`
    )
    const phoneNumber = '919876543210'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-4xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                    />
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-isai-primary hover:bg-isai-primary/90"
                      disabled={!formData.name || !formData.email || !formData.message}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!formData.name}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message via WhatsApp
                    </Button>
                  </div>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-isai-primary" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-isai-primary" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-gray-600">hello@isai.cafe</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-isai-primary" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-gray-600">Quick response</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-sm opacity-90">@isai.cafe</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <p className="text-sm opacity-90">Isai Café</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    <div>
                      <p className="font-medium">YouTube</p>
                      <p className="text-sm opacity-90">Isai Café</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Do you accept reservations?</p>
                    <p className="text-gray-600">Yes, for parties of 6 or more.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Is parking available?</p>
                    <p className="text-gray-600">Free street parking nearby.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Do you host private events?</p>
                    <p className="text-gray-600">Yes! Check our Events page.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="isai-font text-3xl font-bold isai-primary">
              Isai
            </Link>
            <p className="mt-4 text-gray-400">
              Where music and home blend into one
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                +91 98765 43210
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                hello@isai.cafe
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                123 Art Street, Music District
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Isai Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Contact Component
export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  )
}