import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <Link to="/">
              <img src="/logo.png" alt="Hotel Ashrafee" className="h-40 w-auto mb-4" />
            </Link>
            <p className="text-gray-300 mb-4">Your Home in Dhaka Since 1990</p>
            <p className="text-sm text-gray-400">
              Experience comfort and heritage at Dhaka's trusted 3-star hotel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange transition-colors">About</Link></li>
              <li><Link to="/rooms" className="hover:text-orange transition-colors">Rooms</Link></li>
              <li><Link to="/restaurant" className="hover:text-orange transition-colors">Restaurant</Link></li>
              <li><Link to="/faq" className="hover:text-orange transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>12 Outer Circular Road, Rajarbagh</p>
              <p>Dhaka, Bangladesh</p>
              <p>Phone: +880 1828-183920</p>
              <p>Restaurant: 01978 322 743</p>
              <p>Always Open (24/7)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Hotel Ashrafee. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Developed and maintained by <a href="https://www.404byte.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:text-heritage-gold transition-colors">404Byte</a>
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-heritage-gold text-sm font-medium">Established 1990</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer