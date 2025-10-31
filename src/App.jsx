import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Star, Users, Award, RotateCcw, Bed, Heart, Calendar, Wifi, Coffee, Shirt, Utensils, Zap, Clock, Shield, Tv, Camera, Flame, Car, User, MessageCircle } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'



// Custom Date Input Component
const CustomDateInput = ({ value, onClick, placeholder, className }) => (
  <div className="custom-date-picker">
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      className={className}
      readOnly
    />
    <Calendar className="date-picker-icon" size={18} />
  </div>
)

// Booking Widget Component
const BookingWidget = () => {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [guests, setGuests] = useState('')
  const [roomType, setRoomType] = useState('')

  // Set minimum dates
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  // Set minimum checkout date based on checkin
  const minCheckOutDate = checkInDate ?
    new Date(checkInDate.getTime() + 86400000) :
    tomorrow

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!checkInDate || !checkOutDate || !guests || !roomType) {
      alert('Please fill in all fields')
      return
    }

    // Calculate nights
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))

    console.log('Booking:', {
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      roomType,
      nights
    })
  }

  const formatDate = (date) => {
    if (!date) return ''
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="booking-widget max-w-5xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="booking-grid">
          <div>
            <label className="form-label">Check-in Date</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              minDate={today}
              placeholderText="Select check-in date"
              customInput={
                <CustomDateInput
                  className="custom-date-input"
                  placeholder="Select check-in date"
                />
              }
              dateFormat="EEE, MMM d"
            />
          </div>

          <div>
            <label className="form-label">Check-out Date</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={minCheckOutDate}
              placeholderText="Select check-out date"
              customInput={
                <CustomDateInput
                  className="custom-date-input"
                  placeholder="Select check-out date"
                />
              }
              dateFormat="EEE, MMM d"
            />
          </div>

          <div>
            <label className="form-label">Number of Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div>
            <label className="form-label">Room Category</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Choose room type</option>
              <option value="standard">Standard Rooms - From BDT 2,700</option>
              <option value="deluxe">Deluxe Rooms - From BDT 3,000</option>
              <option value="super-deluxe">Super Deluxe - From BDT 4,200</option>
              <option value="green-deluxe">Green Deluxe - From BDT 4,500</option>
            </select>
          </div>

          <div className="btn-booking-container">
            <button type="submit" className="btn-booking w-full">
              <span>Check Availability</span>
              {checkInDate && checkOutDate && (
                <span className="ml-2 text-xs opacity-90">
                  ({Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))} nights)
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen bg-navy flex items-center">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-navy-darker opacity-90"></div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome Home to Hotel Ashrafee
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Where Comfort Meets Heritage Since{' '}
          <span className="text-heritage-gold font-semibold">1990</span>
        </p>

        {/* Booking Widget */}
        <div className="mb-12">
          <BookingWidget />
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Award className="text-heritage-gold" size={20} />
            <span>Since 1990</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="text-heritage-gold" size={20} />
            <span>4.0 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-heritage-gold" size={20} />
            <span>30,000+ Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="text-heritage-gold" size={20} />
            <span>70% Return Rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trust Bar Component
const TrustBar = () => {
  const stats = [
    { number: '34', label: 'Years of Excellence', suffix: '+' },
    { number: '30,000', label: 'Happy Guests', suffix: '+' },
    { number: '4.0', label: 'Average Rating', suffix: '/5' },
    { number: '70', label: 'Return Rate', suffix: '%' }
  ]

  return (
    <section className="bg-elegant-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-navy">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Section Component
const WhyChooseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const amenities = [
    {
      icon: <Wifi size={40} className="text-orange" />,
      title: 'Wifi',
      description: 'High-speed internet throughout the hotel'
    },
    {
      icon: <User size={40} className="text-orange" />,
      title: 'Concierge',
      description: 'Personal assistance and local recommendations'
    },
    {
      icon: <Coffee size={40} className="text-orange" />,
      title: 'Mini Bar',
      description: 'Refreshments available in your room'
    },
    {
      icon: <Shirt size={40} className="text-orange" />,
      title: 'Laundry',
      description: 'Professional laundry and dry cleaning services'
    },
    {
      icon: <Utensils size={40} className="text-orange" />,
      title: 'In Hotel Restaurant',
      description: 'Authentic Asian cuisine with 400+ dishes'
    },
    {
      icon: <Zap size={40} className="text-orange" />,
      title: 'Standby Generator',
      description: 'Uninterrupted power supply 24/7'
    },
    {
      icon: <Clock size={40} className="text-orange" />,
      title: '24 Hrs Room Service',
      description: 'Round-the-clock room service available'
    },
    {
      icon: <Shield size={40} className="text-orange" />,
      title: 'Safe Deposit Box',
      description: 'Secure storage for your valuables'
    },
    {
      icon: <Tv size={40} className="text-orange" />,
      title: 'Smart TV',
      description: 'Entertainment at your fingertips'
    },
    {
      icon: <Camera size={40} className="text-orange" />,
      title: 'CCTV Coverage',
      description: '24/7 security monitoring for your safety'
    },
    {
      icon: <Flame size={40} className="text-orange" />,
      title: 'Fire Safety',
      description: 'Advanced fire safety systems installed'
    },
    {
      icon: <Car size={40} className="text-orange" />,
      title: 'Free Parking',
      description: 'Complimentary parking for all guests'
    }
  ]

  // Group amenities into slides - 4 for mobile, 6 for desktop
  const mobileSlides = []
  const desktopSlides = []

  // Mobile slides (4 items each)
  for (let i = 0; i < amenities.length; i += 4) {
    mobileSlides.push(amenities.slice(i, i + 4))
  }

  // Desktop slides (6 items each)
  for (let i = 0; i < amenities.length; i += 6) {
    desktopSlides.push(amenities.slice(i, i + 6))
  }

  // Track viewport size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0)
  }, [isMobile])

  const nextSlide = () => {
    const maxSlides = isMobile ? mobileSlides.length : desktopSlides.length
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    const maxSlides = isMobile ? mobileSlides.length : desktopSlides.length
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000) // Change slide every 4 seconds
    return () => clearInterval(interval)
  }, [mobileSlides.length, desktopSlides.length])

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium amenities and services for your comfort and convenience
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slides */}
          <div className="overflow-hidden rounded-xl">
            {/* Mobile Slides */}
            <div className="block md:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {mobileSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {slide.map((amenity, index) => (
                        <div key={index} className="bg-elegant-cream p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center min-h-[160px] flex flex-col justify-center">
                          <div className="flex flex-col items-center">
                            <div className="flex justify-center mb-3 shrink-0">
                              <div className="text-orange">
                                {React.cloneElement(amenity.icon, { size: 32 })}
                              </div>
                            </div>
                            <div className="text-base font-bold text-navy leading-tight text-center mb-2">
                              {amenity.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Slides */}
            <div className="hidden md:block">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {desktopSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full shrink-0">
                    <div className="grid grid-cols-3 gap-6 p-4">
                      {slide.map((amenity, index) => (
                        <div key={index} className="bg-elegant-cream p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center min-h-[200px] flex flex-col justify-center">
                          <div className="flex flex-col items-center">
                            <div className="flex justify-center mb-4 shrink-0">
                              <div className="text-orange">
                                {React.cloneElement(amenity.icon, { size: 48 })}
                              </div>
                            </div>
                            <div className="text-xl font-bold text-navy leading-tight text-center mb-3">
                              {amenity.title}
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed text-center">
                              {amenity.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-navy/80 hover:bg-navy text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {/* Mobile Indicators */}
            <div className="flex md:hidden space-x-2">
              {mobileSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-orange scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            {/* Desktop Indicators */}
            <div className="hidden md:flex space-x-2">
              {desktopSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-orange scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured Rooms Section
const FeaturedRoomsSection = () => {
  const rooms = [
    {
      name: 'Standard Single',
      price: { bdt: 2700, usd: 23 },
      image: '/api/placeholder/400/300',
      features: ['Free WiFi', 'Air Conditioning', 'Smart TV', 'Mini Fridge']
    },
    {
      name: 'Deluxe Double',
      price: { bdt: 3500, usd: 30 },
      image: '/api/placeholder/400/300',
      features: ['King Size Bed', 'City View', 'Work Desk', 'Premium Amenities']
    },
    {
      name: 'Super Deluxe',
      price: { bdt: 4500, usd: 38 },
      image: '/api/placeholder/400/300',
      features: ['Spacious Layout', 'Seating Area', 'Premium Bathroom', 'Coffee Maker']
    },
    {
      name: 'Green Deluxe',
      price: { bdt: 5800, usd: 49 },
      image: '/api/placeholder/400/300',
      features: ['Garden View', 'Balcony', 'Luxury Amenities', 'Room Service']
    }
  ]

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Our Comfortable Rooms
          </h2>
          <p className="text-xl text-gray-600">
            Thoughtfully designed for your perfect stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Room Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{room.name}</h3>
                <div className="text-lg font-semibold text-orange mb-4">
                  From BDT {room.price.bdt.toLocaleString()} / USD {room.price.usd}
                </div>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/rooms" className="btn-primary w-full text-center">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Restaurant Highlight Section
const RestaurantSection = () => {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel Placeholder */}
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-80 bg-navy-light rounded-lg flex items-center justify-center">
              <span className="text-gray-300">Restaurant Images Carousel</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Aahelee Restaurant</h2>
            <p className="text-xl text-gray-200 mb-6">A Culinary Journey Through Asia</p>
            <p className="text-gray-300 mb-8">
              Experience authentic flavors from four distinct cuisines with over 400 carefully crafted dishes.
              From spicy Thai curries to traditional Bangladeshi favorites, our chefs bring you the best of Asian cuisine.
            </p>

            {/* Cuisine Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-orange px-4 py-2 rounded-full text-white font-medium">Thai Cuisine</span>
              <span className="bg-orange px-4 py-2 rounded-full text-white font-medium">Chinese Cuisine</span>
              <span className="bg-orange px-4 py-2 rounded-full text-white font-medium">Bangladeshi Cuisine</span>
              <span className="bg-orange px-4 py-2 rounded-full text-white font-medium">Indian Cuisine</span>
            </div>

            <div className="space-y-4">
              <Link to="/restaurant" className="btn-primary inline-block">VIEW FULL MENU</Link>
              <div className="text-gray-300">
                Call to book: <a href="tel:01978322743" className="text-orange hover:underline">01978 322 743</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
const FinalCTASection = () => {
  return (
    <section className="py-20 bg-navy text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Experience the Ashrafee Difference</h2>
        <p className="text-xl text-gray-300 mb-12">Join 30,000+ satisfied guests since 1990</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
            BOOK YOUR STAY
          </Link>
          <a
            href="tel:+8801828183920"
            className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-navy"
          >
            CALL NOW: +880 1828-183920
          </a>
          <a
            href="https://wa.me/8801828183920"
            className="btn-whatsapp px-8 py-4 text-lg"
          >
            WHATSAPP US
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Trusted by thousands of guests • 24/7 customer support • Best rate guarantee
        </p>
      </div>
    </section>
  )
}



// WhatsApp Floating Button Component
const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Hide button when footer is visible
        if (footerRect.top < windowHeight) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/8801828183920?text=Hi,%20I'm%20interested%20in%20booking%20a%20room%20at%20Hotel%20Ashrafee"
      className={`whatsapp-float pulse ${!isVisible ? 'hidden' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}

// Home Page Component
const HomePage = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustBar />
      <WhyChooseSection />
      <FeaturedRoomsSection />
      <RestaurantSection />
      <FinalCTASection />
    </main>
  )
}

// Scroll to top component
const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App