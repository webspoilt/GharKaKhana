# GharKaKhana - Home-Cooked Food Delivery Platform
## Complete Business & Technical Execution Plan

---

## EXECUTIVE SUMMARY

**GharKaKhana** is a hyperlocal home-cooked food delivery platform connecting urban Indians with verified home chefs. Our mission: "Authentic home-cooked meals at 40% lower cost than restaurants."

**Key Highlights:**
- Market Opportunity: ₹45,000 crore Indian food delivery market, 20% home-cooked segment (₹9,000 crore)
- Initial Launch: Bangalore (HSR Layout/Koramangala) with 50 home chefs
- Pricing: ₹80-150 per meal vs Swiggy's ₹150-300 minimum
- Revenue Model: 15% commission + ₹20 delivery fee + subscriptions (₹299/month)
- Breakeven: Month 8-9 at 700 orders/day
- Initial Investment Required: ₹25L for 6-month runway

---

## 1. BUSINESS FOUNDATION

### 1.1 Branding & Domain Options

**Top 5 Available .in Domain Names:**

1. **GharKaKhana.in** (Primary choice - easy to remember)
2. **HomeMadeKhana.in** (English alternative)
3. **GharJaisaKhana.in** (Hindi phrase meaning "food like home")
4. **PureDesiKhana.in** (Authentic Indian food focus)
5. **HomeChefIndia.in** (Focus on home chef aspect)

**Logo Concept:**
- Main element: Stylized home (house outline) with a cooking pot/ladle inside
- Color palette: Warm orange (#FF6B35) for food/energy, earthy green (#2D6A4F) for freshness/homemade
- Typography: Clean, modern Sanskrit-inspired font (Hindi + English versions)
- Tagline below: "घर जैसा खाना, हर रोज़" (Homemade food, everyday)

**Brand Guidelines:**
- Primary Color: #FF6B35 (Warm Orange)
- Secondary Color: #2D6A4F (Fresh Green)
- Accent Color: #F4A261 (Golden)
- Background: #FFFFFF and #F8F9FA
- Text: #1F2937 (Dark Gray)
- Font Family: 'Poppins' for English, 'Noto Sans Devanagari' for Hindi

### 1.2 Target Audience (Detailed)

**Primary Segments:**

1. **Urban Migrants (35%)**
   - Age: 22-35 years
   - Location: Tech hubs (Bangalore, Hyderabad, Pune, Gurgaon)
   - Pain Point: Homesick for authentic homemade food, tired of restaurant food
   - Income: ₹8-15L/year
   - Behavior: Order 3-4 times/week, willing to pay for quality

2. **Students & Working Professionals (40%)**
   - Age: 18-25 years (students), 23-30 years (professionals)
   - Location: PG/hostels, shared accommodations
   - Pain Point: Mess food quality, expensive restaurants
   - Income: ₹3-8L/year (professionals), allowance (students)
   - Behavior: Price-sensitive but health-conscious, order daily

3. **Young Families (15%)**
   - Age: 25-40 years
   - Location: Suburban areas with nuclear families
   - Pain Point: No time to cook, want variety for kids
   - Income: ₹12-25L/year
   - Behavior: Weekend ordering, subscription interest

4. **Health-Conscious Individuals (10%)**
   - Age: 25-45 years
   - Pain Point: Restaurant food = unhealthy, want controlled portions
   - Special diets: Diabetic-friendly, low oil, Jain, etc.
   - Behavior: Consistent ordering, high repeat rate

### 1.3 Unique Value Proposition

**Customer-Facing:**
- "घर का खाना, रेस्टोरेंट से 40% सस्ता" (Home food, 40% cheaper than restaurants)
- Verified home chefs with kitchen inspections
- Fresh food, prepared after order acceptance
- No preservatives, no artificial colors
- Portion control options (half/full plates)
- Authentic regional cuisines from real home cooks

**Chef-Facing:**
- Earn 85% of food value (vs 70-75% on Swiggy/Zomato)
- Flexible working hours (lunch/dinner slots)
- No hidden charges, transparent earnings
- Weekly payouts to bank account
- Marketing support for popular dishes

### 1.4 Revenue Model (Detailed)

**Revenue Streams:**

1. **Commission (Primary)**
   - 15% on all food orders
   - Deducted from customer payment before payout to chef

2. **Delivery Fee**
   - ₹20 flat fee per order (paid by customer)
   - Entire fee goes to delivery partner

3. **Subscription Plans**
   - **Basic: ₹199/month** - Free delivery on 10+ orders/month
   - **Standard: ₹299/month** - 10% discount + free delivery
   - **Premium: ₹499/month** - 15% discount + priority delivery + exclusive dishes

4. **Promotional Revenue (Future)**
   - Featured home chefs (₹500/week)
   - Dish of the day (₹200/day)
   - Sponsored slots in app

5. **B2B Partnerships (Future)**
   - Corporate lunch plans (10-15% bulk discount)
   - PG/hostel tie-ups (revenue share)

### 1.5 Pricing Strategy

**Dish Categories:**
- Light Meal: ₹80-120 (Poha, Upma, Idli Sambar)
- Standard Meal: ₹100-150 (Dal Rice, Rajma Chawal, Veg Curry)
- Premium Meal: ₹120-180 (Non-veg, Specialties)
- Combo (2 items): ₹150-250
- Festival Specials: ₹200-350

**Volume Discounts:**
- 3 meals/week: 5% off
- 7 meals/week: 10% off (Tiffin Plan)
- 20 meals/month: 15% off (Monthly Plan)

**Competitive Pricing Comparison:**
| Item | GharKaKhana | Swiggy/Zomato | Restaurant |
|------|-------------|---------------|------------|
| Dal Rice | ₹100 | ₹150-200 | ₹180-250 |
| Rajma Chawal | ₹120 | ₹180-250 | ₹220-300 |
| Veg Thali | ₹150 | ₹220-350 | ₹280-400 |

---

## 2. TECHNICAL ARCHITECTURE

### 2.1 Technology Stack

**Note for Development Context:**
For the immediate prototype, we will use:
- **Frontend**: Next.js 16 + React + TypeScript (App Router)
- **UI Framework**: shadcn/ui + Tailwind CSS
- **State Management**: Zustand + TanStack Query
- **Database**: Prisma ORM + SQLite (for MVP)

**Recommended Production Stack:**
- **Frontend**: React Native (cross-platform mobile apps)
- **Backend**: Node.js + Express
- **Database**: PostgreSQL + Redis
- **Hosting**: AWS Mumbai / Digital Ocean Bangalore
- **CDN**: CloudFront for images

### 2.2 System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   User App   │  │  Chef App    │  │  Admin Panel │  │
│  │  (React Native)│ │(React Native)│ │  (Web App)   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    API GATEWAY                           │
│              (Load Balancer + Rate Limiting)            │
└─────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   User API   │  │   Chef API   │  │  Admin API   │
└──────────────┘  └──────────────┘  └──────────────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │   Auth   │ │  Orders  │ │ Payments │ │ Delivery │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
└─────────────────────────────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ PostgreSQL  │  │    Redis     │  │     S3       │
│  (Primary)   │  │   (Cache)    │  │  (Images)    │
└──────────────┘  └──────────────┘  └──────────────┘
```

### 2.3 Database Schema (Complete)

```sql
-- 1. Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(15) UNIQUE NOT NULL,
    name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255), -- Optional for email login
    device_id VARCHAR(255),
    fcm_token VARCHAR(255),
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. User Profiles
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    address TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    pincode VARCHAR(6),
    city VARCHAR(50),
    state VARCHAR(50),
    dietary_preferences JSONB, -- ['veg', 'jain', 'low-oil']
    favorite_cuisines JSONB,
    avg_order_value DECIMAL(10, 2),
    total_orders INT DEFAULT 0,
    loyalty_points INT DEFAULT 0,
    subscription_plan VARCHAR(50), -- 'basic', 'standard', 'premium'
    subscription_expiry DATE
);

-- 3. Home Chefs
CREATE TABLE home_chefs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255),
    fssai_license_number VARCHAR(20) UNIQUE,
    fssai_expiry_date DATE,
    kitchen_address TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    pincode VARCHAR(6),
    verification_status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'rejected', 'suspended'
    verification_date DATE,
    kitchen_photos JSONB, -- URLs of kitchen images
    profile_photo VARCHAR(500),
    bio TEXT,
    specialties JSONB, -- ['punjabi', 'south-indian']
    hygiene_rating DECIMAL(3, 2) DEFAULT 4.0,
    overall_rating DECIMAL(3, 2) DEFAULT 4.0,
    total_reviews INT DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Dishes
CREATE TABLE dishes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chef_id UUID REFERENCES home_chefs(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    name_hindi VARCHAR(100),
    description TEXT,
    cuisine_type VARCHAR(50), -- 'north-indian', 'south-indian', 'punjabi', etc.
    category VARCHAR(50), -- 'breakfast', 'lunch', 'dinner', 'snack'
    dietary_tags JSONB, -- ['veg', 'jain', 'gluten-free', 'diabetic-friendly']
    price DECIMAL(10, 2) NOT NULL,
    half_portion_price DECIMAL(10, 2),
    available_portions INT DEFAULT 10,
    preparation_time INT, -- in minutes
    photos JSONB, -- URLs of food images
    ingredients TEXT,
    nutritional_info JSONB, -- {calories, protein, carbs}
    spice_level VARCHAR(10), -- 'mild', 'medium', 'spicy'
    availability JSONB, -- {lunch: true, dinner: true}
    active BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    total_orders INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Orders
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(20) UNIQUE NOT NULL, -- GKK-2024-00001
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    chef_id UUID REFERENCES home_chefs(id) ON DELETE CASCADE,
    items JSONB NOT NULL, -- [{dish_id, quantity, price}]
    subtotal DECIMAL(10, 2) NOT NULL,
    delivery_fee DECIMAL(10, 2) DEFAULT 20,
    discount DECIMAL(10, 2) DEFAULT 0,
    total_amount DECIMAL(10, 2) NOT NULL,
    delivery_address TEXT NOT NULL,
    delivery_latitude DECIMAL(10, 8),
    delivery_longitude DECIMAL(11, 8),
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'accepted', 'cooking', 'packed', 'out_for_delivery', 'delivered', 'cancelled'
    estimated_delivery_time TIMESTAMP,
    actual_delivery_time TIMESTAMP,
    special_instructions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Order Status Timeline
CREATE TABLE order_status_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 7. Payments
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(20), -- 'upi', 'card', 'netbanking', 'cod'
    payment_gateway VARCHAR(50),
    transaction_id VARCHAR(100),
    razorpay_order_id VARCHAR(100),
    razorpay_payment_id VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
    commission_amount DECIMAL(10, 2),
    chef_payout_amount DECIMAL(10, 2),
    delivery_payout_amount DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 8. Reviews
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    chef_id UUID REFERENCES home_chefs(id),
    dish_id UUID REFERENCES dishes(id),
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    food_quality_rating INT CHECK (food_quality_rating >= 1 AND rating <= 5),
    packaging_rating INT CHECK (packaging_rating >= 1 AND rating <= 5),
    hygiene_rating INT CHECK (hygiene_rating >= 1 AND rating <= 5),
    comment TEXT,
    photos JSONB, -- URLs of food review photos
    helpful_count INT DEFAULT 0,
    flagged BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Delivery Partners
CREATE TABLE delivery_partners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    aadhaar_number VARCHAR(12),
    driving_license VARCHAR(20),
    vehicle_type VARCHAR(20), -- 'bike', 'scooter'
    vehicle_number VARCHAR(15),
    current_latitude DECIMAL(10, 8),
    current_longitude DECIMAL(11, 8),
    is_online BOOLEAN DEFAULT false,
    verification_status VARCHAR(20) DEFAULT 'pending',
    total_deliveries INT DEFAULT 0,
    rating DECIMAL(3, 2) DEFAULT 4.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10. Delivery Assignments
CREATE TABLE delivery_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    delivery_partner_id UUID REFERENCES delivery_partners(id),
    pickup_address TEXT,
    pickup_latitude DECIMAL(10, 8),
    pickup_longitude DECIMAL(11, 8),
    drop_address TEXT,
    drop_latitude DECIMAL(10, 8),
    drop_longitude DECIMAL(11, 8),
    pickup_time TIMESTAMP,
    drop_time TIMESTAMP,
    distance_km DECIMAL(5, 2),
    payout_amount DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'assigned', -- 'assigned', 'picked_up', 'delivered', 'cancelled'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 11. Subscriptions
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    plan_type VARCHAR(50) NOT NULL, -- 'basic', 'standard', 'premium'
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    amount_paid DECIMAL(10, 2),
    payment_id UUID REFERENCES payments(id),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 12. Disputes
CREATE TABLE disputes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    raised_by UUID REFERENCES users(id),
    dispute_type VARCHAR(50), -- 'food_quality', 'delivery', 'payment', 'hygiene'
    description TEXT,
    status VARCHAR(20) DEFAULT 'open', -- 'open', 'investigating', 'resolved', 'closed'
    resolution TEXT,
    refund_amount DECIMAL(10, 2),
    resolved_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 13. Payouts
CREATE TABLE payouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chef_id UUID REFERENCES home_chefs(id),
    delivery_partner_id UUID REFERENCES delivery_partners(id),
    period_start DATE,
    period_end DATE,
    total_amount DECIMAL(10, 2) NOT NULL,
    payout_amount DECIMAL(10, 2) NOT NULL,
    commission DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'processed', 'failed'
    transaction_id VARCHAR(100),
    processed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 14. Promotions
CREATE TABLE promotions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(20) UNIQUE NOT NULL,
    description TEXT,
    discount_type VARCHAR(10), -- 'percentage', 'flat'
    discount_value DECIMAL(10, 2),
    min_order_value DECIMAL(10, 2),
    max_discount DECIMAL(10, 2),
    usage_limit INT,
    used_count INT DEFAULT 0,
    valid_from DATE,
    valid_until DATE,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 15. Admin Users
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL, -- 'super_admin', 'support', 'operations'
    permissions JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_dishes_chef_id ON dishes(chef_id);
CREATE INDEX idx_dishes_category ON dishes(category);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_chef_id ON orders(chef_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_reviews_chef_id ON reviews(chef_id);
```

---

## 3. MVP FEATURE SET (PHASE 1 - 60 DAYS)

### 3.1 User App Features

**Essential Features:**

#### 1. Authentication (Week 1-2)
- Phone number registration (OTP-based)
- MSG91 integration for SMS delivery
- Auto-fill OTP (SMS Retriever API on Android)
- Session management with JWT tokens
- Profile creation (name, address)

#### 2. Location & Discovery (Week 2-3)
- GPS-based location detection
- Manual pin placement on map
- 3km radius filter for nearby chefs
- List view with distance indication
- Map view with chef markers

#### 3. Browse & Filter (Week 2-3)
- Dish cards with photos, price, rating
- Filters: Veg/Non-veg, Cuisine, Price Range, Rating
- Sort: Distance, Rating, Popularity, Price
- Search: Dish name, chef name, cuisine
- Featured dishes section

#### 4. Menu & Dish Details (Week 3)
- Full dish photos carousel
- Detailed description with ingredients
- Nutritional info (calories, protein)
- Chef profile card
- Reviews with photos
- Add to cart functionality
- Portion options (half/full)

#### 5. Cart & Checkout (Week 3-4)
- Cart summary with item details
- Add/remove items, quantity adjust
- Apply promo code
- Delivery address selection
- Delivery time slot selection
- Payment method selection (UPI/Card/COD)
- Order summary with breakdown

#### 6. Order Tracking (Week 4)
- Real-time status updates
- Visual timeline (Accepted → Cooking → Packed → Out for delivery → Delivered)
- Live location tracking (map)
- ETA countdown
- Chef & delivery partner contact

#### 7. Reviews & Ratings (Week 4-5)
- Post-delivery rating prompt
- Separate ratings: Food Quality, Packaging, Hygiene
- Photo upload for review
- Text comments
- Report inappropriate reviews

#### 8. Profile & Settings (Week 5)
- View order history
- Track current orders
- Manage addresses
- Subscription plan
- Loyalty points
- Notification preferences

### 3.2 Home Chef App Features

**Essential Features:**

#### 1. Onboarding (Week 5-6)
- Basic information (name, phone, email)
- Kitchen address with pin location
- Kitchen photos upload (min 3)
- Hygiene quiz (10 questions)
- FSSAI license upload
- Profile photo
- Bio & specialties

#### 2. Dashboard (Week 6)
- Today's orders summary
- Active orders list
- Quick actions (accept/reject)
- Earnings overview
- Upcoming orders
- Notifications

#### 3. Menu Management (Week 6)
- Add new dish
- Upload dish photos (min 1, max 5)
- Set price, portions
- Dietary tags
- Availability (lunch/dinner)
- Edit/delete dishes
- Deactivate dishes temporarily

#### 4. Order Management (Week 6)
- Accept/reject orders
- Update cooking status
- View order details
- Customer contact
- Special instructions
- Order history

#### 5. Earnings (Week 7)
- Daily/weekly/monthly breakdown
- Commission details
- Payout history
- Payout status
- Bank account details

#### 6. Reviews & Feedback (Week 7)
- View all reviews
- Filter by rating
- Respond to reviews
- Rating trends
- Customer feedback analysis

### 3.3 Admin Dashboard Features

**Essential Features:**

#### 1. Dashboard Overview (Week 7-8)
- Today's orders
- Active users
- Revenue overview
- Pending approvals
- Alerts & notifications

#### 2. User Management (Week 7-8)
- User list with filters
- View user details
- Order history
- Block/unblock users
- Customer support tickets

#### 3. Chef Management (Week 7-8)
- Chef verification queue
- Kitchen photos review
- FSSAI validation
- Approve/reject applications
- Chef performance metrics
- Suspend/ban chefs

#### 4. Order Monitoring (Week 8)
- Live order tracking
- Order list with filters
- Order details
- Dispute management
- Refund processing

#### 5. Payout Management (Week 8)
- Chef payout queue
- Delivery partner payouts
- Process payouts
- Payout history
- Transaction logs

#### 6. Analytics (Week 8)
- Orders per day/week/month
- Revenue trends
- Top dishes
- Top chefs
- Customer demographics
- Peak hours analysis

---

## 4. DEPLOYMENT & SCALING PLAN

### 4.1 Infrastructure Setup (AWS Mumbai Region)

**Initial Setup (Month 1-3):**

| Component | Specs | Cost/Month | Provider |
|-----------|-------|------------|----------|
| Application Server | EC2 t3.medium (2 vCPU, 4GB RAM) | ₹5,000 | AWS |
| Database | RDS PostgreSQL db.t3.small | ₹3,500 | AWS |
| Cache | ElastiCache Redis cache.t3.small | ₹2,000 | AWS |
| Storage | S3 Standard (500GB) | ₹1,000 | AWS |
| CDN | CloudFront | ₹500 | AWS |
| Load Balancer | ALB | ₹1,500 | AWS |
| SMS Gateway | MSG91 | ₹2,000 | MSG91 |
| Push Notifications | Firebase | Free | Firebase |
| **Total** | | **₹15,500** | |

**Scale-up Plan (Month 4-6):**

- Add Application Server: +1 EC2 t3.medium (₹5,000)
- Database Upgrade: RDS db.t3.medium (₹6,000)
- Add Cache: +1 Redis instance (₹2,000)
- **Total at Scale:** ₹28,500/month

### 4.2 Development Timeline (10-Week Sprint)

**Weeks 1-2: Foundation & Setup**
- Set up development environment
- Database design & schema creation
- Authentication system (phone + OTP)
- Base API structure
- UI component library setup
- Design system implementation

**Weeks 3-4: User App - Browse & Order**
- Location services integration
- Dish browsing screens
- Filters & search
- Dish detail pages
- Cart functionality
- Checkout flow
- Integration with Razorpay

**Weeks 5-6: Home Chef App + Admin Panel**
- Chef onboarding flow
- Kitchen verification UI
- Menu management
- Order management
- Earnings dashboard
- Admin verification panel
- Admin order monitoring

**Weeks 7-8: Advanced Features & Integration**
- Real-time order tracking
- Push notifications
- Review & rating system
- Payment integration testing
- Admin analytics dashboard
- Payout management

**Week 9: Pilot Testing**
- Deploy to staging
- Onboard 20 home chefs
- Test with 20 pilot users in 1 society
- Fix bugs based on feedback
- Performance optimization

**Week 10: Launch Preparation**
- Final testing & QA
- Legal compliance check
- Marketing assets preparation
- Customer support setup
- Launch in Koramangala/HSR Layout

### 4.3 Team & Costs (3-Month MVP)

**Team Composition:**

| Role | Count | Monthly Cost | Total (3 Months) |
|------|-------|--------------|------------------|
| React Native Developers | 2 | ₹1,20,000 | ₹3,60,000 |
| Node.js Backend Developer | 1 | ₹1,00,000 | ₹3,00,000 |
| UI/UX Designer | 1 | ₹80,000 | ₹2,40,000 |
| Project Manager (Founder) | 1 | ₹0 | ₹0 |
| QA Tester (Part-time) | 1 | ₹30,000 | ₹90,000 |
| **Total** | | **₹3,30,000/month** | **₹9,90,000** |

**Additional Costs:**
- Infrastructure (3 months): ₹46,500
- Design tools & licenses: ₹30,000
- Legal & compliance: ₹50,000
- Marketing (launch): ₹100,000
- Contingency (15%): ₹170,000

**Total MVP Cost: ₹14,36,500**

---

## 5. LEGAL & COMPLIANCE (INDIA-SPECIFIC)

### 5.1 Company Registration

**Step 1: Private Limited Company Registration**
- **Cost:** ₹15,000 - ₹20,000 (including professional fees)
- **Time:** 7-10 days
- **Documents Required:**
  - PAN cards of all directors
  - Aadhaar cards of all directors
  - Passport size photos
  - Proof of office address (rent agreement/no-objection certificate)
  - Memorandum of Association (MOA)
  - Articles of Association (AOA)

**Step 2: GST Registration**
- **Cost:** ₹2,000 - ₹3,000 (if turnover > ₹20 lakhs)
- **Time:** 5-7 days
- **Documents:**
  - PAN card of company
  - Aadhaar of authorized signatory
  - Business address proof
  - Bank account details
  - Digital Signature Certificate (DSC)

**Step 3: FSSAI Basic License for Platform**
- **Cost:** ₹3,000/year
- **Time:** 7-15 days
- **Note:** Each home chef needs their own FSSAI Basic Registration (₹100/year)
- **We facilitate:** Help chefs with documentation and application

**Step 4: IEC Code (Import Export Code)**
- **Cost:** ₹2,500 (one-time)
- **Time:** 3-5 days
- **Purpose:** Required for future expansion or international tie-ups

**Step 5: Insurance**
- **Food Poisoning Liability:** ₹25,000/year
- **Product Liability:** ₹50,000/year
- **Public Liability:** ₹30,000/year
- **Total Insurance:** ₹1,05,000/year

### 5.2 Legal Documents

**1. Terms of Service (Bilingual)**

See section 10.1 for complete template.

**2. Privacy Policy (IT Act 2000 Compliant)**

See section 10.2 for complete template.

**3. Home Chef Agreement**

See section 10.3 for complete template.

**4. Delivery Partner Contract**

See section 10.4 for complete template.

### 5.3 Food Safety Protocols

**1. Mandatory Kitchen Verification**
- Video call inspection (initial)
- Physical inspection (for top performers)
- Minimum 3 kitchen photos required
- Checklist:
  - Clean flooring
  - Proper ventilation
  - Storage facilities
  - Hygiene equipment (gloves, aprons)
  - Pest control measures

**2. Food Handling Training**
- 30-minute video course (mandatory)
- Topics:
  - Personal hygiene
  - Food storage
  - Temperature control
  - Cross-contamination prevention
  - Cleaning procedures
- Quiz: Must pass with 80%+

**3. Temperature Checks**
- Food temperature at cooking: > 70°C
- Food temperature at delivery: > 60°C
- Delivery bags with thermal lining
- Regular spot checks

**4. Packaging Standards**
- Tamper-evident seals
- Microwave-safe containers
- Leak-proof packaging
- Eco-friendly materials preferred
- Branding on packaging

**5. Sample Preservation**
- Each chef must preserve 1 sample per day
- Sample kept for 24 hours
- In case of complaint: Sample testing at authorized lab
- Cost covered by platform

---

## 6. OPERATIONS & LOGISTICS

### 6.1 Home Chef Onboarding Process

**Step 1: Initial Screening (Day 1)**
- Phone call from operations team
- Basic information collection
- Check: Cooking experience, available hours, kitchen space
- Qualifying criteria: 2+ years cooking experience, 4+ hours/day availability

**Step 2: Online Assessment (Day 1-2)**
- Hygiene quiz (20 questions)
- Upload kitchen photos (min 3: cooking area, storage, overall)
- Upload government ID (Aadhaar/PAN)
- Upload FSSAI registration (help provided if needed)

**Step 3: Video Kitchen Inspection (Day 3-4)**
- 15-minute video call
- Checklist verification
- Real-time Q&A
- Approval/rejection decision

**Step 4: Training (Day 5)**
- Watch 30-minute training video
- Pass quiz (80% passing score)
- Review platform guidelines
- Sign agreement (digital)

**Step 5: Starter Kit (Day 7)**
- Delivered to chef:
  - Packaging materials (50 units)
  - Digital thermometer (1)
  - Disposable gloves (100)
  - Aprons (2)
  - Tamper-evident seals (100)
- Cost: ₹1,500 (deducted from first month's payout)

**Step 6: Trial Order (Day 10-12)**
- Mystery customer order
- Full quality check
- Final approval
- Go live

**Total Onboarding Time: 12-15 days**

### 6.2 Delivery System

**Model: Hyperlocal Dedicated Delivery**

**Zone Structure:**
- Bangalore divided into 10 zones (3-5km radius each)
- Each zone: 5-8 delivery partners
- Each delivery partner covers 2-3 km radius
- Overlap zones for peak hours

**Delivery Slots:**
- Lunch: 11:00 AM - 2:00 PM
- Dinner: 7:00 PM - 10:00 PM
- Flex slots for special orders

**Delivery Fee:**
- Standard: ₹20 (up to 3 km)
- Extended: ₹30 (3-5 km)
- Free for subscription users

**Delivery Partner Earnings:**
- Per order: ₹20-25
- Average 15-20 orders/day = ₹300-500/day
- Monthly: ₹9,000-15,000

**Delivery Quality:**
- Insulated delivery bags
- Temperature maintenance
- GPS tracking
- ETA calculation
- Customer rating for delivery

### 6.3 Quality Control

**1. Mystery Ordering**
- Frequency: 1 in 20 orders (5%)
- Process: Mystery customer orders from verified account
- Evaluation: Food quality, packaging, delivery time, hygiene
- Rating recorded in chef profile
- Failed orders: Chef notification + retraining

**2. Customer Rating Triggers**
- Rating < 3: Immediate inspection
- Rating < 4: Warning + training recommendation
- 3 consecutive low ratings: Temporary suspension

**3. Regular Refresher Training**
- Monthly: Top performer tips
- Quarterly: Mandatory hygiene refresher
- Yearly: Full training update

**4. Seasonal Menu Suggestions**
- Festival specials (Diwali, Holi, Eid)
- Seasonal recommendations (monsoon comfort food, summer coolers)
- Trending dishes (Instagram food trends)

---

## 7. MARKETING & GROWTH STRATEGY

### 7.1 Launch Plan (First Month)

**Pre-Launch (Week 0)**
- Build WhatsApp groups in target societies
- Create waitlist landing page
- Collect emails/phone numbers
- Teaser social media posts
- Partner with local influencers

**Week 1: Launch**
- Offer: 50% discount on first 100 orders
- WhatsApp broadcast to waitlist
- Launch event in pilot society
- Press release to local tech blogs
- Social media: "Day 1" stories

**Week 2: Referral Program**
- Offer: ₹100 credit for both referrer and referee
- Referral link sharing
- Leaderboard for top referrers
- Weekly winners get free meal

**Week 3: B2B Tie-ups**
- Partner with 5 PG/hostels
- Corporate lunch plans (3 offices)
- Bulk order discounts (15%)
- Commission to partners (5%)

**Week 4: Content Marketing**
- Home chef stories (Instagram Reels)
- Food photography challenges
- Customer testimonials
- Recipe sharing from home chefs

**Month 2: Expansion**
- Expand to 2 more neighborhoods
- College ambassadors program
- Google Ads targeting "home food near me"
- Local SEO optimization

### 7.2 Customer Acquisition Channels

**1. Digital Marketing (60% of budget)**
- Instagram/Facebook Ads: Target age 22-35, Bangalore
- Google Ads: Keywords "home food", "tiffin service", "homemade food"
- WhatsApp Marketing: Broadcast lists, group promotions
- Influencer Marketing: Local food bloggers, tech influencers

**2. Offline Marketing (25% of budget)**
- Flyers & posters in apartment complexes
- Standees at PG/hostels
- Food tasting events in societies
- College campus activations

**3. Partnerships (15% of budget)**
- Office park tie-ups for lunch
- Corporate wellness programs
- Student organizations
- Local businesses (gyms, co-working spaces)

### 7.3 Retention Strategy

**Loyalty Program:**
- Every 5th meal free
- Double points on weekends
- Birthday special: Free dessert
- Anniversary bonus: ₹500 credit

**Subscription Benefits:**
- Basic (₹199/month): Free delivery on 10+ orders
- Standard (₹299/month): 10% discount + free delivery
- Premium (₹499/month): 15% discount + priority delivery + exclusive dishes

**Personalization:**
- Recommendations based on past orders
- Cuisine preference tracking
- Dietary preference reminders
- Special occasion reminders (birthday, anniversary)

**Festival Specials:**
- Diwali: ₹500 thali at ₹399
- Christmas: Special cake pre-orders
- Eid: Biryani specials
- Holi: Sweets & snacks
- Navratri: Fasting food options

---

## 8. RISK MITIGATION & CONTINGENCY

### 8.1 Critical Risk Matrix

| Risk | Probability | Impact | Mitigation Strategy | Owner |
|------|-------------|--------|---------------------|-------|
| Food poisoning incident | Low | Critical | Insurance + emergency protocol + 24h sample preservation | Ops Manager |
| Regulatory crackdown | Medium | High | FSSAI compliance lawyer on retainer, regular audits | Legal Counsel |
| Delivery delays | High | Medium | Multiple riders per zone, real-time tracking, penalty for delays | Ops Manager |
| Payment failures | Medium | Medium | UPI fallback + COD option + Razorpay redundancy | Tech Lead |
| Home chef churn | Medium | High | 85% commission (vs 75% on competitors), community building | Founder |
| Platform downtime | Low | Critical | AWS auto-scaling, CDN, 99.9% uptime SLA | Tech Lead |
| Negative PR | Low | High | Crisis communication plan, quick response team | Marketing Lead |
| Competition | High | Medium | Differentiation (authentic home-cooked), loyalty program | Founder |
| Cash flow issues | Medium | High | 6-month runway, invoice factoring, payment terms | Founder |
| Data breach | Low | Critical | Encryption, regular security audits, GDPR compliance | Tech Lead |

### 8.2 Specific Incident Response Plans

**Food Poisoning Incident Response:**

1. **Immediate Actions (0-2 hours)**
   - Receive complaint via app/support
   - Appologize to customer
   - Issue full refund immediately
   - Pause chef's orders temporarily
   - Preserve chef's food sample for testing

2. **Investigation (2-24 hours)**
   - Collect customer details and symptoms
   - Test food sample at FSSAI authorized lab
   - Interview chef about preparation
   - Check for other complaints from same chef

3. **Resolution (24-48 hours)**
   - Lab results confirm/not confirm contamination
   - If confirmed: Chef suspended permanently, insurance claim initiated
   - If not confirmed: Chef reinstated, informed customer
   - Public statement (if multiple complaints)
   - Review of all similar dishes

4. **Follow-up (48 hours+)**
   - Customer follow-up
   - Review and strengthen protocols
   - Update incident response plan

**Delivery Delays Response:**

1. **Prevention**
   - ETA buffer: Add 15 minutes to estimated time
   - Real-time tracking
   - Multiple delivery partners per zone
   - Peak hour surge pricing for delivery partners

2. **Mitigation**
   - Auto-notify customer of delay
   - Compensation: ₹50 credit for >30 min delay
   - Priority delivery for VIP users
   - Backup delivery partner assignment

3. **Post-incident**
   - Root cause analysis
   - Delivery partner training
   - Zone redistribution

**Payment Failures Response:**

1. **Real-time**
   - Retry failed transactions automatically (max 3 attempts)
   - Fallback to COD if UPI fails
   - Notify customer of issue

2. **Follow-up**
   - Support team contacts customer
   - Order placed manually if needed
   - Technical investigation

3. **Prevention**
   - Multiple payment gateway redundancy
   - Regular testing of payment flows
   - Monitor failure rates

### 8.3 Exit Strategy Options

**Option 1: Acquisition**
- Target: Zomato, Swiggy, or regional players
- Valuation: 5-7x annual revenue
- Timeline: 2-3 years with strong traction

**Option 2: Pivot**
- Cloud kitchen model if home chef regulations change
- B2B corporate catering focus
- Wedding/events catering

**Option 3: Geographic Expansion**
- Tier 2/3 cities with different pricing
- International expansion (NRI demand for home-cooked Indian food)

**Option 4: White-label Solution**
- Platform licensing for apartment complexes
- SaaS model for other food startups
- Technology licensing

---

## 9. METRICS & SUCCESS MEASUREMENT

### 9.1 Key Metrics Dashboard

**User Metrics:**
- Daily Active Users (DAU): Target 500 by month 6
- Monthly Active Users (MAU): Target 2,000 by month 6
- Customer Acquisition Cost (CAC): Target < ₹200
- Customer Lifetime Value (CLV): Target > ₹1,500
- CLV/CAC Ratio: Target > 7.5
- Retention Rate: Target 40% monthly active users
- Order Frequency: Target 2.5 orders/user/month

**Business Metrics:**
- Orders/day: Target 500 by month 6
- Average Order Value (AOV): Target ₹120
- Monthly Revenue: Target ₹9L by month 6
- Commission Revenue: 15% of food value
- Delivery Fee Revenue: ₹20/order
- Subscription Revenue: Target ₹1L/month by month 6

**Chef Metrics:**
- Active Home Chefs: Target 100 by month 6
- Chef Churn Rate: Target < 10%/month
- Chef Earnings: Target ₹15-20k/month (part-time)
- Average Orders/Chef/Day: Target 5 by month 6
- Chef Satisfaction: Target 4.2/5 rating

**Delivery Metrics:**
- On-Time Delivery Rate: Target 90%
- Average Delivery Time: Target 35 minutes
- Delivery Partner Utilization: Target 70%
- Delivery Partner Rating: Target 4.3/5

**Quality Metrics:**
- Average Rating: Target 4.2/5
- Complaint Rate: Target < 2%
- Repeat Order Rate: Target 60% by month 6
- Refund Rate: Target < 1%

### 9.2 Financial Projections (6-Month)

**Month 1 (Pilot):**
- Orders: 30/day (900/month)
- AOV: ₹100
- Gross Revenue: ₹90,000
- Commission Revenue (15%): ₹13,500
- Delivery Fee Revenue: ₹18,000
- **Total Revenue: ₹31,500**
- Expenses: ₹80,000 (team + infra + marketing)
- **Net: -₹48,500**

**Month 2:**
- Orders: 60/day (1,800/month)
- AOV: ₹105
- Gross Revenue: ₹1,89,000
- Commission Revenue (15%): ₹28,350
- Delivery Fee Revenue: ₹36,000
- **Total Revenue: ₹64,350**
- Expenses: ₹90,000
- **Net: -₹25,650**

**Month 3:**
- Orders: 150/day (4,500/month)
- AOV: ₹110
- Gross Revenue: ₹4,95,000
- Commission Revenue (15%): ₹74,250
- Delivery Fee Revenue: ₹90,000
- Subscription Revenue: ₹20,000
- **Total Revenue: ₹1,84,250**
- Expenses: ₹1,10,000
- **Net: +₹74,250** **[First Profit!]**

**Month 4:**
- Orders: 250/day (7,500/month)
- AOV: ₹115
- Gross Revenue: ₹8,62,500
- Commission Revenue (15%): ₹1,29,375
- Delivery Fee Revenue: ₹1,50,000
- Subscription Revenue: ₹50,000
- **Total Revenue: ₹3,29,375**
- Expenses: ₹1,40,000
- **Net: +₹1,89,375**

**Month 5:**
- Orders: 350/day (10,500/month)
- AOV: ₹118
- Gross Revenue: ₹12,39,000
- Commission Revenue (15%): ₹1,85,850
- Delivery Fee Revenue: ₹2,10,000
- Subscription Revenue: ₹80,000
- **Total Revenue: ₹4,75,850**
- Expenses: ₹1,70,000
- **Net: +₹3,05,850**

**Month 6:**
- Orders: 500/day (15,000/month)
- AOV: ₹120
- Gross Revenue: ₹18,00,000
- Commission Revenue (15%): ₹2,70,000
- Delivery Fee Revenue: ₹3,00,000
- Subscription Revenue: ₹1,00,000
- **Total Revenue: ₹6,70,000**
- Expenses: ₹2,00,000
- **Net: +₹4,70,000**

**6-Month Summary:**
- Total Orders: 39,900
- Total Revenue: ₹17,55,325
- Total Expenses: ₹7,90,000
- **Net Profit: ₹9,65,325**
- **Breakeven: Month 3**

---

## 10. FUNDING STRATEGY

### 10.1 Initial Funding Needs (6-Month Runway)

**Total Required: ₹25,00,000**

**Breakdown:**
- Team & Operations (3 months): ₹10,00,000
- Infrastructure (6 months): ₹90,000
- Marketing & Launch: ₹4,00,000
- Legal & Compliance: ₹1,00,000
- Working Capital: ₹6,00,000
- Contingency (20%): ₹4,00,000

### 10.2 Funding Sources

**Option 1: Self-Funding + Friends & Family**
- Founder savings: ₹5,00,000
- Friends & Family: ₹5,00,000
- **Total: ₹10,00,000**

**Option 2: Government Schemes**

**Startup India Seed Fund**
- Eligibility: Incorporated < 2 years, innovative idea
- Amount: Up to ₹50,00,000
- Application: Startup India portal
- Time: 2-3 months
- **Target: ₹5,00,000**

**State Government Schemes (Karnataka):**
- Karnataka Startup Policy
- Funding: Up to ₹50,00,000
- **Target: ₹2,00,000**

**Option 3: Angel Investors**
- Target: Food tech angels, regional investors
- List:
  - Sanjeev Bikhchandani (Info Edge)
  - Rajan Anandan (Sequoia India)
  - Kris Gopalakrishnan (Infosys co-founder)
- Ask: ₹10,00,000 for 10% equity
- **Total: ₹10,00,000**

**Option 4: Revenue from Day 1**
- Commission on all orders from Day 1
- Expected: ₹31,500 (Month 1)
- Cumulative by Month 6: ₹17,55,325
- **Self-funding from Month 3 onwards**

### 10.3 Pitch Deck Structure

**Slide 1: Title**
- GharKaKhana - Authentic Home-Cooked Food Delivery
- Tagline: "घर जैसा खाना, हर रोज़"
- Founder: [Your Name]

**Slide 2: The Problem**
- Urban Indians crave authentic homemade food
- Restaurant food: Expensive (₹200+), unhealthy, lacks authenticity
- Tiffin services: Limited variety, fixed schedules
- Gap: No reliable platform for on-demand home-cooked food

**Slide 3: Our Solution**
- Connect verified home chefs with customers
- Fresh food prepared after order
- 40% cheaper than restaurants
- Authentic regional cuisines
- Flexible ordering (no subscriptions required)

**Slide 4: Market Opportunity**
- Indian food delivery market: ₹45,000 crore
- Home-cooked segment: 20% (₹9,000 crore)
- Target: Urban migrants, students, professionals
- Bangalore pilot: 50+ lakh potential customers

**Slide 5: Product**
- User app: Browse, order, track in real-time
- Home chef app: Easy menu management, daily payouts
- Features: Live tracking, reviews, subscription plans

**Slide 6: Business Model**
- Commission: 15% on all orders
- Delivery fee: ₹20/order
- Subscription: ₹199-499/month
- B2B partnerships: Corporate lunch plans

**Slide 7: Traction (Pilot Results)**
- Pilot in [Society Name]: 20 users, 15 days
- Orders: 200+
- Repeat rate: 65%
- Average rating: 4.3/5
- Top dishes: Dal Rice, Rajma Chawal

**Slide 8: Go-to-Market Strategy**
- Launch: Bangalore (Koramangala, HSR Layout)
- Marketing: WhatsApp, influencers, college ambassadors
- Partnerships: PG/hostels, corporate lunch plans
- Expansion: 1 new neighborhood/month

**Slide 9: Competitive Advantage**
- 85% commission to chefs (vs 70-75% competitors)
- Real-time order tracking
- FSSAI verified home chefs
- Lower prices (40% cheaper than restaurants)
- Regional cuisine specialists

**Slide 10: Roadmap**
- Month 1-3: Bangalore pilot
- Month 4-6: 3 cities, 100+ home chefs
- Month 7-12: 10 cities, 500+ home chefs
- Year 2: Pan-India presence

**Slide 11: Team**
- Founder: [Your background]
- Tech Lead: [Name], 5 years React Native experience
- Operations: [Name], 3 years food tech experience
- Advisor: [Name], ex-Zomato

**Slide 12: Financials**
- Month 3 breakeven
- Month 6: ₹4.7L profit/month
- Year 1 revenue: ₹2+ crore
- Year 2 revenue: ₹8+ crore

**Slide 13: The Ask**
- Seeking: ₹50,00,000 for 20% equity
- Use of funds:
  - Team expansion: ₹20L
  - Marketing: ₹15L
  - Operations: ₹10L
  - Contingency: ₹5L
- Runway: 12 months

**Slide 14: Contact**
- Email: founder@gharkakhana.in
- Phone: +91-XXXXXXXXXX
- Website: GharKaKhana.in

---

## 11. SAMPLE LEGAL DOCUMENTS

### 11.1 Terms of Service (Bilingual)

**ENGLISH VERSION:**

```
Terms of Service
GharKaKhana (A Private Limited Company)

Last Updated: [Date]

1. ACCEPTANCE OF TERMS

By accessing or using GharKaKhana platform (the "Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Platform.

2. DEFINITIONS

"Platform" means GharKaKhana's mobile application, website, and related services.
"User" means any person who uses the Platform to order food.
"Home Chef" means any registered individual who prepares and sells food through the Platform.
"Delivery Partner" means any registered individual who delivers food orders.

3. USER ELIGIBILITY

To use the Platform, you must:
- Be at least 18 years of age
- Have the legal capacity to enter into a contract
- Provide accurate and complete information
- Maintain the security of your account

4. HOME CHEF REQUIREMENTS

Home Chefs must:
- Be at least 18 years of age
- Have valid FSSAI registration or Basic License
- Maintain hygiene standards as specified by FSSAI
- Use tamper-evident packaging
- Comply with all applicable food safety laws

5. ORDERS AND PAYMENTS

Orders are subject to availability and Home Chef acceptance.
Payments can be made via UPI, credit/debit card, net banking, or COD.
All prices are in Indian Rupees (INR) and include applicable taxes unless specified.
Delivery fee of ₹20 is charged per order.

6. FOOD SAFETY AND HYGIENE

While we verify Home Chefs and monitor quality, we cannot guarantee that all food will meet every individual's standards. Users with allergies or specific dietary requirements should inform the Home Chef before ordering.

7. CANCELLATION AND REFUNDS

Orders can be cancelled before the Home Chef accepts the order.
After acceptance, cancellations are at Home Chef's discretion.
Refunds are processed within 5-7 business days.

8. LIMITATION OF LIABILITY

To the maximum extent permitted by law, GharKaKhana shall not be liable for:
- Any indirect, incidental, or consequential damages
- Food quality issues (contact Home Chef directly)
- Delivery delays
- Any damages exceeding the order value

9. INTELLECTUAL PROPERTY

All content on the Platform is owned by GharKaKhana or its licensors.

10. MODIFICATIONS

We reserve the right to modify these Terms at any time. Continued use of the Platform constitutes acceptance of modified Terms.

11. GOVERNING LAW

These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.

12. CONTACT

For questions, contact us at: support@gharkakhana.in
```

**HINDI VERSION:**

```
सेवा की शर्तें
घर का खाना (एक प्राइवेट लिमिटेड कंपनी)

अंतिम अपडेट: [तारीख]

1. शर्तों की स्वीकृति

GharKaKhana प्लेटफॉर्म तक पहुंचकर या उसका उपयोग करके, आप इन सेवा की शर्तों ("शर्तें") से बंधे होने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया प्लेटफॉर्म का उपयोग न करें।

2. परिभाषाएं

"प्लेटफॉर्म" का अर्थ GharKaKhana का मोबाइल एप्लिकेशन, वेबसाइट और संबंधित सेवाएं हैं।
"उपयोगकर्ता" का अर्थ कोई भी व्यक्ति है जो भोजन का ऑर्डर करने के लिए प्लेटफॉर्म का उपयोग करता है।
"होम शेफ" का अर्थ कोई भी पंजीकृत व्यक्ति है जो प्लेटफॉर्म के माध्यम से भोजन तैयार करता और बेचता है।
"डिलीवरी पार्टनर" का अर्थ कोई भी पंजीकृत व्यक्ति है जो खाद्य ऑर्डर पहुंचाता है।

3. उपयोगकर्ता पात्रता

प्लेटफॉर्म का उपयोग करने के लिए, आपको होना चाहिए:
- कम से कम 18 वर्ष की आयु
- अनुबंध में प्रवेश करने की कानूनी क्षमता
- सटीक और पूर्ण जानकारी प्रदान करें
- अपने खाते की सुरक्षा बनाए रखें

4. होम शेफ आवश्यकताएं

होम शेफ को:
- कम से कम 18 वर्ष की आयु होनी चाहिए
- मान्य FSSAI पंजीकरण या बेसिक लाइसेंस होना चाहिए
- FSSAI द्वारा निर्दिष्ट स्वच्छता मानक बनाए रखें
- टैम्पर-सबूत पैकेजिंग का उपयोग करें
- लागू सभी खाद्य सुरक्षा कानूनों का पालन करें

5. ऑर्डर और भुगतान

ऑर्डर उपलब्धता और होम शेफ की स्वीकृति के अधीन हैं।
भुगतान UPI, क्रेडिट/डेबिट कार्ड, नेट बैंकिंग या COD के माध्यम से किया जा सकता है।
सभी कीमतें भारतीय रुपये (INR) में हैं और जब तक निर्दिष्ट न हो, लागू कर शामिल हैं।
प्रति ऑर्डर ₹20 की डिलीवरी शुल्क लगाया जाता है।

6. खाद्य सुरक्षा और स्वच्छता

जबकि हम होम शेफ को सत्यापित करते हैं और गुणवत्ता की निगरानी करते हैं, हम यह गारंटी नहीं दे सकते कि सभी खाद्य पदार्थ हर व्यक्तिगत मानकों को पूरा करेंगे। एलर्जी या विशिष्ट आहार आवश्यकताओं वाले उपयोगकर्ताओं को ऑर्डर करने से पहले होम शेफ को सूचित करना चाहिए।

7. रद्दीकरण और रिफंड

होम शेफ द्वारा ऑर्डर स्वीकार करने से पहले ऑर्डर रद्द किए जा सकते हैं।
स्वीकृति के बाद, रद्दीकरण होम शेफ के विवेक पर है।
रिफंड 5-7 कार्य दिवसों के भीतर संसाधित किए जाते हैं।

8. दायित्व की सीमा

कानून द्वारा अनुमत अधिकतम सीमा तक, GharKaKhana उत्तरदायी नहीं होगा:
- किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी क्षति
- खाद्य गुणवत्ता के मुद्दों (होम शेफ से सीधे संपर्क करें)
- डिलीवरी में देरी
- ऑर्डर मूल्य से अधिक कोई भी क्षति

9. बौद्धिक संपदा

प्लेटफॉर्म पर सभी सामग्री GharKaKhana या इसके लाइसेंसकर्ताओं की संपत्ति है।

10. संशोधन

हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। प्लेटफॉर्म का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाता है।

11. शासी कानून

ये शर्तें भारत के कानूनों द्वारा शासित हैं। किसी भी विवाद को बैंगलोर, कर्नाटक की अदालतों के अनन्य अधिकार क्षेत्र के अधीन किया जाएगा।

12. संपर्क

प्रश्नों के लिए, हमसे संपर्क करें: support@gharkakhana.in
```

### 11.2 Privacy Policy Template

```
PRIVACY POLICY
GharKaKhana (A Private Limited Company)

Last Updated: [Date]

1. INTRODUCTION

GharKaKhana ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.

2. INFORMATION WE COLLECT

2.1 Personal Information
- Name, phone number, email address
- Delivery address and location data
- Payment information (processed securely through Razorpay)
- Profile photos (optional)

2.2 Transaction Information
- Order history
- Payment history
- Ratings and reviews

2.3 Device Information
- Device ID and model
- Operating system
- Location services data

3. HOW WE USE YOUR INFORMATION

3.1 To Provide Services
- Process orders and payments
- Coordinate delivery
- Provide customer support

3.2 To Improve Services
- Analyze usage patterns
- Personalize recommendations
- Develop new features

3.3 To Communicate
- Order updates and notifications
- Promotional messages (with consent)
- Customer service communications

4. INFORMATION SHARING

We do not sell your personal information. We may share information with:
- Home Chefs (delivery address, order details, phone number)
- Delivery Partners (delivery address, phone number)
- Payment Processors (Razorpay - payment information)
- Service Providers (SMS gateway, analytics tools)
- Legal authorities (when required by law)

5. DATA SECURITY

We implement industry-standard security measures:
- SSL/TLS encryption for data transmission
- Secure payment processing
- Regular security audits
- Access controls and authentication

6. DATA RETENTION

We retain your information for as long as necessary to provide services and comply with legal obligations. You can request deletion of your account and personal data.

7. YOUR RIGHTS

Under the IT Act, 2000, you have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your data
- Withdraw consent for marketing communications
- Opt out of data processing

8. THIRD-PARTY SERVICES

Our platform integrates with:
- Razorpay (payments)
- MSG91 (SMS)
- Google Maps (location)
- Firebase (push notifications)

Each service has its own privacy policy.

9. CHILDREN'S PRIVACY

Our services are not intended for children under 18. We do not knowingly collect information from minors.

10. CHANGES TO THIS POLICY

We may update this policy periodically. We will notify you of significant changes via email or app notification.

11. CONTACT US

For privacy-related queries:
Email: privacy@gharkakhana.in
Phone: +91-XXXXXXXXXX
Address: [Your Office Address]
```

### 11.3 Home Chef Agreement Template

```
HOME CHEF SERVICE AGREEMENT

This Agreement is entered into on [Date] between:
GharKaKhana Private Limited, with registered office at [Address] ("Platform")
AND
[Chef Name], residing at [Address] ("Home Chef")

1. DEFINITIONS

"Platform" means GharKaKhana's food delivery service.
"Home Chef" means the individual preparing and selling food through the Platform.
"Dishes" means food items listed by the Home Chef on the Platform.

2. APPOINTMENT

The Platform appoints the Home Chef as an independent contractor to prepare and sell Dishes through the Platform. The Home Chef is not an employee of the Platform.

3. OBLIGATIONS OF THE HOME CHEF

3.1 Food Safety and Hygiene
- Maintain valid FSSAI Basic Registration or License
- Follow all FSSAI guidelines and food safety standards
- Maintain cleanliness in kitchen and food preparation areas
- Use fresh ingredients
- Prepare food in hygienic conditions
- Use tamper-evident packaging provided by Platform

3.2 Quality Standards
- Ensure Dishes meet the quality described in listings
- Maintain consistent taste and portion sizes
- Update availability accurately on Platform
- Remove unavailable Dishes immediately

3.3 Order Fulfillment
- Accept or reject orders within 15 minutes
- Start preparation within 30 minutes of acceptance
- Maintain estimated preparation times
- Update order status accurately on Platform
- Inform Platform immediately of any issues

3.4 Customer Service
- Respond to customer messages promptly
- Handle customer complaints professionally
- Accept constructive feedback
- Maintain rating of at least 4.0/5.0

4. OBLIGATIONS OF THE PLATFORM

4.1 Order Acquisition
- Display Home Chef's Dishes to Users
- Process orders and payments
- Facilitate delivery coordination

4.2 Payments
- Pay Home Chef 85% of food value
- Process weekly payouts
- Provide detailed payout statements

4.3 Support
- Provide technical support for Platform usage
- Assist with dispute resolution
- Provide marketing and promotional opportunities

5. COMMISSION AND PAYMENTS

5.1 Commission
- Platform deducts 15% commission on each order
- Home Chef receives 85% of food value

5.2 Payout Schedule
- Payouts processed weekly (every Friday)
- Orders delivered by Sunday included in Friday payout
- Orders delivered after Sunday included in next cycle

5.3 Payment Method
- Payments made via bank transfer
- Home Chef must provide valid bank account details
- Platform reserves right to withhold payments for disputes or violations

6. INTELLECTUAL PROPERTY

Home Chef grants Platform non-exclusive rights to use:
- Dish photographs
- Chef profile photo
- Dish descriptions
- For marketing and promotional purposes

7. LIABILITY

7.1 Home Chef Liability
Home Chef is solely responsible for:
- Food quality and safety
- Food poisoning or health issues
- Packaging integrity
- Customer satisfaction

7.2 Platform Liability
Platform is not liable for:
- Customer dissatisfaction with food quality
- Delivery delays
- Third-party payment issues
- Acts beyond Platform's control

8. TERMINATION

8.1 By Home Chef
- 30-day written notice required
- Outstanding orders must be completed

8.2 By Platform
Immediate termination if Home Chef:
- Violates food safety standards
- Receives rating below 3.0 for 3 consecutive orders
- Commits fraud or misrepresentation
- Violates any terms of this agreement

8.3 Consequences of Termination
- Final payout within 15 days
- Outstanding orders must be fulfilled
- Non-compete for 30 days in same area

9. INDEMNIFICATION

Home Chef indemnifies Platform against:
- All claims related to food quality or safety
- Legal actions resulting from Home Chef's negligence
- Damages awarded to customers

10. GOVERNING LAW

This agreement is governed by laws of India. Disputes subject to exclusive jurisdiction of courts in Bangalore, Karnataka.

11. AMENDMENTS

Platform reserves right to amend terms with 30-day notice. Continued use constitutes acceptance.

12. SIGNATORIES

For GharKaKhana Private Limited:
_________________________
Authorized Signatory
Date: ________________

For Home Chef:
_________________________
[Chef Name]
Date: ________________
```

### 11.4 Delivery Partner Contract Template

```
DELIVERY PARTNER SERVICE AGREEMENT

This Agreement is entered into on [Date] between:
GharKaKhana Private Limited, with registered office at [Address] ("Platform")
AND
[Delivery Partner Name], with ID proof [Aadhaar Number] ("Delivery Partner")

1. DEFINITIONS

"Platform" means GharKaKhana's food delivery service.
"Delivery Partner" means the individual delivering food orders.
"Order" means a food delivery request assigned by the Platform.

2. APPOINTMENT

The Platform appoints the Delivery Partner as an independent contractor. The Delivery Partner is not an employee of the Platform.

3. OBLIGATIONS OF THE DELIVERY PARTNER

3.1 Service Standards
- Accept assigned orders promptly
- Pick up order within specified time
- Deliver within estimated time
- Maintain customer satisfaction

3.2 Professional Conduct
- Be courteous and professional with customers
- Handle food packages with care
- Maintain personal hygiene
- Wear delivery uniform (provided by Platform)

3.3 Equipment
- Maintain delivery vehicle in good condition
- Use insulated delivery bags
- Keep vehicle clean
- Ensure GPS tracking is enabled

3.4 Safety
- Follow traffic rules
- Drive responsibly
- Maintain valid driving license
- Ensure vehicle is registered and insured

4. OBLIGATIONS OF THE PLATFORM

4.1 Order Assignment
- Provide delivery orders
- Provide customer contact details
- Provide pickup and drop locations
- Provide estimated delivery times

4.2 Payments
- Pay delivery fee per order (₹20-25)
- Process weekly payouts
- Provide detailed payout statements

4.3 Support
- Provide technical support
- Assist with route planning
- Provide customer service assistance

5. COMMISSION AND PAYMENTS

5.1 Delivery Fee
- Standard orders: ₹20 per order
- Extended distance: ₹25 per order
- Peak hours bonus: ₹5 per order

5.2 Payout Schedule
- Weekly payouts (every Friday)
- Orders delivered by Sunday included in Friday payout
- Payments via bank transfer

6. PERFORMANCE REQUIREMENTS

6.1 Minimum Performance
- Accept 80% of assigned orders
- Maintain rating of at least 4.0/5.0
- Complete 90% of accepted orders
- On-time delivery rate of 85%

6.2 Consequences of Non-Performance
- Warning for first violation
- Temporary suspension for second violation
- Termination for third violation

7. INSURANCE AND LIABILITY

7.1 Delivery Partner Insurance
Delivery Partner must maintain:
- Valid vehicle insurance
- Personal accident insurance

7.2 Liability
Delivery Partner is liable for:
- Damages to customer property
- Food damage during transit
- Traffic violations

8. TERMINATION

8.1 By Delivery Partner
- 7-day notice required
- Outstanding orders must be completed

8.2 By Platform
Immediate termination if Delivery Partner:
- Violates safety rules
- Receives rating below 3.0
- Commits fraud or theft
- Violates terms of agreement

9. INDEMNIFICATION

Delivery Partner indemnifies Platform against:
- Claims from third parties due to negligence
- Legal actions resulting from Delivery Partner's actions
- Damages resulting from traffic violations

10. GOVERNING LAW

This agreement is governed by laws of India. Disputes subject to exclusive jurisdiction of courts in Bangalore, Karnataka.

11. SIGNATORIES

For GharKaKhana Private Limited:
_________________________
Authorized Signatory
Date: ________________

For Delivery Partner:
_________________________
[Delivery Partner Name]
Date: ________________
```

---

## 12. DAY 1 LAUNCH CHECKLIST

### 12.1 Pre-Launch (30 Days Before)

**Legal & Compliance**
- [ ] Register Private Limited Company
- [ ] Obtain GST Registration
- [ ] Get FSSAI Basic License for Platform
- [ ] Open bank account
- [ ] Get insurance (food liability, product liability, public liability)
- [ ] Finalize and sign all legal agreements
- [ ] Register trademarks

**Technology**
- [ ] Finalize tech stack and architecture
- [ ] Set up development environment
- [ ] Create database schema
- [ ] Set up version control (Git)
- [ ] Configure CI/CD pipeline
- [ ] Set up monitoring and logging
- [ ] Implement backup strategy

**Design**
- [ ] Finalize brand colors and logo
- [ ] Create design system (components, typography)
- [ ] Design all app screens (wireframes + high-fidelity)
- [ ] Create marketing materials (brochures, flyers)
- [ ] Prepare social media templates

**Operations**
- [ ] Hire core team (if not already)
- [ ] Set up office space
- [ ] Create standard operating procedures (SOPs)
- [ ] Prepare training materials
- [ ] Set up customer support systems

### 12.2 2 Weeks Before Launch

**Team**
- [ ] Conduct final training sessions
- [ ] Test all features internally
- [ ] Create launch day schedule
- [ ] Assign roles and responsibilities

**Marketing**
- [ ] Set up social media accounts
- [ ] Create landing page
- [ ] Build waitlist
- [ ] Prepare press release
- [ ] Contact local bloggers and influencers

**Home Chefs**
- [ ] Onboard 50 home chefs
- [ ] Verify all chefs (kitchen inspection, FSSAI, etc.)
- [ ] Conduct training sessions
- [ ] Deliver starter kits
- [ ] Test order with each chef

**Delivery**
- [ ] Recruit 20 delivery partners
- [ ] Verify all delivery partners
- [ ] Deliver insulated bags
- [ ] Test delivery routes

### 12.3 1 Week Before Launch

**Technology**
- [ ] Deploy to production
- [ ] Load testing
- [ ] Security audit
- [ ] Payment integration testing
- [ ] SMS gateway testing
- [ ] Push notification testing

**Marketing**
- [ ] Start social media teasers
- [ ] Send waitlist emails
- [ ] Prepare launch day posts
- [ ] Schedule content calendar

**Operations**
- [ ] Finalize emergency protocols
- [ ] Prepare customer support FAQs
- [ ] Set up dispute resolution process
- [ ] Test refund process

### 12.4 Launch Day (Day 0)

**Morning (6:00 AM - 10:00 AM)**
- [ ] Wake up call to all home chefs
- [ ] Confirm all chefs are online
- [ ] Verify all delivery partners are online
- [ ] Test app functionality
- [ ] Check all systems (payment, SMS, notifications)

**Launch (10:00 AM)**
- [ ] Go live in app stores
- [ ] Launch marketing campaigns
- [ ] Send WhatsApp broadcast to waitlist
- [ ] Publish social media posts
- [ ] Issue press release

**Monitoring (Throughout Day)**
- [ ] Monitor order flow
- [ ] Track app performance
- [ ] Respond to customer queries
- [ ] Address any issues immediately
- [ ] Collect feedback from first customers

**Evening (8:00 PM - 10:00 PM)**
- [ ] Review day's performance
- [ ] Count total orders
- [ ] Check feedback and ratings
- [ ] Identify issues
- [ ] Plan improvements for tomorrow

**Post-Launch (After 10:00 PM)**
- [ ] Backup all data
- [ ] Send thank-you messages to first customers
- [ ] Prepare tomorrow's operations
- [ ] Review lessons learned
- [ ] Update any necessary processes

### 12.5 Week 1 Checklist

**Daily Tasks (Monday-Sunday)**
- [ ] Monitor orders and revenue
- [ ] Check app performance
- [ ] Respond to customer support tickets
- [ ] Monitor home chef activity
- [ ] Check delivery partner performance
- [ ] Collect and analyze feedback

**Weekly Tasks (Sunday)**
- [ ] Review week's performance
- [ ] Calculate key metrics
- [ ] Pay home chefs
- [ ] Pay delivery partners
- [ ] Send weekly newsletter
- [ ] Plan next week's marketing

**Emergency Contacts**

| Service | Name | Phone | Email |
|---------|------|-------|-------|
| FSSAI Consultant | Mr. Sharma | +91-98765XXXXX | sharma@fssai-consult.com |
| Legal Advisor | Ms. Priya | +91-98765XXXXX | priya@legal-firm.in |
| Food Safety Lab | City Lab | +91-98765XXXXX | info@citylab.com |
| Payment Gateway | Razorpay Support | +91-98765XXXXX | support@razorpay.com |
| SMS Gateway | MSG91 Support | +91-98765XXXXX | support@msg91.com |

---

## 13. ACTIONABLE NEXT STEPS

### Week 1 Actions

1. **Business Registration (Day 1-3)**
   - Contact company registration consultant
   - Gather required documents
   - Submit application for Private Limited Company
   - Apply for FSSAI Basic License

2. **Domain & Branding (Day 1-2)**
   - Register GharKaKhana.in
   - Order logo design on Fiverr/Canva Pro
   - Create brand guidelines document

3. **Team Assembly (Day 1-7)**
   - Interview and hire 2 React Native developers
   - Interview and hire 1 Node.js backend developer
   - Interview and hire 1 UI/UX designer
   - Set up project management tool (Jira/Trello)

4. **Technology Setup (Day 3-7)**
   - Set up AWS account (Mumbai region)
   - Configure development environment
   - Set up GitHub repository
   - Create project structure
   - Initialize database

5. **Legal Documentation (Day 3-5)**
   - Draft Terms of Service (English + Hindi)
   - Draft Privacy Policy
   - Draft Home Chef Agreement
   - Draft Delivery Partner Contract
   - Get lawyer review

### Week 2 Actions

6. **Design System (Day 8-10)**
   - Create color palette
   - Choose typography
   - Design UI components
   - Create design system document

7. **Architecture Design (Day 8-10)**
   - Finalize system architecture
   - Create database schema
   - Define API endpoints
   - Create technical specification document

8. **Home Chef Recruitment (Day 8-14)**
   - Create home chef onboarding form
   - Start recruitment campaigns
   - Begin kitchen inspections
   - Collect FSSAI documents

9. **Marketing Preparation (Day 8-14)**
   - Create landing page
   - Set up social media accounts
   - Prepare marketing materials
   - Build waitlist

10. **Infrastructure Setup (Day 8-14)**
    - Set up AWS EC2 instance
    - Configure RDS PostgreSQL
    - Set up Redis cache
    - Configure S3 bucket
    - Set up CloudFront CDN

---

## CONCLUSION

GharKaKhana presents a compelling opportunity in the ₹45,000 crore Indian food delivery market. With a clear value proposition of authentic home-cooked food at 40% lower cost than restaurants, strong unit economics, and a 3-month path to profitability, the business is well-positioned for success.

**Key Success Factors:**
1. Quality home chef verification and management
2. Excellent customer experience (fast, reliable delivery)
3. Strong unit economics (15% commission, ₹20 delivery fee)
4. Effective customer acquisition and retention
5. Robust technology platform

**Timeline to Breakeven: Month 3**
**Timeline to ₹1L revenue: Month 4**
**Timeline to Pan-India: 12 months**

With the right execution, GharKaKhana can capture a significant share of the home-cooked food market and become a household name across India.

---

**Document Version: 1.0**
**Created: January 2025**
**Next Review: March 2025**

---

## APPENDICES

### Appendix A: API Endpoints List

See separate API documentation file.

### Appendix B: Financial Model Spreadsheet

See separate Excel file.

### Appendix C: Marketing Calendar

See separate marketing calendar document.

### Appendix D: Risk Assessment Matrix

See separate risk assessment document.

### Appendix E: Hiring Plan

See separate hiring plan document.

---

END OF BUSINESS PLAN
