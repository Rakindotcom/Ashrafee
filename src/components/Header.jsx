import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/restaurant', label: 'Restaurant' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className="bg-blue-950 sticky top-0 z-50 shadow-2xl backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Hotel Ashrafee" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-orange opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-navy-darker/80 backdrop-blur-sm rounded-full px-2 py-2 border border-gray-600/30">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative px-6 py-3 mx-1 rounded-full text-sm font-semibold tracking-wide
                    transition-all duration-300 ease-in-out
                    ${isActive(item.path) 
                      ? 'bg-orange text-white shadow-lg shadow-orange/30 transform scale-105' 
                      : 'text-white hover:text-white hover:bg-orange/20 hover:shadow-md hover:transform hover:scale-105'
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange/10 via-orange/30 to-orange/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Contact Icons */}
            <div className="flex items-center space-x-2 mr-4">
              <a 
                href="tel:+8801828183920" 
                className="p-3 rounded-full bg-navy-darker/60 text-white hover:bg-orange hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-gray-600/30"
                title="Call us"
              >
                <Phone size={18} className="group-hover:animate-pulse" />
              </a>
              <a 
                href="https://wa.me/8801828183920" 
                className="p-3 rounded-full bg-navy-darker/60 text-white hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-gray-600/30"
                title="WhatsApp us"
              >
                <MessageCircle size={18} className="group-hover:animate-pulse" />
              </a>
            </div>
            
            {/* Book Now Button */}
            <Link 
              to="/contact" 
              className="
                relative px-8 py-3 bg-gradient-to-r from-orange to-orange-hover 
                text-white font-bold text-sm tracking-wide rounded-full
                shadow-lg shadow-orange/30 hover:shadow-xl hover:shadow-orange/40
                transition-all duration-300 hover:scale-105 hover:from-orange-hover hover:to-orange
                border border-orange-hover/20 overflow-hidden group
              "
            >
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-navy-darker/60 text-white hover:bg-orange/80 transition-all duration-300 border border-gray-600/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-6 px-4 bg-navy-darker backdrop-blur-sm rounded-2xl mt-4 mb-4 border border-gray-600/30">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-6 py-4 rounded-xl text-base font-semibold tracking-wide
                    transition-all duration-300 transform
                    ${isActive(item.path) 
                      ? 'bg-orange text-white shadow-lg translate-x-2' 
                      : 'text-white hover:text-white hover:bg-orange/20 hover:translate-x-2 hover:shadow-md'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-600/30">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <a 
                  href="tel:+8801828183920" 
                  className="p-3 rounded-full bg-navy text-white hover:bg-orange transition-all duration-300 border border-gray-600/30"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="https://wa.me/8801828183920" 
                  className="p-3 rounded-full bg-navy text-white hover:bg-green-500 transition-all duration-300 border border-gray-600/30"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
              <Link 
                to="/contact" 
                className="block w-full py-4 bg-gradient-to-r from-orange to-orange-hover text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header