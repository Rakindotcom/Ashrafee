import { useState } from 'react'
import { Wifi, Tv, Snowflake, Coffee, Car, Users, Bed, Eye, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const roomsData = [
    // Standard Rooms
    {
      id: 'standard-single',
      name: 'Standard Single',
      category: 'standard',
      priceBDT: 2700,
      priceUSD: 23,
      capacity: 1,
      bedType: 'Single bed',
      size: '250 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Private bathroom', 'Daily housekeeping'
      ],
      description: 'Perfect for solo travelers seeking comfort and value in the heart of Dhaka.',
      idealFor: ['Business travelers', 'Solo tourists', 'Budget-conscious guests']
    },
    {
      id: 'standard-twin',
      name: 'Standard Twin',
      category: 'standard',
      priceBDT: 3500,
      priceUSD: 29,
      capacity: 2,
      bedType: 'Twin beds',
      size: '280 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Private bathroom', 'Daily housekeeping'
      ],
      description: 'Comfortable twin bed accommodation ideal for friends or colleagues traveling together.',
      idealFor: ['Friends', 'Colleagues', 'Family with children']
    },
    {
      id: 'standard-couple',
      name: 'Standard Couple',
      category: 'standard',
      priceBDT: 3500,
      priceUSD: 29,
      capacity: 2,
      bedType: 'Double bed',
      size: '280 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Private bathroom', 'Daily housekeeping'
      ],
      description: 'Cozy double bed room perfect for couples seeking affordable comfort.',
      idealFor: ['Couples', 'Honeymooners', 'Weekend getaways']
    },
    // Deluxe Rooms
    {
      id: 'deluxe-single',
      name: 'Deluxe Single',
      category: 'deluxe',
      priceBDT: 3000,
      priceUSD: 25,
      capacity: 1,
      bedType: 'Queen bed',
      size: '300 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Enhanced single accommodation with premium amenities and extra space.',
      idealFor: ['Business executives', 'Extended stays', 'Comfort seekers']
    },
    {
      id: 'deluxe-twin',
      name: 'Deluxe Twin',
      category: 'deluxe',
      priceBDT: 3800,
      priceUSD: 32,
      capacity: 2,
      bedType: 'Twin beds',
      size: '320 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Spacious twin room with enhanced amenities for a superior stay experience.',
      idealFor: ['Business partners', 'Friends', 'Family travelers']
    },
    {
      id: 'deluxe-couple',
      name: 'Deluxe Couple',
      category: 'deluxe',
      priceBDT: 3800,
      priceUSD: 32,
      capacity: 2,
      bedType: 'King bed',
      size: '320 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Elegant king bed room with premium amenities for discerning couples.',
      idealFor: ['Couples', 'Anniversary celebrations', 'Special occasions']
    },
    // Super Deluxe Rooms
    {
      id: 'super-deluxe-twin',
      name: 'Super Deluxe Twin',
      category: 'super-deluxe',
      priceBDT: 4200,
      priceUSD: 35,
      capacity: 2,
      bedType: 'Twin beds',
      size: '350 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Seating area', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Luxurious twin accommodation with separate seating area and premium finishes.',
      idealFor: ['VIP guests', 'Extended business stays', 'Comfort enthusiasts']
    },
    {
      id: 'super-deluxe-couple',
      name: 'Super Deluxe Couple',
      category: 'super-deluxe',
      priceBDT: 4200,
      priceUSD: 35,
      capacity: 2,
      bedType: 'King bed',
      size: '350 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Seating area', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Premium king bed suite with separate seating area for ultimate comfort.',
      idealFor: ['Luxury seekers', 'Special celebrations', 'VIP couples']
    },
    // Green Deluxe Rooms
    {
      id: 'green-deluxe-twin',
      name: 'Green Deluxe Twin',
      category: 'green-deluxe',
      priceBDT: 4500,
      priceUSD: 38,
      capacity: 2,
      bedType: 'Twin beds',
      size: '380 sq ft',
      view: 'Garden view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Balcony', 'Garden view', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Our finest twin accommodation with private balcony and serene garden views.',
      idealFor: ['Nature lovers', 'Peaceful retreats', 'Premium travelers']
    },
    {
      id: 'green-deluxe-couple',
      name: 'Green Deluxe Couple',
      category: 'green-deluxe',
      priceBDT: 4500,
      priceUSD: 38,
      capacity: 2,
      bedType: 'King bed',
      size: '380 sq ft',
      view: 'Garden view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Balcony', 'Garden view', 'Premium bathroom', 'Daily housekeeping'
      ],
      description: 'Premium king suite with private balcony overlooking peaceful garden areas.',
      idealFor: ['Romantic getaways', 'Honeymoons', 'Luxury couples']
    },
    // Family Room
    {
      id: 'triple-beds',
      name: 'Triple Beds Family Room',
      category: 'family',
      priceBDT: 5800,
      priceUSD: 49,
      capacity: 3,
      bedType: 'Triple beds',
      size: '420 sq ft',
      view: 'City view',
      images: ['/api/placeholder/600/400'],
      amenities: [
        'Free WiFi', 'Smart TV', 'Air conditioning', 'Mini refrigerator',
        'Coffee/tea maker', 'Work desk', 'Extra space', 'Family bathroom', 'Daily housekeeping'
      ],
      description: 'Spacious family room with three beds, perfect for families or groups traveling together.',
      idealFor: ['Families', 'Group travelers', 'Extended stays']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Rooms' },
    { id: 'standard', name: 'Standard' },
    { id: 'deluxe', name: 'Deluxe' },
    { id: 'super-deluxe', name: 'Super Deluxe' },
    { id: 'green-deluxe', name: 'Green Deluxe' },
    { id: 'family', name: 'Family' }
  ]

  const filteredRooms = selectedCategory === 'all' 
    ? roomsData 
    : roomsData.filter(room => room.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comfort in Every Detail
          </h1>
          <nav className="text-gray-300">
            <Link to="/" className="hover:text-orange">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span>Rooms</span>
          </nav>
        </div>
      </section>

      {/* Room Categories Filter */}
      <section className="py-8 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-orange text-white'
                    : 'bg-gray-200 text-navy hover:bg-orange hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Room Comparison Table */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">Room Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">Room Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Bed Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Capacity</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">View</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Price (BDT)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Price (USD)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {roomsData.map((room, index) => (
                  <tr key={room.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}>
                    <td className="border border-gray-300 px-4 py-3 font-medium">{room.name}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">{room.size}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">{room.bedType}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">{room.capacity}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">{room.view}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      {room.priceBDT.toLocaleString()}++
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      ${room.priceUSD}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <button className="btn-primary text-sm px-4 py-2">
                        VIEW DETAILS
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Room Sections */}
      <section className="py-20">
        {filteredRooms.map((room, index) => (
          <div key={room.id} className={`py-16 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-light-gray'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">{room.name} Image</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="aspect-w-4 aspect-h-3">
                        <div className="w-full h-16 bg-gray-200 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-400">{i}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Panel */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-navy mb-4">{room.name}</h3>
                  <div className="text-2xl font-bold text-orange mb-4">
                    From BDT {room.priceBDT.toLocaleString()}++ / USD ${room.priceUSD} per night
                  </div>
                  <p className="text-gray-700 mb-6">{room.description}</p>

                  {/* Perfect For Tags */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.idealFor.map((tag, idx) => (
                        <span key={idx} className="bg-elegant-cream text-navy px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-navy mb-4">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="text-dhaka-green mr-2" size={16} />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="btn-primary flex-1 text-center">
                      BOOK THIS ROOM
                    </Link>
                    <Link to="/contact" className="btn-secondary flex-1 text-center">
                      CHECK AVAILABILITY
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Call to inquire: <a href="tel:+8801828183920" className="text-orange hover:underline">+880 1828-183920</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Room Policies */}
      <section className="py-20 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Room Policies</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: 'Check-in/Check-out Times',
                content: 'Check-in: 4:00 AM | Check-out: 12:00 PM (Noon). Late check-out available upon request.'
              },
              {
                title: 'Cancellation Policy',
                content: 'Free cancellation up to 24 hours before arrival. Late cancellations may incur charges.'
              },
              {
                title: 'Payment Methods',
                content: 'We accept VISA, MasterCard, and bKash (01828183920). Payment required upon check-in.'
              },
              {
                title: 'Additional Charges',
                content: 'All rates subject to 10% Service Charge and 15% VAT. Extra guest charges may apply.'
              },
              {
                title: 'Corporate & Group Rates',
                content: 'Special rates available for corporate bookings and group reservations. Long stay discounts offered.'
              }
            ].map((policy, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-navy mb-2">{policy.title}</h3>
                <p className="text-gray-700">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Comfort?</h2>
          <p className="text-xl text-gray-300 mb-8">Book your perfect room today</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Link to="/contact" className="btn-primary px-8 py-4 text-lg">
              BOOK NOW
            </Link>
            <a 
              href="tel:+8801828183920" 
              className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-navy"
            >
              CALL: +880 1828-183920
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rooms