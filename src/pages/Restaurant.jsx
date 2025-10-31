import { useState } from 'react'
import { Search, Filter, Clock, Phone, Star, Utensils, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('thai')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Featured Best Selling Items
  const featuredItems = [
    { name: 'Aahelee Special Salad', price: 695, description: 'Chicken, Prawn with Mushroom' },
    { name: 'Aahelee Special Soup', price: 695, description: 'Chicken, Prawn, Fish & Mushroom' },
    { name: 'Gai Tod', price: 785, description: 'Fried Spring Chicken' },
    { name: 'Thai Soup', price: 615, description: 'Authentic Thai flavors' },
    { name: 'Chicken Fried Rice', price: 500, description: 'Wok-fried with vegetables' },
    { name: 'Beef Bhoona', price: 465, description: 'Traditional Bangladeshi style' }
  ]

  // Sample menu data (abbreviated for brevity)
  const menuData = {
    thai: {
      appetizers: [
        { code: '0001', name: 'AAHELEE APPETIZER', description: 'Fried Wonthun, Fried Prawn, Spring Roll', price: 595 },
        { code: '0002', name: 'KHANOM PANGNA/GOONG/POO', description: 'Chicken/Prawn/Crab Meat on Toast', price: 465 },
        { code: '0003', name: 'KIEW TOD', description: 'Fried Wonthun with Chicken/Prawn/Crab Meat', price: 400 },
        { code: '0004', name: 'POHPPIA TOD', description: 'Spring Roll with Chicken & Vegetable', price: 450 },
        { code: '0005', name: 'FRIED CHICKEN WINGS', description: 'Crispy chicken wings', price: 500 }
      ],
      salads: [
        { code: '0010', name: 'AAHELEE SPECIAL SALAD', description: 'Chicken, Prawn with Mushroom', price: 695 },
        { code: '0011', name: 'LAAB GAI', description: 'Chicken with onion, Lemon Juice and Other Spices', price: 600 },
        { code: '0012', name: 'YAM THALE', description: 'Mixed Sea Food Salad', price: 505 },
        { code: '0013', name: 'SOMTHUM/THUMMTHANG', description: 'Papaya/Cucumber Salad', price: 375 }
      ],
      soups: [
        { code: '0015', name: 'AAHELEE SPECIAL SOUP', description: 'Chicken, Prawn, Fish & Mushroom', price: 695 },
        { code: '0016', name: 'TOM YAM PLA/GAI/GOONG', description: 'Chicken/Prawn/Fish Thai soup with Mushroom', price: 615 },
        { code: '0017', name: 'TOM KHA THALE', description: 'Sea food soup with Coconut Milk', price: 560 },
        { code: '0018', name: 'TOM YAM THALE', description: 'Sea Food-Clear', price: 485 }
      ],
      rice: [
        { code: '0024', name: 'AAHELEE FRIED RICE', description: 'Chicken, Beef, Prawn, with Basil Leaf', price: 550 },
        { code: '0025', name: 'KHAO PAD', description: 'Fried Rice With Chicken/Prawn/Beef-Vegetable', price: 500 },
        { code: '0026', name: 'KHAD PAD POO', description: 'Thai Fried Rice B/C/P', price: 455 }
      ],
      chicken: [
        { code: '0041', name: 'GAI TOD', description: 'Fried Spring Chicken', price: 785 },
        { code: '0042', name: 'GAI PAD CRAPRAO', description: 'Sliced Chicken with Basil Leaf', price: 595 },
        { code: '0043', name: 'GAI PAD MANAO', description: 'Sliced Chicken with Lemon Sauce', price: 585 }
      ]
    },
    chinese: {
      appetizers: [
        { code: '0077', name: 'FISH CHIPS', description: 'Crispy fish chips', price: 225 },
        { code: '0078', name: 'FRIED WONTHUN', description: 'Golden fried wontons', price: 380 },
        { code: '0079', name: 'EGG VEGETABLE ROLL', description: 'Fresh vegetable spring rolls', price: 320 }
      ],
      soups: [
        { code: '0080', name: 'CHICKEN CORN SOUP-REGULAR', description: 'Clear chicken corn soup', price: 370 },
        { code: '0081', name: 'CHICKEN/PRAWN HOT AND SOUR SOUP', description: 'Spicy and tangy soup', price: 425 },
        { code: '0082', name: 'THAI SOUP', description: 'Chicken, Prawn', price: 510 }
      ],
      chicken: [
        { code: '0087', name: 'FRIED CHICKEN', description: 'Crispy fried chicken', price: 550 },
        { code: '0088', name: 'SZE-CHUAN FRIED CHICKEN', description: 'Spicy Szechuan style', price: 570 },
        { code: '0089', name: 'MASSALLA CHICKEN', description: 'Indian spiced chicken', price: 580 }
      ],
      rice: [
        { code: '0105', name: 'CHINESE FRIED RICE', description: 'Chi./Beef/Prawn', price: 450 },
        { code: '0106', name: 'MASSALLA FRIED RICE', description: 'Spiced fried rice', price: 410 },
        { code: '0107', name: 'SPECIAL FRIED RICE', description: 'House special', price: 500 }
      ]
    },
    bangladeshi: {
      meats: [
        { code: '201', name: 'CHICKEN BHOONA RDS', description: 'Traditional chicken curry with rice, dal, salad', price: 350 },
        { code: '203', name: 'BEEF BHOONA WITH RICE DAL SALAD', description: 'Beef curry complete meal', price: 530 },
        { code: '205', name: 'MUTTON BHOONA RDS', description: 'Mutton curry with sides', price: 530 }
      ],
      biriyani: [
        { code: '209', name: 'BIRIYANI- BEEF/CHICK/MUTTON', description: 'Aromatic rice with meat', price: 565 },
        { code: '214', name: 'KACCI BIRIYANI', description: 'Traditional raw rice biriyani', price: 600 }
      ],
      fish: [
        { code: '224', name: 'HILSHA FISH CURRY/FRY RDS', description: 'National fish of Bangladesh', price: 590 },
        { code: '226', name: 'POMFRET FISH RDS', description: 'Fresh pomfret curry', price: 645 },
        { code: '228', name: 'PRAWN RDS', description: 'Fresh prawn curry', price: 490 }
      ]
    },
    indian: {
      rice: [
        { code: '1101', name: 'ZEERA RICE', description: 'Cumin flavored rice', price: 160 },
        { code: '1102', name: 'ZEERA POLLAU', description: 'Aromatic cumin rice', price: 185 }
      ],
      curry: [
        { code: '1103', name: 'VEGETABLE KUFTA CURRY', description: 'Mixed vegetable balls in curry', price: 185 },
        { code: '1104', name: 'POTATO (ALOO) CURRY', description: 'Spiced potato curry', price: 160 },
        { code: '1106', name: 'DAL MAKHANI', description: 'Creamy black lentils', price: 210 }
      ]
    }
  }

  const cuisines = [
    { id: 'thai', name: 'Thai Cuisine', description: 'Authentic Thai flavors with aromatic herbs and spices' },
    { id: 'chinese', name: 'Chinese Cuisine', description: 'Traditional Chinese dishes with modern presentation' },
    { id: 'bangladeshi', name: 'Bangladeshi Cuisine', description: 'Local favorites and traditional Bengali dishes' },
    { id: 'indian', name: 'Indian Cuisine', description: 'Rich Indian curries and aromatic rice dishes' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aahelee Restaurant</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200">A Culinary Journey Through Asia</p>
          <div className="text-lg">
            Call to reserve: <a href="tel:01978322743" className="text-orange hover:underline font-semibold">01978 322 743</a>
          </div>
          <nav className="text-gray-300 mt-4">
            <Link to="/" className="hover:text-orange">Home</Link> 
            <span className="mx-2">&gt;</span> 
            <span>Restaurant</span>
          </nav>
        </div>
      </section>

      {/* Restaurant Introduction */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Experience Culinary Excellence</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Aahelee Restaurant brings you an extraordinary dining experience with over 400 carefully crafted dishes 
              spanning four distinct Asian cuisines. Our skilled chefs use authentic ingredients and traditional 
              cooking methods to deliver flavors that transport you across Asia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Utensils className="text-navy mx-auto mb-2" size={32} />
                <div className="font-bold text-navy">400+</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <Award className="text-navy mx-auto mb-2" size={32} />
                <div className="font-bold text-navy">4</div>
                <div className="text-gray-600">Cuisines</div>
              </div>
              <div className="text-center">
                <Clock className="text-navy mx-auto mb-2" size={32} />
                <div className="font-bold text-navy">24/7</div>
                <div className="text-gray-600">Room Service</div>
              </div>
              <div className="text-center">
                <Users className="text-navy mx-auto mb-2" size={32} />
                <div className="font-bold text-navy">Expert</div>
                <div className="text-gray-600">Chefs</div>
              </div>
            </div>

            <div className="bg-elegant-cream p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-2">Opening Hours</h3>
              <p className="text-gray-700">Restaurant: 6:00 AM - 11:00 PM | Room Service: 24 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Best Sellers */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Featured Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-navy text-lg">{item.name}</h3>
                  <Star className="text-heritage-gold" size={20} />
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange">BDT {item.price}</span>
                  <button className="btn-primary text-sm px-4 py-2">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Tabs */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Explore Our Cuisines</h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cuisines.map(cuisine => (
              <button
                key={cuisine.id}
                onClick={() => setActiveTab(cuisine.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === cuisine.id
                    ? 'bg-orange text-white'
                    : 'bg-elegant-cream text-navy hover:bg-orange hover:text-white'
                }`}
              >
                {cuisine.name}
              </button>
            ))}
          </div>

          {/* Active Cuisine Content */}
          <div className="max-w-6xl mx-auto">
            {cuisines.map(cuisine => (
              activeTab === cuisine.id && (
                <div key={cuisine.id}>
                  <div className="text-center mb-12">
                    <Utensils className="text-navy mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-navy mb-4">{cuisine.name}</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">{cuisine.description}</p>
                  </div>

                  {/* Menu Categories for Active Cuisine */}
                  <div className="space-y-12">
                    {Object.entries(menuData[cuisine.id] || {}).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xl font-bold text-navy mb-6 capitalize border-b-2 border-orange pb-2">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {items.map((item, index) => (
                            <div key={index} className="bg-elegant-cream p-4 rounded-lg">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-semibold text-navy">{item.name}</h5>
                                <span className="text-sm text-gray-500">#{item.code}</span>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-orange">BDT {item.price}</span>
                                <button className="text-orange hover:text-orange-hover text-sm font-medium">
                                  Add to Order
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Party Packages */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Party Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Chinese Party Menu */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange">Chinese Party Menu</h3>
              <div className="space-y-4">
                {[
                  { name: 'Party Package 1', price: 880, serves: '4-6 people' },
                  { name: 'Party Package 2', price: 890, serves: '4-6 people' },
                  { name: 'Party Package 3', price: 915, serves: '6-8 people' },
                  { name: 'Party Package 4', price: 850, serves: '4-6 people' },
                  { name: 'Party Package 5', price: 965, serves: '6-8 people' },
                  { name: 'Party Package 6', price: 955, serves: '6-8 people' },
                  { name: 'Party Package 7', price: 975, serves: '8-10 people' }
                ].map((pkg, index) => (
                  <div key={index} className="bg-navy-light p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">{pkg.name}</h4>
                        <p className="text-gray-300 text-sm">Serves {pkg.serves}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-orange">BDT {pkg.price}</div>
                        <button className="text-orange hover:text-orange-hover text-sm">Inquire</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bangla Party Menu */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange">Bangla Party Menu</h3>
              <div className="space-y-4">
                {[
                  { name: 'Bangla Package 1', price: 870, serves: '4-6 people' },
                  { name: 'Bangla Package 2', price: 950, serves: '6-8 people' },
                  { name: 'Bangla Package 3', price: 1125, serves: '8-10 people' },
                  { name: 'Bangla Package 4', price: 630, serves: '3-4 people' },
                  { name: 'Bangla Package 5', price: 600, serves: '3-4 people' },
                  { name: 'Bangla Package 6', price: 500, serves: '2-3 people' }
                ].map((pkg, index) => (
                  <div key={index} className="bg-navy-light p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">{pkg.name}</h4>
                        <p className="text-gray-300 text-sm">Serves {pkg.serves}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-orange">BDT {pkg.price}</div>
                        <button className="text-orange hover:text-orange-hover text-sm">Inquire</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Policies */}
      <section className="py-20 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Restaurant Policies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4">Service Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Restaurant: 6:00 AM - 11:00 PM</li>
                <li>• Room Service: 24 Hours</li>
                <li>• Breakfast: 6:00 AM - 10:00 AM</li>
                <li>• Lunch: 12:00 PM - 3:00 PM</li>
                <li>• Dinner: 6:00 PM - 11:00 PM</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4">Reservations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Call: 01978 322 743</li>
                <li>• Advance booking recommended</li>
                <li>• Group bookings welcome</li>
                <li>• Special occasion arrangements</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4">Dietary Accommodations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Vegetarian options available</li>
                <li>• Halal certified kitchen</li>
                <li>• Spice levels customizable</li>
                <li>• Allergy-friendly preparations</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-navy mb-4">Payment Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cash payments accepted</li>
                <li>• VISA & MasterCard</li>
                <li>• bKash: 01828183920</li>
                <li>• Room charges for hotel guests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Taste Asia?</h2>
          <p className="text-xl text-gray-300 mb-8">Reserve your table or order room service now</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="tel:01978322743" 
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2"
            >
              <Phone size={20} />
              CALL TO RESERVE: 01978 322 743
            </a>
            <button className="btn-secondary px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-navy">
              VIEW FULL MENU
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Restaurant