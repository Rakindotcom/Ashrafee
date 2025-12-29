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

// Admin imports
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminBookings from './pages/admin/AdminBookings'
import AdminInquiries from './pages/admin/AdminInquiries'

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

// Public Layout Component (with Header/Footer)
const PublicLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
    <WhatsAppFloat />
  </>
)

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/rooms" element={<PublicLayout><Rooms /></PublicLayout>} />
          <Route path="/restaurant" element={<PublicLayout><Restaurant /></PublicLayout>} />
          <Route path="/faq" element={<PublicLayout><FAQ /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="inquiries" element={<AdminInquiries />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App

