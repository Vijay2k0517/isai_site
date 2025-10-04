'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Star, Coffee, Utensils, Cookie } from 'lucide-react'

// Navigation Component (shared)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState('menu')

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

// Menu Hero Section
const MenuHero = () => {
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
          backgroundImage: "url('https://images.pexels.com/photos/15818965/pexels-photo-15818965.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-7xl md:text-8xl font-bold text-white mb-4">
            Menu
          </h1>
          <p className="text-xl md:text-2xl text-white font-light">
            A symphony of flavors crafted with love
          </p>
        </div>
      </div>
    </section>
  )
}

// Menu Data
const menuData = {
  breakfast: [
    {
      id: 1,
      name: 'South Indian Idli',
      price: 80,
      description: 'Fluffy steamed rice cakes served with coconut chutney and sambar',
      category: 'Traditional',
      popular: true
    },
    {
      id: 2,
      name: 'Masala Dosa',
      price: 150,
      description: 'Crispy crepe filled with spiced potato, served with chutneys and sambar',
      category: 'Signature',
      popular: true
    },
    {
      id: 3,
      name: 'Upma',
      price: 90,
      description: 'Savory semolina porridge with vegetables and aromatic spices',
      category: 'Healthy'
    },
    {
      id: 4,
      name: 'Poha',
      price: 70,
      description: 'Flattened rice cooked with onions, peas, and fresh herbs',
      category: 'Light'
    },
    {
      id: 5,
      name: 'Breakfast Platter',
      price: 200,
      description: 'A combination of idli, dosa, vada with all accompaniments',
      category: 'Complete'
    }
  ],
  beverages: [
    {
      id: 6,
      name: 'Filter Coffee',
      price: 60,
      description: 'Traditional South Indian coffee brewed to perfection',
      category: 'Hot',
      popular: true
    },
    {
      id: 7,
      name: 'Masala Chai',
      price: 40,
      description: 'Aromatic spiced tea with milk, cardamom, and ginger',
      category: 'Hot',
      popular: true
    },
    {
      id: 8,
      name: 'Fresh Lime Water',
      price: 50,
      description: 'Refreshing lime juice with a hint of mint',
      category: 'Fresh'
    },
    {
      id: 9,
      name: 'Mango Lassi',
      price: 80,
      description: 'Creamy yogurt drink blended with fresh mango pulp',
      category: 'Fresh'
    },
    {
      id: 10,
      name: 'Green Tea',
      price: 55,
      description: 'Antioxidant-rich green tea with jasmine essence',
      category: 'Healthy'
    },
    {
      id: 11,
      name: 'Cold Brew Coffee',
      price: 120,
      description: 'Smooth cold-brewed coffee served over ice',
      category: 'Cold'
    }
  ],
  munches: [
    {
      id: 12,
      name: 'Vanilla Scone',
      price: 120,
      description: 'Fresh baked scone with vanilla cream and seasonal jam',
      category: 'Sweet',
      popular: true
    },
    {
      id: 13,
      name: 'Paneer Sandwich',
      price: 130,
      description: 'Grilled sandwich with spiced cottage cheese and vegetables',
      category: 'Savory'
    },
    {
      id: 14,
      name: 'Samosa Chat',
      price: 100,
      description: 'Crispy samosas topped with yogurt, chutneys, and spices',
      category: 'Street Food'
    },
    {
      id: 15,
      name: 'Chocolate Brownie',
      price: 140,
      description: 'Rich, fudgy brownie served warm with vanilla ice cream',
      category: 'Dessert'
    },
    {
      id: 16,
      name: 'Fruit Bowl',
      price: 110,
      description: 'Seasonal fresh fruits with honey and crushed nuts',
      category: 'Healthy'
    }
  ]
}

// Menu Item Component
const MenuItem = ({ item }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl isai-primary">₹{item.price}</span>
                {item.popular && (
                  <Badge variant="secondary" className="bg-isai-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <Badge variant="outline" className="text-xs">
              {item.category}
            </Badge>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="isai-font text-2xl">{item.name}</DialogTitle>
          <DialogDescription className="text-lg">
            <span className="font-bold isai-primary">₹{item.price}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-700">{item.description}</p>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{item.category}</Badge>
            {item.popular && (
              <Badge className="bg-isai-primary text-white">
                <Star className="w-3 h-3 mr-1" />
                Popular Choice
              </Badge>
            )}
          </div>
          <div className="pt-4 text-sm text-gray-600">
            <p>📞 Call us at +91 98765 43210 to place an order</p>
            <p>🕒 Preparation time: 10-15 minutes</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Menu Section Component
const MenuSection = ({ title, items, icon: Icon, delay }) => {
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
    <section ref={ref} className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: `${delay}ms` }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon className="w-8 h-8 isai-primary" />
            <h2 className="isai-font text-4xl font-bold text-gray-900">{title}</h2>
          </div>
          <div className="w-24 h-1 bg-isai-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${delay + (index * 100)}ms` }}
            >
              <MenuItem item={item} />
            </div>
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

// Main Menu Component
export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <MenuHero />
      <MenuSection 
        title="Breakfast" 
        items={menuData.breakfast} 
        icon={Utensils}
        delay={200}
      />
      <MenuSection 
        title="Beverages" 
        items={menuData.beverages} 
        icon={Coffee}
        delay={300}
      />
      <MenuSection 
        title="Munches" 
        items={menuData.munches} 
        icon={Cookie}
        delay={400}
      />
      <Footer />
    </div>
  )
}