import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star, Users, Award, RotateCcw, Bed, Heart, Calendar, Wifi, Coffee, Shirt, Utensils, Zap, Clock, Shield, Tv, Camera, Flame, Car, User, Phone } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Set minimum dates
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  // Set minimum checkout date based on checkin
  const minCheckOutDate = checkInDate ?
    new Date(checkInDate.getTime() + 86400000) :
    tomorrow

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!checkInDate || !checkOutDate || !guests || !roomType) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    // Calculate nights
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))

    try {
      // Import dynamically to avoid issues
      const { addBooking } = await import('../services/adminService')

      await addBooking({
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: parseInt(guests),
        roomType,
        nights
      })

      alert('Your booking request has been submitted! We will contact you soon to confirm.')

      // Reset form
      setCheckInDate(null)
      setCheckOutDate(null)
      setGuests('')
      setRoomType('')
    } catch (error) {
      console.error('Error submitting booking:', error)
      alert('There was an error submitting your booking. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
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
              <option value="">Choose Room</option>
              <option value="standard">Standard Rooms - From BDT 2,700</option>
              <option value="deluxe">Deluxe Rooms - From BDT 3,000</option>
              <option value="super-deluxe">Super Deluxe - From BDT 4,200</option>
              <option value="green-deluxe">Green Deluxe - From BDT 4,500</option>
            </select>
          </div>

          <div className="btn-booking-container">
            <button type="submit" className="btn-booking w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Check Availability</span>
                  {checkInDate && checkOutDate && (
                    <span className="ml-2 text-xs opacity-90">
                      ({Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))} nights)
                    </span>
                  )}
                </>
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
            <span>4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-heritage-gold" size={20} />
            <span>50,000+ Guests</span>
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
    { number: '50,000', label: 'Happy Guests', suffix: '+' },
    { number: '4.9', label: 'Average Rating', suffix: '/5' }
  ]

  return (
    <section className="bg-elegant-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
      title: 'CCTV Security',
      description: '24/7 security monitoring for your safety'
    },
    {
      icon: <Flame size={40} className="text-orange" />,
      title: 'Hot & Cold Water',
      description: 'Hot and cold water available 24/7'
    },
    {
      icon: <Car size={40} className="text-orange" />,
      title: 'Car Parking',
      description: 'Complimentary parking for all guests'
    },
    {
      icon: <Bed size={40} className="text-orange" />,
      title: 'Drivers Dormitory',
      description: 'Dedicated accommodation for drivers'
    },
    {
      icon: <Heart size={40} className="text-orange" />,
      title: 'Prayer Room',
      description: 'Dedicated prayer facilities available'
    },
    {
      icon: <Car size={40} className="text-orange" />,
      title: 'Rent-A-Car',
      description: 'Car rental services available on request'
    },
    {
      icon: <User size={40} className="text-orange" />,
      title: 'On Call Doctor',
      description: 'Medical assistance available when needed'
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

// Featured Rooms Section with Slider
const FeaturedRoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  const rooms = [
    {
      name: 'Standard Single',
      image: '/standardsingle_1.webp'
    },
    {
      name: 'Standard Twin',
      image: '/standardtwin_1.webp'
    },
    {
      name: 'Standard Couple',
      image: '/standardcouple_1.webp'
    },
    {
      name: 'Deluxe Single',
      image: '/deluxsingle_1.webp'
    },
    {
      name: 'Deluxe Twin',
      image: '/deluxtwin_1.webp'
    },
    {
      name: 'Deluxe Couple',
      image: '/deluxcouple_1.webp'
    },
    {
      name: 'Super Deluxe Twin',
      image: '/superdeluxetwin_1.webp'
    },
    {
      name: 'Super Deluxe Couple',
      image: '/superdeluxecouple_1.webp'
    },
    {
      name: 'Green Deluxe Twin',
      image: '/greendeluxtwin_1.webp'
    },
    {
      name: 'Green Deluxe Couple',
      image: '/greendeluxcouple_1.webp'
    },
    {
      name: 'Triple Beds Family Room',
      image: '/triplebed_1.webp'
    }
  ]

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Reset index when items per view changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [itemsPerView])

  const maxIndex = Math.max(0, rooms.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-12 md:py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Comfortable Rooms
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Thoughtfully designed for your perfect stay
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative group overflow-hidden rounded-lg shadow-lg flex flex-col md:block h-full">
                    {/* Room Image */}
                    <div className="relative w-full aspect-video md:aspect-auto md:h-full">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay - Desktop Only */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent hidden md:block"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative md:absolute bottom-auto md:bottom-0 left-0 right-0 p-4 md:p-6 bg-white md:bg-transparent text-navy md:text-white flex-1 md:flex-none">
                      <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 md:drop-shadow-lg">
                        {room.name}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                        <Link
                          to="/contact"
                          className="bg-orange hover:bg-orange-dark text-white px-4 md:px-6 py-2 md:py-3 rounded text-center text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105"
                        >
                          Book Now
                        </Link>
                        <Link
                          to="/rooms"
                          className="bg-navy md:bg-white/20 hover:bg-navy-dark md:hover:bg-white/30 md:backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded text-center text-sm md:text-base font-semibold transition-all duration-300 md:border md:border-white/50"
                        >
                          View Room
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {rooms.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-navy/90 hover:bg-navy text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
                aria-label="Previous rooms"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-navy/90 hover:bg-navy text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
                aria-label="Next rooms"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {rooms.length > itemsPerView && (
            <div className="flex justify-center mt-6 md:mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-orange scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link
            to="/rooms"
            className="inline-block bg-navy hover:bg-navy-dark text-white px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}

// Restaurant Highlight Section with Image Carousel
const RestaurantSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const restaurantImages = [
    {
      src: '/AshrafeeSpecialSalad.JPG',
      alt: 'Ashrafee Special Salad',
      caption: 'Signature Special Salad'
    },
    {
      src: '/AshrafeeSpecialSoup.JPG',
      alt: 'Ashrafee Special Soup',
      caption: 'Rich & Flavorful Soup'
    },
    {
      src: '/ThaiSoup.JPG',
      alt: 'Thai Soup',
      caption: 'Authentic Thai Soup'
    },
    {
      src: '/FriedSpringChicken.JPG',
      alt: 'Fried Spring Chicken',
      caption: 'Crispy Spring Chicken'
    },
    {
      src: '/MasalaChicken.JPG',
      alt: 'Masala Chicken',
      caption: 'Spicy Masala Chicken'
    },
    {
      src: '/FriedChicken.JPG',
      alt: 'Fried Chicken',
      caption: 'Golden Fried Chicken'
    },
    {
      src: '/ClubSandwich.JPG',
      alt: 'Club Sandwich',
      caption: 'Delicious Club Sandwich'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % restaurantImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + restaurantImages.length) % restaurantImages.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-w-16 aspect-h-9 group">
            <div className="w-full h-[400px] relative">
              <img
                src={restaurantImages[currentIndex].src}
                alt={restaurantImages[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                {restaurantImages[currentIndex].caption}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {restaurantImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange w-6' : 'bg-white/50 hover:bg-white'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Restaurant Service</h2>
            <p className="text-xl text-gray-200 mb-6">Ashrafee</p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Experience authentic flavors from four distinct cuisines with over 400 carefully crafted dishes.
              From spicy Thai curries to traditional Bangladeshi favorites, our chefs bring you the best of Asian cuisine.
            </p>

            {/* Cuisine Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-orange/20 border border-orange text-orange-100 px-4 py-2 rounded-full text-sm font-medium">Thai Cuisine</span>
              <span className="bg-orange/20 border border-orange text-orange-100 px-4 py-2 rounded-full text-sm font-medium">Chinese Cuisine</span>
              <span className="bg-orange/20 border border-orange text-orange-100 px-4 py-2 rounded-full text-sm font-medium">Bangladeshi Cuisine</span>
              <span className="bg-orange/20 border border-orange text-orange-100 px-4 py-2 rounded-full text-sm font-medium">Indian Cuisine</span>
            </div>

            <div className="space-y-4">
              <Link to="/restaurant" className="inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                VIEW FULL MENU
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="text-gray-300 flex items-center gap-2 mt-4">
                <Phone size={18} className="text-orange" />
                <span>Call to book:</span>
                <a href="tel:01978322743" className="text-white hover:text-orange font-semibold transition-colors">01978 322 743</a>
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
        <p className="text-xl text-gray-300 mb-12">Join 50,000+ satisfied guests since 1990</p>

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
          Trusted by thousands of guests â€¢ 24/7 customer support â€¢ Best rate guarantee
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

const Home = () => {
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

export default Home
