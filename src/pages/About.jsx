import { Award, MapPin, Users, Clock, Shield, Heart, Utensils, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            34 Years of Dhaka Hospitality
          </h1>
          <nav className="text-gray-300">
            <Link to="/" className="hover:text-orange">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span>About</span>
          </nav>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Historical Image */}
            <div className="aspect-w-16 aspect-h-12">
              <div className="w-full h-80 bg-elegant-cream rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Historical Hotel Photo (1990s)</span>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">
                Since <span className="text-heritage-gold">1990</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hotel Ashrafee began its journey in 1990 with a simple vision: to provide comfortable, 
                affordable accommodation in the heart of Dhaka while maintaining the highest standards 
                of hospitality. What started as a modest establishment has grown into one of Rajarbagh's 
                most trusted 3-star hotels.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Over three decades, we've welcomed over 30,000 guests from around the world, 
                building a reputation for reliability, comfort, and genuine Bangladeshi hospitality. 
                Our 70% return guest rate speaks to the lasting relationships we build with every visitor.
              </p>

              {/* Timeline */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-heritage-gold rounded-full mr-4"></div>
                  <div>
                    <span className="font-semibold text-navy">1990:</span>
                    <span className="text-gray-700 ml-2">Hotel founded in Rajarbagh</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-heritage-gold rounded-full mr-4"></div>
                  <div>
                    <span className="font-semibold text-navy">2000:</span>
                    <span className="text-gray-700 ml-2">Aahelee Restaurant expansion</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-heritage-gold rounded-full mr-4"></div>
                  <div>
                    <span className="font-semibold text-navy">2010:</span>
                    <span className="text-gray-700 ml-2">Major renovation & modernization</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-heritage-gold rounded-full mr-4"></div>
                  <div>
                    <span className="font-semibold text-navy">2020:</span>
                    <span className="text-gray-700 ml-2">Sustainability initiatives launched</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-heritage-gold rounded-full mr-4"></div>
                  <div>
                    <span className="font-semibold text-navy">2024:</span>
                    <span className="text-gray-700 ml-2">34 years of excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ashrafee Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Ashrafee</h2>
            <p className="text-xl text-gray-600">Six key reasons that set us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heritage & Trust */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Award className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Heritage & Trust</h3>
              <p className="text-gray-700">
                34 years of consistent service and a 70% return guest rate demonstrate 
                our commitment to excellence and reliability.
              </p>
            </div>

            {/* Strategic Location */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <MapPin className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Strategic Location</h3>
              <p className="text-gray-700">
                Prime Rajarbagh location with 2-minute access to Kamlapur Railway Station 
                and walking distance to major business districts.
              </p>
            </div>

            {/* Culinary Excellence */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Utensils className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Culinary Excellence</h3>
              <p className="text-gray-700">
                Aahelee Restaurant offers 400+ authentic dishes across Thai, Chinese, 
                Bangladeshi, and Indian cuisines.
              </p>
            </div>

            {/* Value for Money */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Award className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Value for Money</h3>
              <p className="text-gray-700">
                3-star comfort at honest prices, with rooms starting from BDT 2,700. 
                Corporate and group discounts available.
              </p>
            </div>

            {/* Local Authenticity */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Local Authenticity</h3>
              <p className="text-gray-700">
                Experience genuine Bangladeshi hospitality while enjoying modern 
                amenities and international standards.
              </p>
            </div>

            {/* Modern Comfort */}
            <div className="bg-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="text-heritage-gold mb-4" size={48} />
              <h3 className="text-xl font-bold text-navy mb-4">Modern Comfort</h3>
              <p className="text-gray-700">
                Updated facilities including free WiFi, smart TVs, air conditioning, 
                and 24/7 room service for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-xl text-gray-300">Four guarantees we make to every guest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Comfort Guarantee */}
            <div className="text-center">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Comfort Guarantee</h3>
              <p className="text-gray-300 text-sm">
                Clean, comfortable rooms with quality bedding and climate control 
                for a restful stay every time.
              </p>
            </div>

            {/* Service Recovery Promise */}
            <div className="text-center">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Service Recovery Promise</h3>
              <p className="text-gray-300 text-sm">
                If anything doesn't meet your expectations, we'll make it right 
                immediately with our 24/7 responsive service.
              </p>
            </div>

            {/* Satisfaction Commitment */}
            <div className="text-center">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Satisfaction Commitment</h3>
              <p className="text-gray-300 text-sm">
                Your happiness is our success. We're not satisfied until you are, 
                which is why 70% of our guests return.
              </p>
            </div>

            {/* Responsive Promise */}
            <div className="text-center">
              <div className="bg-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Responsive Promise</h3>
              <p className="text-gray-300 text-sm">
                Quick response to all requests, concerns, and needs. 
                Our team is always ready to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Certifications and achievements that validate our commitment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Star className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">TripAdvisor Rating</h3>
              <p className="text-gray-600">4.0/5 from verified guests</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Award className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">Government Registration</h3>
              <p className="text-gray-600">Licensed tourism establishment</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Shield className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">Fire Safety Compliance</h3>
              <p className="text-gray-600">Certified safety protocols</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Utensils className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">Food Safety Certification</h3>
              <p className="text-gray-600">HACCP compliant kitchen</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Shield className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">COVID-19 Protocols</h3>
              <p className="text-gray-600">Enhanced safety measures</p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg text-center">
              <Award className="text-heritage-gold mx-auto mb-4" size={32} />
              <h3 className="font-bold text-navy mb-2">Payment Security</h3>
              <p className="text-gray-600">Secure payment processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About