import { useState } from 'react'
import { Clock, Phone, Star, Utensils, Award, Users, ChefHat, MapPin, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('thai')
  const [selectedPartyMenu, setSelectedPartyMenu] = useState(null)

  // Featured Best Selling Items
  const featuredItems = [
    { name: 'Ashrafee Special Salad', description: 'Chicken, Prawn with Mushroom', category: 'Signature' },
    { name: 'Ashrafee Special Soup', description: 'Chicken, Prawn, Fish & Mushroom', category: 'Signature' },
    { name: 'Gai Tod', description: 'Fried Spring Chicken', category: 'Thai' },
    { name: 'Thai Soup', description: 'Authentic Thai flavors', category: 'Thai' },
    { name: 'Chicken Fried Rice', description: 'Wok-fried with vegetables', category: 'Chinese' },
    { name: 'Beef Bhoona', description: 'Traditional Bangladeshi style', category: 'Bangladeshi' }
  ]

  const menuData = {
    thai: {
      appetizers: [
        { code: '0001', name: 'ASHRAFEE APPETIZER', description: 'Fried Wonthun, Fried Prawn, Spring Roll', price: 595 },
        { code: '0002', name: 'KHANOM PANGNA/GOONG/POO', description: 'Chicken/Prawn/Crab Meat on Toast', price: 465 },
        { code: '0003', name: 'KIEW TOD', description: 'Fried Wonthun with Chicken/Prawn/Crab Meat', price: 400 },
        { code: '0004', name: 'POHPPIA TOD', description: 'Spring Roll with Chicken & Vegetable', price: 450 },
        { code: '0005', name: 'FRIED CHICKEN WINGS', description: 'Crispy chicken wings', price: 500 }
      ],
      salads: [
        { code: '0010', name: 'ASHRAFEE SPECIAL SALAD', description: 'Chicken, Prawn with Mushroom', price: 695 },
        { code: '0011', name: 'LAAB GAI', description: 'Chicken with onion, Lemon Juice and Other Spices', price: 600 },
        { code: '0012', name: 'YAM THALE', description: 'Mixed Sea Food Salad', price: 505 },
        { code: '0013', name: 'SOMTHUM/THUMMTHANG', description: 'Papaya/Cucumber Salad', price: 375 }
      ],
      soups: [
        { code: '0015', name: 'ASHRAFEE SPECIAL SOUP', description: 'Chicken, Prawn, Fish & Mushroom', price: 695 },
        { code: '0016', name: 'TOM YAM PLA/GAI/GOONG', description: 'Chicken/Prawn/Fish Thai soup with Mushroom', price: 615 },
        { code: '0017', name: 'TOM KHA THALE', description: 'Sea food soup with Coconut Milk', price: 560 },
        { code: '0018', name: 'TOM YAM THALE', description: 'Sea Food-Clear', price: 485 }
      ],
      rice: [
        { code: '0024', name: 'ASHRAFEE FRIED RICE', description: 'Chicken, Beef, Prawn, with Basil Leaf', price: 550 },
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
      fish: [
        { code: '259', name: 'MOLA FISH CURRY (Extra)', description: 'Traditional mola fish curry', price: 240 },
        { code: '260', name: 'KASKI FISH RDS', description: 'Kaski fish with rice, dal, salad', price: 300 },
        { code: '261', name: 'KASKI FISH (Extra)', description: 'Kaski fish curry', price: 240 },
        { code: '262', name: 'TOPSHI FISH RDS', description: 'Topshi fish with rice, dal, salad', price: 350 },
        { code: '263', name: 'FISH- ANY (Extra)', description: 'Any fish curry', price: 400 },
        { code: '264', name: 'DRY FISH RDS', description: 'Dry fish with rice, dal, salad', price: 400 },
        { code: '265', name: 'DRY FISH (Extra)', description: 'Dry fish curry', price: 340 },
        { code: '268', name: 'BASA FISH RDS', description: 'Basa fish with rice, dal, salad', price: 400 },
        { code: '269', name: 'BASA FISH (Extra)', description: 'Basa fish curry', price: 340 },
        { code: '272', name: 'SILONG FISH RDS', description: 'Silong fish with rice, dal, salad', price: 550 },
        { code: '273', name: 'SINLONG FISH (Extra)', description: 'Sinlong fish curry', price: 490 },
        { code: '278', name: 'TOPSHI FISH (Extra)', description: 'Topshi fish curry', price: 290 },
        { code: '279', name: 'FISH- ANY RDS', description: 'Any fish with rice, dal, salad', price: 460 }
      ],
      seafood: [
        { code: '270', name: 'KING PRAWN RDS', description: 'King prawn with rice, dal, salad', price: 400 },
        { code: '271', name: 'KING PRAWN (Extra)', description: 'King prawn curry', price: 340 },
        { code: '228', name: 'PRAWN RDS', description: 'Fresh prawn curry', price: 490 }
      ],
      vegetables: [
        { code: '266', name: 'VEGETABLE/POTATO/TOMATO CURRY WITH RDS', description: 'Mixed vegetable curry with rice, dal, salad', price: 270 },
        { code: '267', name: 'VEGETABLE/POTATO/TOMATO CURRY/BHAJEE (Extra)', description: 'Mixed vegetable curry', price: 210 },
        { code: '276', name: 'BHARTA- DAL/POTATO/TOMATO/BRINJAL/EGG', description: 'Traditional bharta', price: 210 },
        { code: '277', name: 'BHARTA (SMALL PORTION)', description: 'Small portion bharta', price: 50 },
        { code: '300', name: 'SHAK- KALMI/LAL/PUI/PALONG RDS', description: 'Leafy vegetables with rice, dal, salad', price: 270 },
        { code: '301', name: 'SHAK (Extra)', description: 'Leafy vegetables', price: 210 },
        { code: '302', name: 'MURIGHONTO RDS', description: 'Fish head curry with rice, dal, salad', price: 300 },
        { code: '303', name: 'MURIGHONTO (Extra)', description: 'Fish head curry', price: 240 }
      ],
      meats: [
        { code: '201', name: 'CHICKEN BHOONA RDS', description: 'Traditional chicken curry with rice, dal, salad', price: 350 },
        { code: '203', name: 'BEEF BHOONA WITH RICE DAL SALAD', description: 'Beef curry complete meal', price: 530 },
        { code: '205', name: 'MUTTON BHOONA RDS', description: 'Mutton curry with sides', price: 530 },
        { code: '719', name: 'BEEF BHOONA WITH CHAPPATI, DAL, SALAD', description: 'Beef curry with chapati', price: 400 },
        { code: '720', name: 'BEEF BHOONA PARATA, DAL, SALAD', description: 'Beef curry with paratha', price: 400 },
        { code: '721', name: 'BEEF BHOONA (Extra)', description: 'Beef curry only', price: 340 },
        { code: '724', name: 'CHK. BHOONA CHAPATI, DAL, SALAD', description: 'Chicken curry with chapati', price: 350 },
        { code: '725', name: 'CHK. BHOONA PARATA, DAL, SALAD', description: 'Chicken curry with paratha', price: 350 },
        { code: '726', name: 'MUTTON BHOONA PARATA, DAL, SALAD', description: 'Mutton curry with paratha', price: 530 },
        { code: '730', name: 'KALA BHOONA- BEEF', description: 'Spicy beef curry', price: 530 },
        { code: '731', name: 'KALA BHOONA- EXTRA', description: 'Spicy beef curry only', price: 470 },
        { code: '732', name: 'MUTTON DAL WITH RDS', description: 'Mutton with lentils and rice', price: 600 },
        { code: '733', name: 'MUTTON DEL- EXTRA', description: 'Mutton with lentils', price: 540 }
      ],
      biriyani: [
        { code: '209', name: 'BIRIYANI- BEEF/CHICK/MUTTON', description: 'Aromatic rice with meat', price: 565 },
        { code: '214', name: 'KACCI BIRIYANI', description: 'Traditional raw rice biriyani', price: 600 }
      ]
    },
    breakfast: {
      bread: [
        { code: '701', name: 'PARATA (1 Order)', description: 'Traditional flatbread', price: 65 },
        { code: '702', name: 'PARATA (1 PC)', description: 'Single paratha', price: 35 },
        { code: '703', name: 'CHAPATI (1 ORD.)', description: 'Whole wheat flatbread order', price: 65 },
        { code: '704', name: 'CHAPATI (1 PCS)', description: 'Single chapati', price: 35 },
        { code: '715', name: 'TOAST/BREAD', description: 'Toasted bread', price: 60 },
        { code: '815', name: 'CASUAL NUN RUTI', description: 'Plain naan', price: 60 },
        { code: '816', name: 'BUTTER NUN RUTI', description: 'Butter naan', price: 80 },
        { code: '817', name: 'GARLIC NUN RUTI', description: 'Garlic naan', price: 100 }
      ],
      eggs: [
        { code: '707', name: 'EGG ANY STYLE 1 ORD.', description: 'Eggs prepared any style', price: 110 },
        { code: '708', name: 'EGG ANY STYLE 1 PC', description: 'Single egg any style', price: 50 },
        { code: '714', name: 'OMMLETTE WITH VEG. SALAD', description: 'Omelette with vegetable salad', price: 120 },
        { code: '718', name: 'OMLETTE WITH CHAPPATI/SALAD', description: 'Omelette with chapati and salad', price: 270 }
      ],
      sets: [
        { code: '705', name: 'BHAJEE (Breakfast)', description: 'Vegetable curry for breakfast', price: 100 },
        { code: '706', name: 'DAL (Breakfast)', description: 'Lentil curry for breakfast', price: 100 },
        { code: '709', name: 'BUFFET BREAKFAST', description: 'Complete breakfast buffet', price: 300 },
        { code: '710', name: 'IFTER', description: 'Iftar meal', price: 350 },
        { code: '716', name: 'VEG./DAL BHOONA/BHAJEE WITH CHAPATI, SALAD', description: 'Vegetable curry with chapati', price: 270 },
        { code: '717', name: 'VEG./DAL BHOONA/BHAJEE WITH PARATA, SALAD', description: 'Vegetable curry with paratha', price: 270 },
        { code: '800', name: 'QC BREAKFAST', description: 'Quick breakfast', price: 80 }
      ],
      special: [
        { code: '711', name: 'HALIM (Big)', description: 'Large portion halim', price: 700 },
        { code: '712', name: 'HALIM (Medium)', description: 'Medium portion halim', price: 400 },
        { code: '713', name: 'HALIM (Small)', description: 'Small portion halim', price: 150 },
        { code: '728', name: 'FIRNI', description: 'Traditional rice pudding', price: 50 },
        { code: '729', name: 'JORDHA', description: 'Sweet dessert', price: 50 },
        { code: '799', name: 'SUJI/SEMAI', description: 'Semolina/vermicelli', price: 785 },
        { code: '727', name: 'BANANA 1 PC', description: 'Fresh banana', price: 30 }
      ]
    },
    snacks: {
      sandwiches: [
        { code: '801', name: 'CHICKEN SANDWICH', description: 'Grilled chicken sandwich', price: 215 },
        { code: '802', name: 'CLUB SANDWICH', description: 'Multi-layer club sandwich', price: 260 },
        { code: '822', name: 'VEGETABLE SANDWICH', description: 'Fresh vegetable sandwich', price: 150 },
        { code: '823', name: 'EGG & VEGETABLE SANDWICH', description: 'Egg and vegetable sandwich', price: 150 },
        { code: '824', name: 'BEEF SANDWICH', description: 'Beef sandwich', price: 200 }
      ],
      fried: [
        { code: '804', name: 'CHICKEN PAKURA', description: 'Spiced chicken fritters', price: 250 },
        { code: '805', name: 'VEGETABLE PAKURA', description: 'Mixed vegetable fritters', price: 140 },
        { code: '806', name: 'CHICKEN CUTLET', description: 'Breaded chicken cutlet', price: 400 },
        { code: '807', name: 'VEG. CUTLET- 3 PCS', description: 'Vegetable cutlets', price: 210 },
        { code: '808', name: 'FRENCH FRIED', description: 'French fries', price: 120 },
        { code: '818', name: 'DAL PURI', description: 'Lentil stuffed bread', price: 20 },
        { code: '819', name: 'SINGARA', description: 'Triangular pastry', price: 25 }
      ],
      grilled: [
        { code: '812', name: 'CHICKEN GRILL- WHOLE', description: 'Whole grilled chicken', price: 800 },
        { code: '813', name: 'CHICKEN GRILL- HALF', description: 'Half grilled chicken', price: 400 },
        { code: '814', name: 'CHICKEN GRILL- QUARTER', description: 'Quarter grilled chicken', price: 200 }
      ],
      others: [
        { code: '803', name: 'CHICKEN MUGLAI PARATA', description: 'Chicken stuffed paratha', price: 215 },
        { code: '809', name: 'BOMBAI TOAST', description: 'Bombay style toast', price: 130 },
        { code: '810', name: 'TOAST BUTTER JAM', description: 'Toast with butter and jam', price: 110 },
        { code: '811', name: 'TOAST/BREAD', description: 'Plain toast', price: 60 },
        { code: '820', name: 'PLAIN POLLAU', description: 'Plain pilaf rice', price: 150 },
        { code: '821', name: 'SP. MUGLAI PARATA', description: 'Special Mughlai paratha', price: 260 }
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
    },
    beverages: {
      water: [
        { code: '0183', name: 'M. WATER 500 ML', description: 'Mineral water 500ml bottle', price: 25 },
        { code: '0184', name: 'M. WATER', description: 'Mineral water regular', price: 20 },
        { code: '0185', name: 'M. WATER 1500 ML', description: 'Mineral water 1.5L bottle', price: 50 }
      ],
      drinks: [
        { code: '0186', name: 'DIET COLA', description: 'Diet cola drink', price: 65 },
        { code: '0119', name: 'SOFT DRINK', description: 'Assorted soft drinks', price: 25 },
        { code: '0120', name: 'FRESH LEMON SODA', description: 'Fresh lemon soda', price: 60 },
        { code: '0122', name: 'FRESH JUICE', description: 'Fresh fruit juice', price: 180 },
        { code: '0123', name: 'MILK SHAKE/BORHANI/ICE CREAM', description: 'Milk shake or borhani', price: 185 },
        { code: '0124', name: 'LUSSI (Salt/Sweet)', description: 'Traditional yogurt drink', price: 145 },
        { code: '0125', name: 'FRESH LIME', description: 'Fresh lime water', price: 50 },
        { code: '0176', name: 'SWEET/SOUR CURD', description: 'Yogurt drink', price: 150 }
      ],
      hot: [
        { code: '0116', name: 'CHINESE TEA (Per Cup)', description: 'Traditional Chinese tea', price: 60 },
        { code: '0117', name: 'TEA', description: 'Regular tea', price: 40 },
        { code: '0118', name: 'COFFEE- GENERAL', description: 'Regular coffee', price: 95 },
        { code: '0177', name: 'COFFEE COLD', description: 'Iced coffee', price: 120 },
        { code: '0178', name: 'HOT/COLD Milk', description: 'Hot or cold milk', price: 90 },
        { code: '0188', name: 'SECIAL TEA', description: 'Special tea blend', price: 70 }
      ]
    },
    desserts: {
      fruits: [
        { code: '0110', name: 'FRESH FRUIT', description: 'Seasonal fresh fruits', price: 150 },
        { code: '0111', name: 'FRESH FRUIT COCKTAIL', description: 'Mixed fruit cocktail', price: 160 },
        { code: '0112', name: 'FRESH FRUIT COCKTAIL WITH ICE CREAM', description: 'Fruit cocktail with ice cream', price: 195 }
      ],
      sweets: [
        { code: '0113', name: 'ICE CREAM', description: 'Assorted ice cream', price: 155 },
        { code: '0114', name: 'ICE CREAM CAKE', description: 'Ice cream cake slice', price: 175 },
        { code: '0115', name: 'CREAM CARAMEL CUSTARD', description: 'Caramel custard dessert', price: 160 }
      ]
    }
  }

  const cuisines = [
    { id: 'thai', name: 'Thai', color: 'bg-red-500' },
    { id: 'chinese', name: 'Chinese', color: 'bg-yellow-500' },
    { id: 'bangladeshi', name: 'Bangladeshi', color: 'bg-green-500' },
    { id: 'indian', name: 'Indian', color: 'bg-orange-500' },
    { id: 'breakfast', name: 'Breakfast', color: 'bg-yellow-600' },
    { id: 'snacks', name: 'Snacks', color: 'bg-purple-500' },
    { id: 'beverages', name: 'Beverages', color: 'bg-blue-500' },
    { id: 'desserts', name: 'Desserts', color: 'bg-pink-500' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurant Service</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-200">Ashrafee</p>
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

      {/* Featured Items - Grid Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Chef's Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredItems.map((item, index) => (
              <div key={index} className="bg-navy rounded-xl p-4 border border-navy-light shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-orange text-white text-xs px-2 py-1 rounded-full font-medium">{item.category}</span>
                  <Star className="text-orange" size={16} fill="currentColor" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.name}</h3>
                <p className="text-gray-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Highlights Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">Food Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                image: '/AshrafeeSpecialSalad.JPG',
                name: 'Ashrafee Special Salad',
                comment: 'Our signature salad with fresh chicken, prawns and mushrooms'
              },
              {
                image: '/AshrafeeSpecialSoup.JPG',
                name: 'Ashrafee Special Soup',
                comment: 'Rich and flavorful soup with chicken, prawn, fish & mushroom'
              },
              {
                image: '/AshrafeeSpecialRice.JPG',
                name: 'Ashrafee Special Rice',
                comment: 'Aromatic fried rice with mixed proteins and basil'
              },
              {
                image: '/FriedSpringChicken.JPG',
                name: 'Fried Spring Chicken',
                comment: 'Crispy golden fried chicken, perfectly seasoned'
              },
              {
                image: '/ThaiSoup.JPG',
                name: 'Thai Soup',
                comment: 'Authentic Thai flavors with aromatic herbs and spices'
              },
              {
                image: '/ChowMein.JPG',
                name: 'Chow Mein',
                comment: 'Stir-fried noodles with vegetables and your choice of protein'
              },
              {
                image: '/MasalaChicken.JPG',
                name: 'Masala Chicken',
                comment: 'Spiced chicken cooked in traditional Indian masala'
              },
              {
                image: '/FriedChicken.JPG',
                name: 'Fried Chicken',
                comment: 'Crispy fried chicken with perfect blend of spices'
              },
              {
                image: '/ChickenSandwich.JPG',
                name: 'Chicken Sandwich',
                comment: 'Grilled chicken sandwich with fresh vegetables'
              },
              {
                image: '/ClubSandwich.JPG',
                name: 'Club Sandwich',
                comment: 'Multi-layered sandwich with premium ingredients'
              },
              {
                image: '/FrenchFries.JPG',
                name: 'French Fries',
                comment: 'Golden crispy fries, perfect as a side or snack'
              },
              {
                image: '/ChickenCornSoup.JPG',
                name: 'Chicken Corn Soup',
                comment: 'Hearty soup with tender chicken and sweet corn'
              },
              {
                image: '/ChickenwithVegetable.JPG',
                name: 'Chicken with Vegetable',
                comment: 'Stir-fried chicken with fresh seasonal vegetables'
              },
              {
                image: '/FriedSpringRoll.JPG',
                name: 'Fried Spring Roll',
                comment: 'Crispy spring rolls filled with vegetables and chicken'
              },
              {
                image: '/FriedWonton.JPG',
                name: 'Fried Wonton',
                comment: 'Golden fried wontons with savory filling'
              },
              {
                image: '/Bread.JPG',
                name: 'Fresh Bread',
                comment: 'Freshly baked bread, perfect with any meal'
              },
              {
                image: '/Cake.JPG',
                name: 'Dessert Cake',
                comment: 'Delicious homemade cake for the perfect ending'
              },
              {
                image: '/Baked Chicken Roll.jpeg',
                name: 'Baked Chicken Roll',
                comment: 'Tender baked chicken roll with herbs and spices'
              },
              {
                image: '/Mini Pizza.jpeg',
                name: 'Mini Pizza',
                comment: 'Personal-sized pizza with fresh toppings'
              },
              {
                image: '/Sliced Savory Roll.jpeg',
                name: 'Sliced Savory Roll',
                comment: 'Savory roll sliced and ready to enjoy'
              },
              {
                image: '/Combo - 1.jpeg',
                name: 'Combo Meal 1',
                comment: 'Complete meal combo with rice, curry and sides'
              },
              {
                image: '/Combo - 2.jpeg',
                name: 'Combo Meal 2',
                comment: 'Delicious combination of main course with accompaniments'
              },
              {
                image: '/Combo - 3.jpeg',
                name: 'Combo Meal 3',
                comment: 'Hearty combo meal perfect for sharing'
              },
              {
                image: '/Combo - 4.jpeg',
                name: 'Combo Meal 4',
                comment: 'Premium combo with variety of dishes and flavors'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section - Redesigned */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy mb-2">Our Menu</h2>
            <p className="text-gray-600">Authentic flavors from across Asia</p>
          </div>

          {/* Cuisine Tabs - Modern Design */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cuisines.map(cuisine => (
              <button
                key={cuisine.id}
                onClick={() => setActiveTab(cuisine.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${activeTab === cuisine.id
                  ? 'bg-orange text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-orange/10 border border-gray-200'
                  }`}
              >
                <span>{cuisine.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Content - Table Style */}
          <div className="max-w-6xl mx-auto">
            {cuisines.map(cuisine => (
              activeTab === cuisine.id && (
                <div key={cuisine.id} className="space-y-8">
                  {Object.entries(menuData[cuisine.id] || {}).map(([category, items]) => (
                    <div key={category} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="bg-linear-to-r from-navy to-navy-darker text-white px-6 py-4">
                        <h3 className="text-xl font-bold capitalize flex items-center gap-2">
                          <ChefHat size={20} />
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {items.map((item, index) => (
                          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <h4 className="font-semibold text-navy text-lg">{item.name}</h4>
                                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">#{item.code}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-xl font-bold text-orange">৳{item.price}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Party Packages - Grid Layout */}
      {/* Party Menu Packages - Table Style */}
      <section className="py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Party Menu Packages</h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Chinese Party Menu */}
            <div className="bg-linear-to-r from-red-50 to-red-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-red-800">Chinese Party Menu</h3>
                <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  7 Packages Available
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Package Code</th>
                      <th className="px-6 py-4 text-left font-semibold">Package Name</th>
                      <th className="px-6 py-4 text-right font-semibold">Price (BDT)</th>
                      <th className="px-6 py-4 text-center font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { code: '0133', name: 'PARTY- 1 CHINESE', price: '880.00', menuId: 'chinese-1' },
                      { code: '0134', name: 'PARTY- 2 CHINESE', price: '890.00', menuId: 'chinese-2' },
                      { code: '0135', name: 'PARTY- 3 CHINESE', price: '915.00', menuId: 'chinese-3' },
                      { code: '0136', name: 'PARTY- 4 CHINESE', price: '850.00', menuId: 'chinese-4' },
                      { code: '0137', name: 'PARTY- 5 CHINESE', price: '965.00', menuId: 'chinese-5' },
                      { code: '0138', name: 'PARTY- 6 CHINESE', price: '955.00', menuId: 'chinese-6' },
                      { code: '0139', name: 'PARTY- 7 CHINESE', price: '975.00', menuId: 'chinese-7' }
                    ].map((pkg, index) => (
                      <tr key={index} className="hover:bg-red-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-mono text-gray-600">#{pkg.code}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{pkg.name}</td>
                        <td className="px-6 py-4 text-right font-bold text-red-600 text-lg">৳{pkg.price}</td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedPartyMenu(pkg.menuId)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  { code: '0133', name: 'PARTY- 1 CHINESE', price: '880.00', menuId: 'chinese-1' },
                  { code: '0134', name: 'PARTY- 2 CHINESE', price: '890.00', menuId: 'chinese-2' },
                  { code: '0135', name: 'PARTY- 3 CHINESE', price: '915.00', menuId: 'chinese-3' },
                  { code: '0136', name: 'PARTY- 4 CHINESE', price: '850.00', menuId: 'chinese-4' },
                  { code: '0137', name: 'PARTY- 5 CHINESE', price: '965.00', menuId: 'chinese-5' },
                  { code: '0138', name: 'PARTY- 6 CHINESE', price: '955.00', menuId: 'chinese-6' },
                  { code: '0139', name: 'PARTY- 7 CHINESE', price: '975.00', menuId: 'chinese-7' }
                ].map((pkg, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-red-100">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs text-red-500 font-mono bg-red-50 px-2 py-0.5 rounded">#{pkg.code}</span>
                        <h4 className="font-bold text-gray-800 text-sm mt-1">{pkg.name}</h4>
                      </div>
                      <div className="text-red-700 font-bold whitespace-nowrap ml-2">
                        ৳{pkg.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPartyMenu(pkg.menuId)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bangla Party Menu */}
            <div className="bg-linear-to-r from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-green-800">Bangla Party Menu</h3>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  6 Packages Available
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Package Code</th>
                      <th className="px-6 py-4 text-left font-semibold">Package Name</th>
                      <th className="px-6 py-4 text-right font-semibold">Price (BDT)</th>
                      <th className="px-6 py-4 text-center font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { code: '666', name: 'PARTY- 1 BANGLA', price: '870.00', menuId: 'bangla-1' },
                      { code: '667', name: 'PARTY- 2 BANGLA', price: '950.00', menuId: 'bangla-2' },
                      { code: '668', name: 'PARTY- 3 BANGLA', price: '1,125.00', menuId: 'bangla-3' },
                      { code: '669', name: 'PARTY- 4 BANGLA', price: '630.00', menuId: 'bangla-4' },
                      { code: '670', name: 'PARTY- 5 BANGLA', price: '600.00', menuId: 'bangla-5' },
                      { code: '671', name: 'PARTY- 6 BANGLA', price: '500.00', menuId: 'bangla-6' }
                    ].map((pkg, index) => (
                      <tr key={index} className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-mono text-gray-600">#{pkg.code}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{pkg.name}</td>
                        <td className="px-6 py-4 text-right font-bold text-green-600 text-lg">৳{pkg.price}</td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedPartyMenu(pkg.menuId)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  { code: '666', name: 'PARTY- 1 BANGLA', price: '870.00', menuId: 'bangla-1' },
                  { code: '667', name: 'PARTY- 2 BANGLA', price: '950.00', menuId: 'bangla-2' },
                  { code: '668', name: 'PARTY- 3 BANGLA', price: '1,125.00', menuId: 'bangla-3' },
                  { code: '669', name: 'PARTY- 4 BANGLA', price: '630.00', menuId: 'bangla-4' },
                  { code: '670', name: 'PARTY- 5 BANGLA', price: '600.00', menuId: 'bangla-5' },
                  { code: '671', name: 'PARTY- 6 BANGLA', price: '500.00', menuId: 'bangla-6' }
                ].map((pkg, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-green-100">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs text-green-600 font-mono bg-green-50 px-2 py-0.5 rounded">#{pkg.code}</span>
                        <h4 className="font-bold text-gray-800 text-sm mt-1">{pkg.name}</h4>
                      </div>
                      <div className="text-green-700 font-bold whitespace-nowrap ml-2">
                        ৳{pkg.price}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPartyMenu(pkg.menuId)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-all"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-linear-to-r from-navy to-navy-darker text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Order a Party Package?</h3>
              <p className="text-lg mb-6 opacity-90">Contact us to customize your party menu and make reservations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:01978322743"
                  className="bg-orange hover:bg-orange-hover text-white px-8 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call: 01978 322 743
                </a>
                <div className="text-orange font-semibold">
                  Available for advance booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Policies */}
      <section className="py-12 bg-elegant-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy text-center mb-8">Restaurant Policies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-navy mb-3">Service Hours</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Restaurant: 6:00 AM - 11:00 PM</li>
                <li>• Room Service: 24 Hours</li>
                <li>• Breakfast: 6:00 AM - 10:00 AM</li>
                <li>• Lunch: 12:00 PM - 3:00 PM</li>
                <li>• Dinner: 6:00 PM - 11:00 PM</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-navy mb-3">Reservations</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Call: 01978 322 743</li>
                <li>• Advance booking recommended</li>
                <li>• Group bookings welcome</li>
                <li>• Special occasion arrangements</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-navy mb-3">Dietary Accommodations</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Vegetarian options available</li>
                <li>• Hygiene kitchen</li>
                <li>• Spice levels customizable</li>
              </ul>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold text-navy mb-3">Payment Methods</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Cash payments accepted</li>
                <li>• VISA & MasterCard</li>
                <li>• bKash: 01828183920</li>
                <li>• Room charges for hotel guests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Delivery Box */}
      <section className="py-12 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-orange text-white rounded-2xl p-8 text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">Home Delivery Available</h2>
            <p className="text-lg mb-6">Enjoy our delicious cuisine in the comfort of your home</p>
            <a
              href="tel:01978322743"
              className="bg-white text-orange px-6 py-3 text-base font-bold rounded-full hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <Phone size={18} />
              CALL TO ORDER: 01978 322 743
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Taste?</h2>
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

      {/* Party Menu Details Modal */}
      {selectedPartyMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedPartyMenu(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {selectedPartyMenu === 'bangla-1' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-01</h2>
                  <p className="text-2xl font-bold text-green-600 mb-6">৳870</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Plain Pollaw</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Chicken Roast</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Beef Rezalla</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zali kabab-(Chicken/Beef)</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Vegetable</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zarda/Firni</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Borhani/Soft Drink</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> M. Water-500 ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'bangla-2' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-02</h2>
                  <p className="text-2xl font-bold text-green-600 mb-6">৳950</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Plain Pollaw</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Chicken Roast</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Mutton Rezalla</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zali kabab-(Chicken/Beef)</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Vegetable</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zarda/Firni</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Borhani/Soft Drink</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> M. Water-500 ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'bangla-3' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-03</h2>
                  <p className="text-2xl font-bold text-green-600 mb-6">৳1,125</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Mutton Kachchi Biriyani</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Chicken Roast</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zali kabab-(Chicken/Beef)</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zarda/Firni</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Borhani/Soft Drink</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> M. Water-500 ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'bangla-4' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-04</h2>
                  <p className="text-2xl font-bold text-green-600 mb-6">৳630</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Beef Tehari</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zali kabab-(Chicken/Beef)</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Soft Drink/M Water-500ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'bangla-5' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-05</h2>
                  <p className="text-2xl font-bold text-green-600 mb-2">৳600</p>
                  <p className="text-sm text-green-600 mb-6">(Per-Plate)</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Bhuna Khichury</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Chicken/Beef Bhuna</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Soft Drink/M Water-500 ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'bangla-6' && (
                <div>
                  <h2 className="text-3xl font-bold text-green-700 mb-2">Party Menu-06</h2>
                  <p className="text-2xl font-bold text-green-600 mb-2">৳500</p>
                  <p className="text-sm text-green-600 mb-6">(Per-Plate)</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Morog Pollaw</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Zali kabab-(Chicken/Beef)</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Brown Egg</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Green Salad</li>
                    <li className="flex items-start"><span className="text-green-600 mr-2 font-bold">•</span> Soft Drink/M Water-500 ml</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-1' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-1</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳880</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Wonthun</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Corn Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Fried Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Massalla Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-2' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-2</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳890</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Wonthun</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Thai Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Egg Fried Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken with Chilli Onion</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Green Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-3' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-3</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳915</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Wonthun</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Thai Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Beef Fried Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Beef with Chilli Onion</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Prawn with Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-4' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-4</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳850</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Wonthun</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Sze-Chuan Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Special Fried Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Sze-Chuan Fried Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Shreded Beef</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Green Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-5' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-5</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳965</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Aahelee Appetizer</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Ash. Special Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Ash. Special Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Spring Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> S/S Prawn</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Special Mixed Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-6' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-6</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳955</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Aahelee Special Salad</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken/Prawn Thai Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Fried Rice-T</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Spring Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Sizzling</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Prawn With Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              {selectedPartyMenu === 'chinese-7' && (
                <div>
                  <h2 className="text-3xl font-bold text-red-700 mb-2">Party Menu-7</h2>
                  <p className="text-2xl font-bold text-red-600 mb-6">৳975</p>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fish Finger</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Special Corn Soup</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Chicken Fried Rice</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Fried Spring Chicken</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Sliced Chicken with Lemon Souce</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Green Vegetable</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> Soft Drinks</li>
                    <li className="flex items-start"><span className="text-red-600 mr-2 font-bold">•</span> M Water 500 ML</li>
                  </ul>
                </div>
              )}

              <div className="mt-8 bg-navy text-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Book This Party Menu</h3>
                <p className="mb-4">Contact us for advance booking and customization</p>
                <a
                  href="tel:01978322743"
                  className="bg-orange hover:bg-orange-hover text-white px-6 py-3 rounded-full font-bold transition-all inline-flex items-center gap-2"
                >
                  <Phone size={18} />
                  Call: 01978 322 743
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Restaurant