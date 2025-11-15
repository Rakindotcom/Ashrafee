import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Restaurant from './pages/Restaurant'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

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
        <Route path="/" element={<Home />} />
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
