import { useState } from 'react'
import { Wifi, Tv, Snowflake, Coffee, Car, Users, Bed, Eye, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImages, setSelectedImages] = useState({})

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
      images: ['/standardsingle_1.webp', '/standardsingle_2.webp', '/standardsingle_3.webp'],
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
      images: ['/standardtwin_1.webp', '/standardtwin_2.webp', '/standardtwin_3.webp'],
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
      images: ['/standardcouple_1.webp', '/standardcouple_2.webp', '/standardcouple_3.webp'],
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
      images: ['/deluxsingle_1.webp', '/deluxsingle_2.webp', '/deluxsingle_3.webp'],
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
      images: ['/deluxtwin_1.webp', '/deluxtwin_2.webp', '/deluxtwin_3.webp'],
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
      images: ['/deluxcouple_1.webp', '/deluxcouple_2.webp', '/deluxcouple_3.webp'],
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
      images: ['/superdeluxetwin_1.webp', '/superdeluxetwin_2.webp', '/superdeluxetwin_3.webp'],
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
      images: ['/superdeluxecouple_1.webp', '/superdeluxecouple_2.webp', '/superdeluxecouple_3.webp'],
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
      images: ['/greendeluxtwin_1.webp', '/greendeluxtwin_2.webp', '/greendeluxtwin_3.webp'],
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
      images: ['/greendeluxcouple_1.webp', '/greendeluxcouple_2.webp', '/greendeluxcouple_3.webp'],
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
      images: ['/triplebed_1.webp', '/triplebed_2.webp', '/triplebed_3.webp'],
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
      <section className="bg-navy text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Comfort in Every Detail
          </h1>
          <nav className="text-sm md:text-base text-gray-300">
            <Link to="/" className="hover:text-orange">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span>Rooms</span>
          </nav>
        </div>
      </section>

      {/* Room Categories Filter */}
      <section className="py-6 md:py-8 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
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

      {/* Detailed Room Sections */}
      <section className="py-8 md:py-20">
        {filteredRooms.map((room, index) => (
          <div key={room.id} className={`py-8 md:py-16 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-light-gray'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-full" style={{ aspectRatio: '16/9' }}>
                    <img 
                      src={selectedImages[room.id] || room.images[0]} 
                      alt={room.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3 md:mt-4">
                    {room.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="cursor-pointer overflow-hidden rounded"
                        style={{ aspectRatio: '16/9' }}
                        onClick={() => setSelectedImages({...selectedImages, [room.id]: img})}
                      >
                        <img 
                          src={img} 
                          alt={`${room.name} ${i + 1}`}
                          className={`w-full h-full object-cover transition-opacity ${
                            (selectedImages[room.id] || room.images[0]) === img ? 'opacity-100 ring-2 ring-orange' : 'opacity-70 hover:opacity-100'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Panel */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 md:mb-4">{room.name}</h3>
                  <div className="text-xl md:text-2xl font-bold text-orange mb-3 md:mb-4">
                    From BDT {room.priceBDT.toLocaleString()}++ / USD ${room.priceUSD} per night
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">{room.description}</p>

                  {/* Perfect For Tags */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-sm md:text-base font-semibold text-navy mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.idealFor.map((tag, idx) => (
                        <span key={idx} className="bg-elegant-cream text-navy px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-sm md:text-base font-semibold text-navy mb-3 md:mb-4">Amenities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                          <CheckCircle className="text-dhaka-green mr-2 flex-shrink-0" size={16} />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <Link to="/contact" className="btn-primary flex-1 text-center text-sm md:text-base py-3">
                      BOOK THIS ROOM
                    </Link>
                    <Link to="/contact" className="btn-secondary flex-1 text-center text-sm md:text-base py-3">
                      CHECK AVAILABILITY
                    </Link>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4 text-center sm:text-left">
                    Call to inquire: <a href="tel:+8801828183920" className="text-orange hover:underline">+880 1828-183920</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Room Comparison Table */}
      <section className="py-8 md:py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-6 md:mb-8">Room Comparison</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full border-collapse border border-gray-300 min-w-[800px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-base">Room Type</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">Size</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">Bed Type</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">Capacity</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">View</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">Price (BDT)</th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-base">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                {roomsData.map((room, index) => (
                  <tr key={room.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 font-medium text-xs md:text-base">{room.name}</td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">{room.size}</td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">{room.bedType}</td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">{room.capacity}</td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">{room.view}</td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                      {room.priceBDT.toLocaleString()}++
                    </td>
                    <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-xs md:text-sm">
                      ${room.priceUSD}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Room Policies */}
      <section className="py-12 md:py-20 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8 md:mb-12">Room Policies</h2>
          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
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
              <div key={index} className="bg-gray-200 rounded-lg p-4 md:p-6">
                <h3 className="text-sm md:text-base font-bold text-navy mb-2">{policy.title}</h3>
                <p className="text-xs md:text-base text-gray-700">{policy.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Ready to Experience Comfort?</h2>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">Book your perfect room today</p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch md:items-center max-w-2xl mx-auto">
            <Link to="/contact" className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full md:w-auto">
              BOOK NOW
            </Link>
            <a 
              href="tel:+8801828183920" 
              className="btn-secondary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg border-white text-white hover:bg-white hover:text-navy w-full md:w-auto"
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