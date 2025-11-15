import { useState } from 'react'
import { Phone, Mail, MessageCircle, MapPin, Clock, Car, Plane, Train } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: 1,
    message: ''
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }



  const nearbyLandmarks = [
    { name: 'Kamlapur Railway Station', distance: '2 min drive', icon: <Train size={20} /> },
    { name: 'BRTC Bus Terminal', distance: 'Walking distance', icon: <Car size={20} /> },
    { name: 'Motijheel Commercial Area', distance: '5 min drive', icon: <MapPin size={20} /> },
    { name: 'Baitul Mukarram Mosque', distance: '5 min drive', icon: <MapPin size={20} /> },
    { name: 'Shahjalal Airport', distance: '21 min drive', icon: <Plane size={20} /> },
    { name: 'Ramna Park', distance: '10 min drive', icon: <MapPin size={20} /> }
  ]

  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 mb-6">We're here to help make your stay perfect</p>
          <nav className="text-gray-300">
            <Link to="/" className="hover:text-orange">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span>Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center bg-elegant-cream p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Phone</h3>
              <div className="space-y-2 text-gray-700">
                <p>Main: <a href="tel:+8801828183920" className="text-orange hover:underline font-semibold">+880 1828-183920</a></p>
                <p>Restaurant: <a href="tel:01978322743" className="text-orange hover:underline font-semibold">01978 322 743</a></p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <a href="tel:+8801828183920" className="btn-primary mt-4 inline-block">
                CALL NOW
              </a>
            </div>

            {/* Email */}
            <div className="text-center bg-elegant-cream p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Email</h3>
              <div className="space-y-2 text-gray-700">
                <p><a href="mailto:reservation@hotelashrafee.com" className="text-orange hover:underline">reservation@hotelashrafee.com</a></p>
                <p className="text-sm text-gray-600">Response within 24 hours</p>
              </div>
              <a href="mailto:reservation@hotelashrafee.com" className="btn-primary mt-4 inline-block">
                EMAIL US
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center bg-elegant-cream p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-dhaka-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">WhatsApp</h3>
              <div className="space-y-2 text-gray-700">
                <p><a href="https://wa.me/8801828183920" className="text-dhaka-green hover:underline font-semibold">+880 1828-183920</a></p>
                <p className="text-sm text-gray-600">Instant messaging</p>
              </div>
              <a 
                href="https://wa.me/8801828183920?text=Hi,%20I'm%20interested%20in%20booking%20a%20room%20at%20Hotel%20Ashrafee" 
                className="btn-whatsapp mt-4 inline-block"
              >
                CHAT NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit} className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    >
                      {[1,2,3,4].map(n => (
                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                  >
                    <option value="">Select Room Type</option>
                    <option value="standard-single">Standard Single</option>
                    <option value="standard-twin">Standard Twin</option>
                    <option value="standard-couple">Standard Couple</option>
                    <option value="deluxe-single">Deluxe Single</option>
                    <option value="deluxe-twin">Deluxe Twin</option>
                    <option value="deluxe-couple">Deluxe Couple</option>
                    <option value="super-deluxe-twin">Super Deluxe Twin</option>
                    <option value="super-deluxe-couple">Super Deluxe Couple</option>
                    <option value="green-deluxe-twin">Green Deluxe Twin</option>
                    <option value="green-deluxe-couple">Green Deluxe Couple</option>
                    <option value="triple-beds">Triple Beds Family</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  SEND INQUIRY
                </button>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Location & Directions</h2>
              
              {/* Google Map */}
              <div className="rounded-lg mb-8 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14609.826956489384!2d90.4123457!3d23.7456789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86144d797b7%3A0xdf08350578b0c0dc!2sHotel%20Ashrafee!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Ashrafee Location"
                ></iframe>
                <div className="bg-navy p-3 text-center">
                  <a
                    href="https://www.google.com/travel/search?ts=CAEaSQopEicyJTB4Mzc1NWI4NjE0NGQ3OTdiNzoweGRmMDgzNTA1NzhiMGMwZGMSHBIUCgcI6Q8QCxgVEgcI6Q8QCxgWGAEyBAgAEAAqBwoFOgNCRFQ&qs=CAEyJkNoZ0kzSUhEeGRlZ2pZVGZBUm9MTDJjdk1YUmtNRGc0ZURjUUFROAJCCQncwLB4BTUI30IJCdzAsHgFNQjf&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange transition-colors text-sm font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <MapPin className="text-orange" size={20} />
                  Hotel Address
                </h3>
                <div className="text-gray-700">
                  <p className="font-semibold">Hotel Ashrafee</p>
                  <p>12 Outer Circular Road, Rajarbagh</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Nearby Landmarks */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
                <h3 className="font-bold text-navy mb-4">Nearby Landmarks</h3>
                <div className="space-y-3">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-orange">{landmark.icon}</div>
                        <span className="text-gray-700">{landmark.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{landmark.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-in/out Times */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Clock className="text-orange" size={20} />
                  Check-in/Check-out Times
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Check-in:</span> 4:00 AM</p>
                  <p><span className="font-medium">Check-out:</span> 12:00 PM (Noon)</p>
                  <p className="text-sm text-gray-600">Late check-out available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Getting Here</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-elegant-cream p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Plane className="text-orange" size={20} />
                From Shahjalal Airport
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Distance: 21 minutes by car</li>
                <li>• Taxi: Available 24/7</li>
                <li>• Ride-sharing: Uber, Pathao available</li>
                <li>• Airport pickup: Available on request</li>
              </ul>
            </div>

            <div className="bg-elegant-cream p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Train className="text-orange" size={20} />
                From Kamlapur Railway Station
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Distance: 2 minutes by car</li>
                <li>• Walking: 5-7 minutes</li>
                <li>• Rickshaw: Readily available</li>
                <li>• Very convenient location</li>
              </ul>
            </div>

            <div className="bg-elegant-cream p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Car className="text-orange" size={20} />
                From BRTC Bus Terminal
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Distance: Walking distance</li>
                <li>• 2-3 minutes on foot</li>
                <li>• Perfect for bus travelers</li>
                <li>• Easy luggage transport</li>
              </ul>
            </div>

            <div className="bg-elegant-cream p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Car className="text-orange" size={20} />
                Parking Information
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Free self-parking available</li>
                <li>• First-come, first-served basis</li>
                <li>• Secure parking area</li>
                <li>• 24-hour access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Contact