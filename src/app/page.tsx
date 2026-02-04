'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { 
  Home, 
  Search, 
  MapPin, 
  Star, 
  Clock, 
  ShoppingCart, 
  ChevronRight,
  Filter,
  CheckCircle2,
  ChefHat,
  Utensils,
  Phone,
  User,
  TrendingUp,
  Award,
  Heart,
  Shield,
  Users,
  DollarSign,
  AlertCircle,
  CheckCircle,
  XCircle,
  MoreVertical,
  Download,
  Settings
} from 'lucide-react'

type Dish = {
  id: string
  name: string
  nameHindi: string
  description: string
  price: number
  cuisine: string
  dietaryTags: string[]
  rating: number
  reviews: number
  preparationTime: number
  image: string
  chefId: string
}

type Chef = {
  id: string
  name: string
  rating: number
  reviews: number
  specialty: string[]
  image: string
  distance: number
  verified: boolean
}

type CartItem = {
  dish: Dish
  quantity: number
}

type OrderStatus = 'pending' | 'accepted' | 'cooking' | 'packed' | 'out_for_delivery' | 'delivered'

type PendingChef = {
  id: string
  name: string
  phone: string
  fssaiLicense: string
  kitchenAddress: string
  specialties: string[]
  appliedAt: string
  kitchenPhotos: string[]
}

type Dispute = {
  id: string
  orderNumber: string
  user: string
  type: string
  description: string
  status: 'open' | 'investigating' | 'resolved' | 'closed'
  amount: number
  createdAt: string
}

type PayoutRequest = {
  id: string
  type: 'chef' | 'delivery'
  name: string
  period: string
  amount: number
  orders: number
  status: 'pending' | 'processed'
}

export default function GharKaKhana() {
  const [activeTab, setActiveTab] = useState('browse')
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg' | 'jain'>('all')
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null)
  const [showOrderTracking, setShowOrderTracking] = useState(false)
  const [adminSubTab, setAdminSubTab] = useState<'overview' | 'chefs' | 'orders' | 'disputes' | 'payouts'>('overview')

  const chefs: Chef[] = [
    {
      id: '1',
      name: 'Sunita Sharma',
      rating: 4.8,
      reviews: 245,
      specialty: ['Punjabi', 'North Indian'],
      image: '👩‍🍳',
      distance: 1.2,
      verified: true
    },
    {
      id: '2',
      name: 'Lakshmi Reddy',
      rating: 4.7,
      reviews: 189,
      specialty: ['South Indian', 'Andhra'],
      image: '👩‍🍳',
      distance: 0.8,
      verified: true
    },
    {
      id: '3',
      name: 'Kavita Singh',
      rating: 4.6,
      reviews: 156,
      specialty: ['Rajasthani', 'Gujarati'],
      image: '👩‍🍳',
      distance: 1.5,
      verified: true
    }
  ]

  const dishes: Dish[] = [
    {
      id: '1',
      name: 'Dal Makhani',
      nameHindi: 'दाल मखनी',
      description: 'Creamy black lentils slow-cooked for hours with butter and cream',
      price: 120,
      cuisine: 'Punjabi',
      dietaryTags: ['veg'],
      rating: 4.7,
      reviews: 128,
      preparationTime: 30,
      image: '🍛',
      chefId: '1'
    },
    {
      id: '2',
      name: 'Palak Paneer',
      nameHindi: 'पालक पनीर',
      description: 'Fresh spinach curry with cottage cheese cubes',
      price: 130,
      cuisine: 'Punjabi',
      dietaryTags: ['veg', 'gluten-free'],
      rating: 4.6,
      reviews: 96,
      preparationTime: 25,
      image: '🥬',
      chefId: '1'
    },
    {
      id: '3',
      name: 'Masala Dosa',
      nameHindi: 'मसाला डोसा',
      description: 'Crispy rice crepe filled with spiced potato filling',
      price: 80,
      cuisine: 'South Indian',
      dietaryTags: ['veg', 'gluten-free'],
      rating: 4.8,
      reviews: 203,
      preparationTime: 20,
      image: '🥞',
      chefId: '2'
    },
    {
      id: '4',
      name: 'Chicken Curry',
      nameHindi: 'चिकन करी',
      description: 'Aromatic chicken curry with traditional spices',
      price: 150,
      cuisine: 'North Indian',
      dietaryTags: ['non-veg'],
      rating: 4.5,
      reviews: 87,
      preparationTime: 35,
      image: '🍗',
      chefId: '1'
    },
    {
      id: '5',
      name: 'Dal Tadka',
      nameHindi: 'दाल तड़का',
      description: 'Yellow lentils tempered with cumin and garlic',
      price: 100,
      cuisine: 'Punjabi',
      dietaryTags: ['veg', 'jain'],
      rating: 4.5,
      reviews: 145,
      preparationTime: 20,
      image: '🍲',
      chefId: '1'
    },
    {
      id: '6',
      name: 'Gobi 65',
      nameHindi: 'गोभी 65',
      description: 'Crispy spiced cauliflower fritters',
      price: 90,
      cuisine: 'Andhra',
      dietaryTags: ['veg', 'jain'],
      rating: 4.7,
      reviews: 167,
      preparationTime: 25,
      image: '🥦',
      chefId: '2'
    }
  ]

  const pendingChefs: PendingChef[] = [
    {
      id: '4',
      name: 'Meena Devi',
      phone: '+91-98765-43211',
      fssaiLicense: '100123456790',
      kitchenAddress: '123, Main Road, Indiranagar',
      specialties: ['Rajasthani', 'Gujarati'],
      appliedAt: '2025-01-15',
      kitchenPhotos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
    },
    {
      id: '5',
      name: 'Rekha Gupta',
      phone: '+91-98765-43212',
      fssaiLicense: '100123456791',
      kitchenAddress: '456, Cross Road, Jayanagar',
      specialties: ['North Indian', 'Continental'],
      appliedAt: '2025-01-14',
      kitchenPhotos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
    }
  ]

  const disputes: Dispute[] = [
    {
      id: '1',
      orderNumber: 'GKK-2024-045',
      user: 'Amit Singh',
      type: 'food_quality',
      description: 'Food was cold and not fresh',
      status: 'investigating',
      amount: 140,
      createdAt: '2025-01-15'
    },
    {
      id: '2',
      orderNumber: 'GKK-2024-043',
      user: 'Priya Kumar',
      type: 'delivery',
      description: 'Delivered to wrong address',
      status: 'open',
      amount: 120,
      createdAt: '2025-01-14'
    }
  ]

  const payoutRequests: PayoutRequest[] = [
    {
      id: '1',
      type: 'chef',
      name: 'Sunita Sharma',
      period: 'Jan 8-14, 2025',
      amount: 5312.50,
      orders: 28,
      status: 'pending'
    },
    {
      id: '2',
      type: 'chef',
      name: 'Lakshmi Reddy',
      period: 'Jan 8-14, 2025',
      amount: 4250.00,
      orders: 24,
      status: 'pending'
    },
    {
      id: '3',
      type: 'delivery',
      name: 'Ramesh Kumar',
      period: 'Jan 8-14, 2025',
      amount: 2750.00,
      orders: 110,
      status: 'processed'
    }
  ]

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dish.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' || dish.dietaryTags.includes(filter)
    return matchesSearch && matchesFilter
  })

  const addToCart = (dish: Dish) => {
    setCart(prev => {
      const existing = prev.find(item => item.dish.id === dish.id)
      if (existing) {
        return prev.map(item => 
          item.dish.id === dish.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { dish, quantity: 1 }]
    })
  }

  const removeFromCart = (dishId: string) => {
    setCart(prev => prev.filter(item => item.dish.id !== dishId))
  }

  const updateQuantity = (dishId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.dish.id === dishId) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const cartTotal = cart.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0)
  const deliveryFee = 20
  const total = cartTotal + deliveryFee

  const placeOrder = () => {
    setOrderStatus('pending')
    setShowOrderTracking(true)
    setCart([])
    setActiveTab('orders')
    
    // Simulate order status progression
    setTimeout(() => setOrderStatus('accepted'), 2000)
    setTimeout(() => setOrderStatus('cooking'), 5000)
    setTimeout(() => setOrderStatus('packed'), 8000)
    setTimeout(() => setOrderStatus('out_for_delivery'), 12000)
    setTimeout(() => setOrderStatus('delivered'), 16000)
  }

  const getOrderStatusText = (status: OrderStatus) => {
    const texts = {
      pending: 'Waiting for chef to accept',
      accepted: 'Chef has accepted your order',
      cooking: 'Your food is being prepared',
      packed: 'Food is packed and ready',
      out_for_delivery: 'On the way to you',
      delivered: 'Delivered! Enjoy your meal'
    }
    return texts[status]
  }

  const getOrderProgress = (status: OrderStatus) => {
    const progress = {
      pending: 10,
      accepted: 25,
      cooking: 50,
      packed: 75,
      out_for_delivery: 90,
      delivered: 100
    }
    return progress[status]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">GharKaKhana</h1>
                <p className="text-xs text-gray-600">घर जैसा खाना, हर रोज़</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm bg-orange-50 px-3 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-700">HSR Layout, Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Authentic Home-Cooked Food</h2>
          <p className="text-lg opacity-90 mb-4">40% cheaper than restaurants</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>FSSAI Verified</span>
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>50+ Home Chefs</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>15,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 flex-1">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-6 bg-white">
            <TabsTrigger value="browse" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Home className="w-4 h-4 mr-2" />
              Browse
            </TabsTrigger>
            <TabsTrigger value="chefs" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <ChefHat className="w-4 h-4 mr-2" />
              Chefs
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <ShoppingCart className="w-4 h-2 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="admin" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </TabsTrigger>
          </TabsList>

          {/* Browse Tab */}
          <TabsContent value="browse" className="space-y-4">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search dishes, cuisines..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Dishes</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-3">
                    <Button
                      variant={filter === 'all' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setFilter('all')}
                    >
                      All Dishes
                    </Button>
                    <Button
                      variant={filter === 'veg' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setFilter('veg')}
                    >
                      Vegetarian
                    </Button>
                    <Button
                      variant={filter === 'non-veg' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setFilter('non-veg')}
                    >
                      Non-Vegetarian
                    </Button>
                    <Button
                      variant={filter === 'jain' ? 'default' : 'outline'}
                      className="w-full"
                      onClick={() => setFilter('jain')}
                    >
                      Jain Friendly
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              <Badge variant="secondary" className="whitespace-nowrap bg-green-100 text-green-700 hover:bg-green-100 cursor-pointer">
                Veg
              </Badge>
              <Badge variant="secondary" className="whitespace-nowrap bg-red-100 text-red-700 hover:bg-red-100 cursor-pointer">
                Non-Veg
              </Badge>
              <Badge variant="secondary" className="whitespace-nowrap bg-purple-100 text-purple-700 hover:bg-purple-100 cursor-pointer">
                Jain
              </Badge>
              <Badge variant="secondary" className="whitespace-nowrap bg-blue-100 text-blue-700 hover:bg-blue-100 cursor-pointer">
                Gluten-Free
              </Badge>
              <Badge variant="secondary" className="whitespace-nowrap bg-orange-100 text-orange-700 hover:bg-orange-100 cursor-pointer">
                Punjabi
              </Badge>
              <Badge variant="secondary" className="whitespace-nowrap bg-yellow-100 text-yellow-700 hover:bg-yellow-100 cursor-pointer">
                South Indian
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedDish(dish)}>
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-6xl">
                    {dish.image}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{dish.name}</h3>
                        <p className="text-xs text-gray-600">{dish.nameHindi}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
                        <Star className="w-3 h-3 fill-green-600 text-green-600" />
                        <span className="text-sm font-medium text-green-700">{dish.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-gray-600 line-clamp-2">{dish.description}</p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">{dish.cuisine}</Badge>
                      {dish.dietaryTags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs capitalize">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{dish.preparationTime} mins</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-orange-600">₹{dish.price}</span>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={(e) => { e.stopPropagation(); addToCart(dish) }}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Chefs Tab */}
          <TabsContent value="chefs" className="space-y-4">
            <div className="space-y-4">
              {chefs.map((chef) => (
                <Card key={chef.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                        {chef.image}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{chef.name}</h3>
                          {chef.verified && (
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{chef.rating}</span>
                            <span>({chef.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{chef.distance} km</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {chef.specialty.map(specialty => (
                            <Badge key={specialty} variant="secondary">{specialty}</Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        View Menu
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            {showOrderTracking && orderStatus ? (
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">Order #GKK-2024-001</h3>
                      <p className="text-sm text-gray-600">Estimated delivery: 35 mins</p>
                    </div>
                    <Badge variant={orderStatus === 'delivered' ? 'default' : 'secondary'}>
                      {orderStatus.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{getOrderStatusText(orderStatus)}</span>
                      <span className="text-sm font-medium">{getOrderProgress(orderStatus)}%</span>
                    </div>
                    <Progress value={getOrderProgress(orderStatus)} className="h-2" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="w-8 h-8 mx-auto mb-1 bg-orange-100 rounded-full flex items-center justify-center">
                        <ChefHat className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-xs text-gray-600">Chef</p>
                      <p className="text-sm font-medium">Sunita</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="w-8 h-8 mx-auto mb-1 bg-orange-100 rounded-full flex items-center justify-center">
                        <Utensils className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-xs text-gray-600">Items</p>
                      <p className="text-sm font-medium">2 dishes</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="w-8 h-8 mx-auto mb-1 bg-orange-100 rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-orange-600" />
                      </div>
                      <p className="text-xs text-gray-600">Support</p>
                      <p className="text-sm font-medium">+91-9876543210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-semibold mb-2">No active orders</h3>
                  <p className="text-gray-600">Browse our delicious home-cooked dishes to place your first order!</p>
                  <Button className="mt-4 bg-orange-500 hover:bg-orange-600" onClick={() => setActiveTab('browse')}>
                    Browse Dishes
                  </Button>
                </CardContent>
              </Card>
            )}

            <h3 className="font-semibold text-lg">Past Orders</h3>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order #GKK-2024-002</p>
                    <p className="text-sm text-gray-600">2 dishes • ₹250</p>
                    <p className="text-xs text-gray-500">Yesterday, 1:30 PM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700">Delivered</Badge>
                    <Button variant="outline" size="sm">Reorder</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center text-4xl">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Rahul Kumar</h3>
                    <p className="text-sm text-gray-600">+91-9876543210</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        12 orders
                      </Badge>
                      <Badge variant="secondary">
                        <Award className="w-3 h-3 mr-1" />
                        Gold Member
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Loyalty Points</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-orange-600">480</p>
                    <p className="text-sm text-gray-600">Points</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">₹480 worth of free food!</p>
                    <p className="text-xs text-gray-500">Every 5th meal free</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-semibold">Subscription Plan</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Basic Plan</p>
                    <p className="text-xs text-gray-600">Free delivery on 10+ orders</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Upgrade to Standard (₹299/mo)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Tab */}
          <TabsContent value="admin" className="space-y-4">
            {/* Admin Sub-tabs */}
            <Tabs value={adminSubTab} onValueChange={(v) => setAdminSubTab(v as any)}>
              <TabsList className="grid w-full grid-cols-5 mb-6 bg-white">
                <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="chefs" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm">
                  Chefs
                </TabsTrigger>
                <TabsTrigger value="orders" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="disputes" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm">
                  Disputes
                </TabsTrigger>
                <TabsTrigger value="payouts" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-sm">
                  Payouts
                </TabsTrigger>
              </TabsList>

              {/* Dashboard Overview */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Today's Orders</p>
                          <p className="text-3xl font-bold text-orange-600">127</p>
                          <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +15.5%
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <ShoppingCart className="w-6 h-6 text-orange-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Today's Revenue</p>
                          <p className="text-3xl font-bold text-green-600">₹15,240</p>
                          <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +18.2%
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-6 h-6 text-green-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Active Users</p>
                          <p className="text-3xl font-bold text-blue-600">1,843</p>
                          <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +12.0%
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Active Chefs</p>
                          <p className="text-3xl font-bold text-purple-600">85</p>
                          <Badge className="mt-2 bg-yellow-100 text-yellow-700">12 pending</Badge>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <ChefHat className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">Top Dishes</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {dishes.slice(0, 5).map((dish, idx) => (
                          <div key={dish.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-lg">{dish.image}</span>
                              <div>
                                <p className="font-medium">{dish.name}</p>
                                <p className="text-xs text-gray-600">{dish.cuisine}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-orange-600">{45 - (idx * 5)} orders</p>
                              <div className="flex items-center justify-end">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-sm">{dish.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">Top Chefs</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {chefs.map((chef, idx) => (
                          <div key={chef.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{chef.image}</span>
                              <div>
                                <p className="font-medium">{chef.name}</p>
                                <p className="text-xs text-gray-600">{chef.specialty.join(', ')}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-orange-600">{30 - (idx * 5)} orders</p>
                              <div className="flex items-center justify-end">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-sm">{chef.rating}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">Revenue Trends</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Jan 15</span>
                          <span className="font-medium">₹15,240</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Jan 14</span>
                          <span className="font-medium">₹13,890</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Jan 13</span>
                          <span className="font-medium">₹12,450</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Jan 12</span>
                          <span className="font-medium">₹11,200</span>
                        </div>
                        <Progress value={55} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Jan 11</span>
                          <span className="font-medium">₹14,100</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Pending Chef Verifications */}
              <TabsContent value="chefs">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Pending Chef Verifications</h3>
                      <Badge className="bg-yellow-100 text-yellow-700">{pendingChefs.length} pending</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingChefs.map((chef) => (
                        <Card key={chef.id} className="border">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold">{chef.name}</h4>
                                <p className="text-sm text-gray-600">{chef.phone}</p>
                                <p className="text-xs text-gray-500 mt-1">Applied: {chef.appliedAt}</p>
                              </div>
                              <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div>
                                <p className="text-xs text-gray-600">FSSAI License</p>
                                <p className="text-sm font-medium">{chef.fssaiLicense}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600">Kitchen Address</p>
                                <p className="text-sm font-medium">{chef.kitchenAddress}</p>
                              </div>
                            </div>
                            <div className="mb-3">
                              <p className="text-xs text-gray-600 mb-1">Specialties</p>
                              <div className="flex gap-2">
                                {chef.specialties.map(specialty => (
                                  <Badge key={specialty} variant="secondary" className="text-xs">{specialty}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="mb-4">
                              <p className="text-xs text-gray-600 mb-2">Kitchen Photos</p>
                              <div className="flex gap-2">
                                {chef.kitchenPhotos.map((_, idx) => (
                                  <div key={idx} className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                                    <ImageIcon className="w-8 h-8 text-orange-400" />
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 flex-1">
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                              <Button size="sm" variant="outline">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Monitoring */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">Live Order Monitoring</h3>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="max-h-96">
                      <div className="space-y-3">
                        {[
                          { id: '1', order: 'GKK-2024-127', status: 'cooking', customer: 'Amit Singh', chef: 'Sunita Sharma', amount: 180, time: '12:30 PM' },
                          { id: '2', order: 'GKK-2024-126', status: 'packed', customer: 'Priya Kumar', chef: 'Lakshmi Reddy', amount: 120, time: '12:25 PM' },
                          { id: '3', order: 'GKK-2024-125', status: 'out_for_delivery', customer: 'Rahul Das', chef: 'Kavita Singh', amount: 150, time: '12:20 PM' },
                          { id: '4', order: 'GKK-2024-124', status: 'delivered', customer: 'Neha Gupta', chef: 'Sunita Sharma', amount: 130, time: '12:15 PM' },
                          { id: '5', order: 'GKK-2024-123', status: 'pending', customer: 'Vikram Singh', chef: 'Lakshmi Reddy', amount: 100, time: '12:10 PM' },
                        ].map((order) => (
                          <Card key={order.id} className="border">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="font-semibold">{order.order}</p>
                                    <Badge className={
                                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                      order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                                      'bg-blue-100 text-blue-700'
                                    }>
                                      {order.status.replace('_', ' ')}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">{order.customer}</p>
                                  <p className="text-xs text-gray-500">Chef: {order.chef}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-semibold text-orange-600">₹{order.amount}</p>
                                  <p className="text-xs text-gray-500">{order.time}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Disputes Management */}
              <TabsContent value="disputes">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Dispute Management</h3>
                      <div className="flex gap-2">
                        <Badge className="bg-red-100 text-red-700">{disputes.filter(d => d.status === 'open').length} Open</Badge>
                        <Badge className="bg-yellow-100 text-yellow-700">{disputes.filter(d => d.status === 'investigating').length} Investigating</Badge>
                        <Badge className="bg-green-100 text-green-700">{disputes.filter(d => d.status === 'resolved').length} Resolved</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {disputes.map((dispute) => (
                        <Card key={dispute.id} className="border">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold">{dispute.orderNumber}</p>
                                  <Badge className={
                                    dispute.status === 'open' ? 'bg-red-100 text-red-700' :
                                    dispute.status === 'investigating' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-green-100 text-green-700'
                                  }>
                                    {dispute.status}
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600">User: {dispute.user}</p>
                                <p className="text-xs text-gray-500">Type: {dispute.type.replace('_', ' ')} • Created: {dispute.createdAt}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold text-orange-600">₹{dispute.amount}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">"{dispute.description}"</p>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Resolve
                              </Button>
                              <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                Investigate
                              </Button>
                              <Button size="sm" variant="outline">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payouts */}
              <TabsContent value="payouts">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Payout Requests</h3>
                      <div className="flex gap-2">
                        <Badge className="bg-yellow-100 text-yellow-700">{payoutRequests.filter(p => p.status === 'pending').length} Pending</Badge>
                        <Badge className="bg-green-100 text-green-700">{payoutRequests.filter(p => p.status === 'processed').length} Processed</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="max-h-96">
                      <div className="space-y-3">
                        {payoutRequests.map((payout) => (
                          <Card key={payout.id} className="border">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className={payout.type === 'chef' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
                                      {payout.type}
                                    </Badge>
                                    <h4 className="font-semibold">{payout.name}</h4>
                                  </div>
                                  <p className="text-sm text-gray-600">Period: {payout.period}</p>
                                  <p className="text-sm text-gray-600">Orders: {payout.orders}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-2xl font-bold text-orange-600">₹{payout.amount.toLocaleString()}</p>
                                  <Badge className={
                                    payout.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                                  } mt-2>
                                    {payout.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex gap-2 mt-3">
                                <Button size="sm" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 flex-1">
                                  <Download className="w-4 h-4 mr-1" />
                                  Download Invoice
                                </Button>
                                {payout.status === 'pending' ? (
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Process Payout
                                  </Button>
                                ) : (
                                  <Button size="sm" variant="outline" className="flex-1" disabled>
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Processed
                                  </Button>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>

      {/* Sticky Footer - Cart */}
      {cart.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-orange-200 shadow-lg z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-orange-600" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">₹{total}</p>
                  <p className="text-xs text-gray-600">₹{cartTotal} + ₹{deliveryFee} delivery</p>
                </div>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    View Cart
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                  </SheetHeader>
                  <ScrollArea className="h-[calc(100vh-200px)] mt-6">
                    {cart.map((item) => (
                      <div key={item.dish.id} className="flex items-start gap-3 pb-4 border-b">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                          {item.dish.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.dish.name}</h4>
                          <p className="text-sm text-gray-600">{item.dish.cuisine}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-6 h-6"
                                onClick={() => updateQuantity(item.dish.id, -1)}
                              >
                                -
                              </Button>
                              <span className="text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="w-6 h-6"
                                onClick={() => updateQuantity(item.dish.id, 1)}
                              >
                                +
                              </Button>
                            </div>
                            <span className="font-semibold">₹{item.dish.price * item.quantity}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-red-500 hover:text-red-600"
                          onClick={() => removeFromCart(item.dish.id)}
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="mt-4 pt-4 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>₹{cartTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">₹{total}</span>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-4" onClick={placeOrder}>
                      Place Order
                    </Button>
                    <p className="text-xs text-center text-gray-600">
                      Payment: UPI, Card, or Cash on Delivery
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </footer>
      )}

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedDish(null)}>
          <Card className="max-w-lg w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-8xl">
              {selectedDish.image}
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{selectedDish.name}</h3>
                  <p className="text-gray-600">{selectedDish.nameHindi}</p>
                </div>
                <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                  <Star className="w-5 h-5 fill-green-600 text-green-600" />
                  <span className="font-semibold text-green-700">{selectedDish.rating}</span>
                  <span className="text-sm text-green-600">({selectedDish.reviews})</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{selectedDish.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold">Dietary Information</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedDish.dietaryTags.map(tag => (
                    <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-600 mb-1" />
                  <p className="text-xs text-gray-600">Preparation Time</p>
                  <p className="font-semibold">{selectedDish.preparationTime} mins</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-orange-600 mb-1" />
                  <p className="text-xs text-gray-600">Distance</p>
                  <p className="font-semibold">{chefs.find(c => c.id === selectedDish.chefId)?.distance} km</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-3xl font-bold text-orange-600">₹{selectedDish.price}</span>
                  <p className="text-sm text-gray-600">including all taxes</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => { addToCart(selectedDish); setSelectedDish(null) }}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

const ImageIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l16.5-16.5M4.5 4.5l7.5-7.5M4.5 19.5l7.5-7.5M9 6.75h.008v.008H9V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
)
