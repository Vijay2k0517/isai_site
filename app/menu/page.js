
"use client";
import { Clock } from "lucide-react";   // ✅ Fix here
import React from "react";


import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Star, Coffee, Utensils, Cookie, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Navigation Components (shared)
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
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="max-w-4xl px-4">
          <h1 className="isai-font text-8xl md:text-9xl font-bold text-white mb-4 animate-fade-in">
            Menu
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light tracking-wider">
            A symphony of flavor crafted with love.
          </p>
        </div>
      </div>
    </section>
  )
}

// Random food images array
const foodImages = [
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b', // Pizza
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add', // Burger
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', // Pizza
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', // Sandwich
  'https://images.unsplash.com/photo-1539255146272-3c7eac92edc4', // Coffee
  'https://images.unsplash.com/photo-1509048191080-ddddaae9cb16', // Coffee
  'https://images.unsplash.com/photo-1495474479307-4596cc7b69d5', // Pasta
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96', // Salad
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641', // Breakfast
  'https://images.unsplash.com/photo-1551218808-94e2205fc28c', // Eggs
  'https://images.unsplash.com/photo-1548943487-a2e4e43b4853', // Appetizer
  'https://images.unsplash.com/photo-1598515616309-2a7b8a0a5b1a', // Dessert
  'https://images.unsplash.com/photo-1588168328980-0c5bb3e6d6db', // Beverages
  'https://images.unsplash.com/photo-1579952362363-395604b459d1', // Snacks
  'https://images.unsplash.com/photo-1563379091379-e3f9e42809f7', // Seasonal
]

// Menu Item Modal Component
const MenuItemModal = ({ item, isOpen, onClose }) => {
  const randomImage = foodImages[item.id % foodImages.length]
  const modalRef = useRef(null)
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'
      scrollPositionRef.current = window.scrollY
      
      // Store scroll position
      const handleScroll = (e) => {
        e.preventDefault()
        onClose() // Close modal on scroll
      }
      
      // Add scroll listener (passive false to prevent scrolling)
      window.addEventListener('scroll', handleScroll, { passive: false })
      
      return () => {
        document.body.style.overflow = 'unset'
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 backdrop-blur-sm bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative z-10 max-w-lg w-full max-h-[90vh] overflow-auto"
            initial={{ 
              opacity: 0, 
              scale: 0.95, 
              y: 20 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              y: 20 
            }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              damping: 25,
              stiffness: 500
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Card */}
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                backgroundColor: '#1E1E1E',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 20px -5px rgba(0, 0, 0, 0.3)' 
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70"
                style={{ color: '#EFC1A9' }}
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image */}
              <div className="relative h-48 md:h-56">
                <img
                  src={randomImage}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-6" style={{ backgroundColor: '#1E1E1E' }}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <h2 className="text-xl md:text-2xl font-bold leading-tight pr-2" style={{ color: '#796A5B' }}>
                    {item.name}
                  </h2>
                  <span className="text-lg md:text-xl font-bold md:ml-4 whitespace-nowrap" style={{ color: '#EFC1A9' }}>
                    {item.price}
                  </span>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: '#EFC1A9' }}>
                  {item.description}
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <Badge variant="outline" className="text-sm self-start" style={{ color: '#EFC1A9', borderColor: '#EFC1A9' }}>
                    {item.category}
                  </Badge>
                  {item.popular && (
                    <Badge className="px-3 py-1 rounded-full text-sm flex items-center gap-1 self-start md:self-auto" style={{ backgroundColor: '#EFC1A9', color: '#333333' }}>
                      <Star className="w-4 h-4" />
                      Popular Choice
                    </Badge>
                  )}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-600 text-xs md:text-sm space-y-1" style={{ color: '#EFC1A9' }}>
                  <p>📞 Call us at +91 98765 43210 to place an order</p>
                  <p>🕒 Preparation time: 10-15 minutes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Menu Item Component
const MenuItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div 
        className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg h-full"
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className="rounded-lg rounded-lg border border-gray-600 p-6 h-full flex flex-col" 
          style={{ backgroundColor: '#1E1E1E' }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-3 min-h-[3rem]">
            <h3 className="font-semibold text-lg pr-2" style={{ color: '#796A5B' }}>{item.name}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-bold text-xl" style={{ color: '#EFC1A9' }}>{item.price}</span>
                {item.popular && (
                <Badge className="text-white px-2 py-1 rounded-full text-xs" style={{ backgroundColor: '#EFC1A9', color: '#333333' }}>
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
            </div>
          
          {/* Description - Truncated */}
          <p className="text-sm mb-4 flex-grow" style={{ color: '#EFC1A9' }}>
            {item.description.length > 80 
              ? `${item.description.substring(0, 80)}...` 
              : item.description
            }
          </p>
          
          {/* Category Badge */}
          <div className="flex-shrink-0">
            <Badge variant="outline" className="text-xs" style={{ color: '#EFC1A9', borderColor: '#EFC1A9' }}>
              {item.category}
            </Badge>
          </div>
          </div>
        </div>
      
      {/* Modal */}
      <MenuItemModal 
        item={item} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
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
    <section ref={ref} className="py-16 px-4" style={{ backgroundColor: '#1E1E1E' }}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: `${delay}ms` }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon className="w-8 h-8" style={{ color: '#796A5B' }} />
            <h2 className="isai-font text-4xl font-bold" style={{ color: '#796A5B' }}>{title}</h2>
          </div>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#EFC1A9' }}></div>
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

// Menu Data
const menuData = {
  appetizers: [
    {
      id: 1,
      name: 'Garlic Bread',
      price: '₹130.00',
      description: 'Freshly baked bread topped with garlic butter and herbs, served warm with crispy edges',
      category: 'Appetizer'
    },
    {
      id: 2,
      name: 'Cheesy Garlic Bread',
      price: '₹150.00',
      description: 'Golden garlic bread topped with melted cheese blend, baked to perfection',
      category: 'Appetizer'
    },
    {
      id: 3,
      name: 'French Fries',
      price: '₹130.00',
      description: 'Crispy golden fries seasoned with herbs and served with tangy dipping sauce',
      category: 'Appetizer'
    },
    {
      id: 4,
      name: 'Spicy French Fries',
      price: '₹150.00',
      description: 'Seasoned fries with a spicy kick, perfect for those who love bold flavors',
      category: 'Appetizer'
    },
    {
      id: 5,
      name: 'Pan Fried Mushrooms',
      price: '₹180.00',
      description: 'Fresh mushrooms pan-fried to perfection with aromatic herbs and garlic',
      category: 'Appetizer'
    },
    {
      id: 6,
      name: 'Pan Fried Tenders',
      price: '₹300.00',
      description: 'Juicy chicken tenders pan-fried with special seasoning and golden crisp',
      category: 'Appetizer',
      popular: true
    }
  ],
  salads: [
    {
      id: 7,
      name: 'Honey & Spice',
      price: '₹200.00',
      description: 'Fresh mixed greens with honey dressing and spicy peanuts for the perfect balance',
      category: 'Salad'
    },
    {
      id: 8,
      name: 'Chicken & Walnut',
      price: '₹250.00',
      description: 'Tender chicken pieces with crunchy walnuts and fresh seasonal vegetables',
      category: 'Salad',
      popular: true
    }
  ],
  'All Day Breakfast': [
    {
      id: 9,
      name: 'Egg Sandwich',
      price: '₹200.00',
      description: 'Perfectly cooked eggs with fresh vegetables and herbs on toasted bread',
      category: 'Breakfast'
    },
    {
      id: 10,
      name: 'French Toast',
      price: '₹200.00',
      description: 'Classic French toast with cinnamon, vanilla, and maple syrup',
      category: 'Breakfast'
    },
    {
      id: 11,
      name: 'Masala Toast',
      price: '₹220.00',
      description: 'Spiced toast with traditional Indian flavors and aromatic spices',
      category: 'Breakfast'
    },
    {
      id: 12,
      name: 'Eggs & Toast',
      price: '₹200.00',
      description: 'Simple yet delicious combination of sunny-side eggs with buttered toast',
      category: 'Breakfast'
    },
    {
      id: 13,
      name: 'The English Breakfast',
      price: '₹400.00',
      description: 'Complete English breakfast with eggs, sausages, bacon, beans, and toast',
      category: 'Breakfast',
      popular: true
    },
    {
      id: 14,
      name: 'Cornflakes & Milk',
      price: '₹160.00',
      description: 'Classic breakfast cereal served with fresh cold milk',
      category: 'Breakfast'
    },
    {
      id: 15,
      name: 'Poha',
      price: '₹180.00',
      description: 'Light and fluffy flattened rice cooked with onions, herbs, and spices',
      category: 'Breakfast'
    }
  ],
  "Isai's Originals": [
    {
      id: 16,
      name: 'Egg Wrapped Ramen',
      price: '₹200.00',
      description: 'Our signature ramen wrapped in a perfectly cooked egg, creating layers of flavor',
      category: 'Signature',
      popular: true
    },
    {
      id: 17,
      name: 'Egg Wrapped Shrooms',
      price: '₹200.00',
      description: 'Sauteed mushrooms wrapped in delicate egg layers with aromatic herbs',
      category: 'Signature'
    },
    {
      id: 18,
      name: 'Semi-Fried Momos',
      price: '₹200.00',
      description: 'Delicate dumplings semi-fried to achieve the perfect texture and taste',
      category: 'Signature'
    },
    {
      id: 19,
      name: 'The Bacon Special',
      price: '₹300.00',
      description: 'Premium bacon preparation with our special sauce and cooking technique',
      category: 'Signature',
      popular: true
    }
  ],
  eggs: [
    {
      id: 20,
      name: 'The Classic Omelet',
      price: '₹150.00',
      description: 'Perfectly fluffy omelet with fresh vegetables and herbs, cooked to perfection',
      category: 'Eggs'
    },
    {
      id: 21,
      name: 'Egg Wrapped Ramen',
      price: '₹200.00',
      description: 'Our unique take on ramen wrapped in soft egg layers with rich broth',
      category: 'Eggs'
    },
    {
      id: 22,
      name: 'Egg Wrapped Mushrooms',
      price: '₹200.00',
      description: 'Tender mushrooms encapsulated in egg wraps with herbs and seasoning',
      category: 'Eggs'
    }
  ],
  'Burgers & Sandwiches': [
    {
      id: 23,
      name: 'The Shroomy Burger',
      price: '₹200.00',
      description: 'Juicy mushroom patty with fresh vegetables and our signature sauce',
      category: 'Burger'
    },
    {
      id: 24,
      name: 'The Classic Veggie Burger',
      price: '₹200.00',
      description: 'Fresh vegetable patty with lettuce, tomato, and creamy sauce',
      category: 'Burger'
    },
    {
      id: 25,
      name: 'The Classic Chicken Burger',
      price: '₹220.00',
      description: 'Grilled chicken breast with fresh vegetables and herbs in soft bun',
      category: 'Burger',
      popular: true
    },
    {
      id: 26,
      name: 'French Toast',
      price: '₹180.00',
      description: 'Sweet French toast sandwich with cinnamon and vanilla flavors',
      category: 'Sandwich'
    },
    {
      id: 27,
      name: 'Coleslaw Sandwich',
      price: '₹200.00',
      description: 'Fresh coleslaw mix with crunchy vegetables in soft bread',
      category: 'Sandwich'
    },
    {
      id: 28,
      name: 'Egg Sandwich',
      price: '₹200.00',
      description: 'Protein-rich egg sandwich with herbs and fresh vegetables',
      category: 'Sandwich'
    },
    {
      id: 29,
      name: 'Bacon Special',
      price: '₹300.00',
      description: 'Premium bacon sandwich with our special sauce and fresh vegetables',
      category: 'Sandwich',
      popular: true
    }
  ],
  beverages: [
    {
      id: 30,
      name: 'Black Tea / Black Coffee',
      price: '₹60.00',
      description: 'Traditional black tea or coffee served hot, a perfect morning ritual',
      category: 'Hot Beverages'
    },
    {
      id: 31,
      name: 'Filter Coffee',
      price: '₹100.00',
      description: 'Authentic South Indian filter coffee served hot with rich aroma',
      category: 'Hot Beverages',
      popular: true
    },
    {
      id: 32,
      name: 'Cold Coffee',
      price: '₹160.00',
      description: 'Refreshing cold coffee blend served over ice with cream',
      category: 'Cold Beverages'
    },
    {
      id: 33,
      name: 'Affogato Filter Coffee',
      price: '₹200.00',
      description: 'Rich filter coffee poured over vanilla ice cream for a delightful treat',
      category: 'Specialty',
      popular: true
    },
    {
      id: 34,
      name: 'Affogato Rose',
      price: '₹200.00',
      description: 'Rose-flavored coffee preparation with vanilla ice cream',
      category: 'Specialty'
    },
    {
      id: 35,
      name: 'Coffee Milkshake',
      price: '₹200.00',
      description: 'Creamy coffee milkshake blended with vanilla ice cream',
      category: 'Cold Beverages'
    },
    {
      id: 36,
      name: 'Italian Soda',
      price: '₹150.00',
      description: 'Classic Italian soda with sparkling water and flavored syrup',
      category: 'Cold Beverages'
    },
    {
      id: 37,
      name: 'Herbal Tea',
      price: '₹180.00',
      description: 'Soothing herbal tea blend with natural herbs and flavors',
      category: 'Hot Beverages'
    },
    {
      id: 38,
      name: 'Hot Chocolate',
      price: '₹150.00',
      description: 'Rich and creamy hot chocolate topped with froth',
      category: 'Hot Beverages'
    },
    {
      id: 39,
      name: 'Rose Milk',
      price: '₹150.00',
      description: 'Refreshing rose-flavored milk drink, perfect for any time of day',
      category: 'Cold Beverages'
    }
  ],
  sandwiches: [
    {
      id: 40,
      name: "Keep It 100' Burger",
      price: '₹200.00',
      description: 'Our signature burger that keeps it simple yet delicious, a crowd favorite',
      category: 'Burger',
      popular: true
    },
    {
      id: 41,
      name: 'Classic Veg Burger',
      price: '₹200.00',
      description: 'Classic vegetarian burger with fresh vegetables and herbs',
      category: 'Burger'
    },
    {
      id: 42,
      name: 'Classic Chicken Burger',
      price: '₹250.00',
      description: 'Premium chicken burger with grilled breast and fresh toppings',
      category: 'Burger',
      popular: true
    },
    {
      id: 43,
      name: 'Classic Club Sandwich',
      price: '₹200.00',
      description: 'Traditional club sandwich with layers of meat, vegetables, and sauce',
      category: 'Sandwich'
    },
    {
      id: 44,
      name: 'Classic Club Chicken',
      price: '₹250.00',
      description: 'Chicken club sandwich with premium ingredients and fresh vegetables',
      category: 'Sandwich',
      popular: true
    },
    {
      id: 45,
      name: 'Coleslaw Sandwich',
      price: '₹200.00',
      description: 'Fresh coleslaw sandwich with crunchy vegetables in soft bread',
      category: 'Sandwich'
    }
  ],
  "Isai's Seasonal Specials": [
    {
      id: 46,
      name: 'Brownie',
      price: '₹100.00',
      description: 'Rich chocolate brownie baked fresh daily with premium cocoa',
      category: 'Dessert'
    },
    {
      id: 47,
      name: 'Brownie & Ice Cream',
      price: '₹200.00',
      description: 'Warm chocolate brownie served with vanilla ice cream',
      category: 'Dessert',
      popular: true
    },
    {
      id: 48,
      name: 'Watermelon Slushie',
      price: '₹200.00',
      description: 'Refreshing watermelon slushie perfect for hot summer days',
      category: 'Seasonal'
    }
  ]
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

// Main Menu Component
export default function Menu() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1E1E1E' }}>
      <Navigation />
      <MenuHero />
      <MenuSection 
        title="Appetizers" 
        items={menuData.appetizers} 
        icon={Utensils}
        delay={200}
      />
      <MenuSection 
        title="Salads" 
        items={menuData.salads} 
        icon={Utensils}
        delay={300}
      />
      <MenuSection 
        title="All Day Breakfast" 
        items={menuData['All Day Breakfast']} 
        icon={Utensils}
        delay={400}
      />
      <MenuSection 
        title="Isai's Originals" 
        items={menuData["Isai's Originals"]} 
        icon={Utensils}
        delay={500}
      />
      <MenuSection 
        title="Eggs" 
        items={menuData.eggs} 
        icon={Utensils}
        delay={600}
      />
      <MenuSection 
        title="Burgers & Sandwiches" 
        items={menuData['Burgers & Sandwiches']} 
        icon={Utensils}
        delay={700}
      />
      <MenuSection 
        title="Beverages" 
        items={menuData.beverages} 
        icon={Coffee}
        delay={800}
      />
      <MenuSection 
        title="Sandwiches" 
        items={menuData.sandwiches} 
        icon={Utensils}
        delay={900}
      />
      <MenuSection 
        title="Isai's Seasonal Specials" 
        items={menuData["Isai's Seasonal Specials"]} 
        icon={Cookie}
        delay={1000}
      />
      <Footer />
    </div>
  )
}