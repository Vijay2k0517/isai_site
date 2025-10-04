'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Calendar, Users, Clock, MessageCircle, Upload } from 'lucide-react'

// Navigation Component (shared)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('events')

  const navItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/about', section: 'about' },
    { name: 'Menu', href: '/menu', section: 'menu' },
    { name: 'Events', href: '/events', section: 'events' },
    { name: 'Blog', href: '/blog', section: 'blog' },
    { name: 'Contact', href: '/contact', section: 'contact' },
  ]

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 glass-nav rounded-full px-6 py-1.5">
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
  )
}

// Events Hero Section
const EventsHero = () => {
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
          backgroundImage: "url('https://images.unsplash.com/photo-1670978738746-698556e69084')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-7xl md:text-8xl font-bold text-white mb-4">
            Events
          </h1>
          <p className="text-xl md:text-2xl text-white font-light">
            Create memorable moments with us
          </p>
        </div>
      </div>
    </section>
  )
}

// Event Booking Form Component
const EventBookingForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    eventType: '',
    specialRequests: '',
    file: null
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

  const generateWhatsAppMessage = () => {
    const message = `Hello Isai Café! I would like to book an event:

📅 *Event Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Date: ${formData.date}
• Time: ${formData.time}
• Party Size: ${formData.partySize} people
• Event Type: ${formData.eventType}

📝 *Special Requests:*
${formData.specialRequests || 'None'}

Looking forward to your confirmation!`

    return encodeURIComponent(message)
  }

  const handleWhatsAppBooking = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const phoneNumber = '919876543210'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // For now, redirect to WhatsApp
    handleWhatsAppBooking()
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="isai-font text-4xl font-bold text-gray-900 mb-4">
            Book Your Event
          </h2>
          <p className="text-gray-600 text-lg">
            Let us help you create an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Event Booking Form
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="partySize">Party Size *</Label>
                    <Select onValueChange={(value) => handleInputChange('partySize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-5">2-5 people</SelectItem>
                        <SelectItem value="6-10">6-10 people</SelectItem>
                        <SelectItem value="11-20">11-20 people</SelectItem>
                        <SelectItem value="21-50">21-50 people</SelectItem>
                        <SelectItem value="50+">50+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 9 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="meeting">Business Meeting</SelectItem>
                      <SelectItem value="celebration">Celebration</SelectItem>
                      <SelectItem value="workshop">Workshop/Class</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requirements, dietary restrictions, or additional information..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="file">Attach File (Optional)</Label>
                  <div className="mt-2">
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={(e) => handleInputChange('file', e.target.files[0])}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-isai-primary file:text-white hover:file:bg-opacity-90"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Attach any relevant documents or images
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-isai-primary hover:bg-isai-primary/90"
                    disabled={!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.partySize || !formData.eventType}
                  >
                    Send WhatsApp Enquiry
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={!formData.name || !formData.phone}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Enquiry
                  </Button>
                </div>

                <p className="text-sm text-gray-600 text-center">
                  We'll get back to you within 24 hours to confirm your booking
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Event Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Event Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-isai-primary rounded-full"></div>
                    Private dining experiences
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-isai-primary rounded-full"></div>
                    Live classical music performances
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-isai-primary rounded-full"></div>
                    Customized menu planning
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-isai-primary rounded-full"></div>
                    Decorations and ambiance setup
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-isai-primary rounded-full"></div>
                    Audio equipment for presentations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Timing & Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Operating Hours</h4>
                    <p>Monday - Saturday: 8:00 AM - 11:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Capacity</h4>
                    <p>Maximum 60 guests for private events</p>
                    <p>Intimate gatherings of 2-20 preferred</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advance Notice</h4>
                    <p>Minimum 48 hours for small groups</p>
                    <p>1 week advance for larger events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4" />
                    events@isai.cafe
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" />
                    123 Art Street, Music District
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

// Main Events Component
export default function Events() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EventsHero />
      <EventBookingForm />
      <Footer />
    </div>
  )
}