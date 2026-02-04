# GharKaKhana - Complete Business & Technical Guide
## Production-Ready Documentation for Full Deployment

**Version:** 1.0.0
**Created:** January 2025
**Purpose:** Complete guide for AI agent to build and deploy fully functional platform

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Business Foundation](#business-foundation)
3. [Technical Architecture](#technical-architecture)
4. [Database Schema](#database-schema)
5. [API Documentation](#api-documentation)
6. [Legal Documents](#legal-documents)
7. [Deployment & Infrastructure](#deployment--infrastructure)
8. [Operations & Logistics](#operations--logistics)
9. [Marketing Strategy](#marketing-strategy)
10. [Financial Projections](#financial-projections)
11. [Development Roadmap](#development-roadmap)
12. [Launch Checklist](#launch-checklist)
13. [Risk Mitigation](#risk-mitigation)
14. [Contact Information](#contact-information)

---

## EXECUTIVE SUMMARY

### Project Overview

**GharKaKhana** is a hyperlocal home-cooked food delivery platform connecting urban Indians with verified home chefs.

**Mission:** Authentic home-cooked meals at 40% lower cost than restaurants.

**Market Opportunity:**
- Indian food delivery market: ₹45,000 crore
- Home-cooked segment: 20% (₹9,000 crore opportunity)
- Target: Urban migrants, students, professionals in Tier 1 cities

**Business Model:**
- Commission: 15% on all orders
- Delivery fee: ₹20 per order
- Subscription plans: ₹199/₹299/₹499 per month

**Financial Highlights:**
- Initial investment: ₹25 lakhs for 6-month runway
- Breakeven: Month 3
- Month 6 profit: ₹4.7 lakhs/month

### Quick Start for AI Agent

To build and deploy GharKaKhana, follow this sequence:

1. **Week 1-2:** Setup, database, authentication system
2. **Week 3-4:** User app frontend and backend
3. **Week 5-6:** Home chef app and admin dashboard
4. **Week 7-8:** Payment integration and testing
5. **Week 9:** Pilot with 20 users
6. **Week 10:** Launch in Koramangala/HSR Layout, Bangalore

**Tech Stack:**
- Frontend: Next.js 16 + React + TypeScript
- UI Framework: shadcn/ui + Tailwind CSS
- State Management: Zustand + TanStack Query
- Database: Prisma ORM + PostgreSQL (production), SQLite (development)
- Backend: Next.js API Routes
- Authentication: Phone OTP via MSG91
- Payments: Razorpay
- Hosting: AWS Mumbai / Digital Ocean Bangalore
- Cache: Redis
- Storage: AWS S3

---

## BUSINESS FOUNDATION

### Branding

**Name Options with .in Domains:**

1. **GharKaKhana.in** (Primary - easy to remember)
2. **HomeMadeKhana.in** (English alternative)
3. **GharJaisaKhana.in** (Hindi phrase meaning "food like home")
4. **PureDesiKhana.in** (Authentic Indian food focus)
5. **HomeChefIndia.in** (Focus on home chef aspect)

**Logo Concept:**
- Main element: Stylized home (house outline) with cooking pot/ladle inside
- Colors: Warm orange (#FF6B35), Earthy green (#2D6A4F), Golden (#F4A261)
- Tagline: "घर जैसा खाना, हर रोज़" (Homemade food, everyday)

**Brand Colors:**
- Primary: #FF6B35 (Warm Orange)
- Secondary: #2D6A4F (Fresh Green)
- Accent: #F4A261 (Golden)
- Background: #FFFFFF and #F8F9FA
- Text: #1F2937 (Dark Gray)

### Target Audience

**Primary Segments (100%):**

1. **Urban Migrants (35%)**
   - Age: 22-35 years
   - Location: Tech hubs (Bangalore, Hyderabad, Pune, Gurgaon)
   - Income: ₹8-15L/year
   - Pain Point: Homesick for authentic homemade food

2. **Students & Working Professionals (40%)**
   - Age: 18-30 years
   - Location: PG/hostels, shared accommodations
   - Income: ₹3-8L/year
   - Pain Point: Mess food quality, expensive restaurants

3. **Young Families (15%)**
   - Age: 25-40 years
   - Location: Suburban areas with nuclear families
   - Income: ₹12-25L/year
   - Pain Point: No time to cook, want variety

4. **Health-Conscious (10%)**
   - Age: 25-45 years
   - Special diets: Diabetic-friendly, low oil, Jain
   - Behavior: Consistent ordering, high repeat rate

### Value Proposition

**Customer-Facing:**
- "घर का खाना, रेस्टोरेंट से 40% सस्ता" (Home food, 40% cheaper than restaurants)
- Verified home chefs with kitchen inspections
- Fresh food, prepared after order acceptance
- No preservatives, no artificial colors
- Portion control options (half/full plates)
- Authentic regional cuisines

**Chef-Facing:**
- Earn 85% of food value (vs 70-75% on competitors)
- Flexible working hours (lunch/dinner slots)
- No hidden charges, transparent earnings
- Weekly payouts to bank account

### Revenue Model

**Revenue Streams:**

1. **Commission (Primary)**
   - 15% on all food orders
   - Deducted from customer payment before payout to chef

2. **Delivery Fee**
   - ₹20 flat fee per order (customer pays)
   - Entire fee goes to delivery partner

3. **Subscription Plans**
   - Basic (₹199/month): Free delivery on 10+ orders/month
   - Standard (₹299/month): 10% discount + free delivery
   - Premium (₹499/month): 15% discount + priority delivery + exclusive dishes

4. **Promotional Revenue (Future)**
   - Featured home chefs (₹500/week)
   - Dish of the day (₹200/day)

### Pricing Strategy

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

**Competitive Pricing:**
| Item | GharKaKhana | Swiggy/Zomato | Restaurant |
|------|-------------|---------------|------------|
| Dal Rice | ₹100 | ₹150-200 | ₹180-250 |
| Rajma Chawal | ₹120 | ₹180-250 | ₹220-300 |
| Veg Thali | ₹150 | ₹220-350 | ₹280-400 |

---

## TECHNICAL ARCHITECTURE

### Technology Stack

**Frontend:**
- Framework: Next.js 16 with App Router
- Language: TypeScript 5
- Styling: Tailwind CSS 4
- UI Components: shadcn/ui (New York style)
- Icons: Lucide React
- State Management: Zustand (client state)
- Data Fetching: TanStack Query (server state)
- Forms: React Hook Form + Zod validation
- Theme: next-themes (light/dark mode)

**Backend:**
- API Framework: Next.js API Routes (App Router)
- ORM: Prisma
- Database: PostgreSQL (production), SQLite (development)
- Cache: Redis
- Authentication: JWT tokens
- File Storage: AWS S3

**Integrations:**
- Payments: Razorpay
- SMS/OTP: MSG91
- Maps: Google Maps / MapmyIndia
- Push Notifications: Firebase Cloud Messaging
- Email: SendGrid / Amazon SES

**Hosting & Infrastructure:**
- Cloud Provider: AWS Mumbai Region
- Compute: EC2 t3.medium (2 vCPU, 4GB RAM)
- Database: RDS PostgreSQL db.t3.small (upgradable)
- Cache: ElastiCache Redis
- Storage: S3 Standard
- CDN: CloudFront
- Load Balancer: Application Load Balancer

### System Architecture

```
User (Mobile App) ───┐
                      ├──> API Gateway (ALB)
Chef (Mobile App) ───┤                      ├──> User API
Admin Dashboard ─────┤                      ├──> Chef API
                     └──> Business Logic Layer ├──> Admin API
                                             ├──> Payment Service (Razorpay)
                                             ├──> Notification Service (Firebase)
                                             └──> SMS Service (MSG91)
                                                      │
                                                      ▼
                                             ┌──────────────────────┐
                                             │   PostgreSQL (RDS)   │
                                             └──────────────────────┘
                                                      │
                                             ┌──────────────────────┐
                                             │      Redis Cache      │
                                             └──────────────────────┘
                                                      │
                                             ┌──────────────────────┐
                                             │    AWS S3 Storage     │
                                             └──────────────────────┘
```

### Project Structure

```
gharkakhana/
├── prisma/
│   └── schema.prisma              # Database schema
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   │   ├── auth/             # Authentication endpoints
│   │   │   ├── users/            # User endpoints
│   │   │   ├── chefs/            # Chef endpoints
│   │   │   ├── dishes/           # Dish endpoints
│   │   │   ├── orders/           # Order endpoints
│   │   │   ├── payments/         # Payment endpoints
│   │   │   ├── reviews/          # Review endpoints
│   │   │   ├── delivery/         # Delivery endpoints
│   │   │   ├── subscriptions/    # Subscription endpoints
│   │   │   └── admin/           # Admin endpoints
│   │   ├── (marketing)/          # Marketing pages
│   │   │   ├── about/
│   │   │   ├── careers/
│   │   │   └── blog/
│   │   ├── (dashboard)/          # Dashboard routes
│   │   │   ├── user/
│   │   │   ├── chef/
│   │   │   └── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── user/                # User app components
│   │   ├── chef/                # Chef app components
│   │   ├── admin/               # Admin dashboard components
│   │   └── shared/              # Shared components
│   ├── lib/
│   │   ├── db.ts                # Prisma client
│   │   ├── auth.ts              # Authentication utilities
│   │   ├── payments.ts           # Payment utilities (Razorpay)
│   │   ├── sms.ts               # SMS utilities (MSG91)
│   │   ├── notifications.ts     # Push notification utilities
│   │   └── utils.ts            # General utilities
│   ├── hooks/                   # Custom React hooks
│   ├── stores/                  # Zustand stores
│   └── types/                  # TypeScript types
├── public/                      # Static assets
├── mini-services/               # Microservices
│   ├── websocket-service/        # Real-time updates
│   └── notification-service/    # Background notifications
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── .env.example
```

---

## DATABASE SCHEMA

### Complete Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Use "sqlite" for development
  url      = env("DATABASE_URL")
}

// ============================================
// USERS & AUTHENTICATION
// ============================================

model User {
  id            String    @id @default(cuid())
  phone         String    @unique
  name          String?
  email         String?   @unique
  passwordHash  String?   @map("password_hash")
  deviceId      String?   @map("device_id")
  fcmToken      String?   @map("fcm_token")
  isVerified    Boolean   @default(false) @map("is_verified")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  profile       UserProfile?
  chef          HomeChef?
  deliveryPartner DeliveryPartner?
  orders        Order[]
  payments      Payment[]
  reviews       Review[]
  subscriptions Subscription[]
  disputes      Dispute[]
  adminUser     AdminUser?

  @@index([phone])
  @@map("users")
}

model UserProfile {
  id                    String   @id @default(cuid())
  userId                String   @unique @map("user_id")
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  address               String?
  latitude              Decimal?  @db.Decimal(10, 8)
  longitude             Decimal?  @db.Decimal(11, 8)
  pincode               String?  @db.VarChar(6)
  city                  String?  @db.VarChar(50)
  state                 String?  @db.VarChar(50)
  dietaryPreferences     Json?    @map("dietary_preferences") // ['veg', 'jain', 'low-oil']
  favoriteCuisines      Json?    @map("favorite_cuisines")
  avgOrderValue         Decimal?  @map("avg_order_value") @db.Decimal(10, 2)
  totalOrders           Int      @default(0) @map("total_orders")
  loyaltyPoints         Int      @default(0) @map("loyalty_points")
  subscriptionPlan      String?  @map("subscription_plan") @db.VarChar(50)
  subscriptionExpiry    DateTime? @map("subscription_expiry")
  createdAt             DateTime @default(now()) @map("created_at")
  updatedAt             DateTime @updatedAt @map("updated_at")

  @@map("user_profiles")
}

// ============================================
// HOME CHEFS
// ============================================

model HomeChef {
  id                   String   @id @default(cuid())
  userId               String   @unique @map("user_id")
  user                 User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  name                 String   @db.VarChar(100)
  phone                String   @db.VarChar(15)
  email                String?  @db.VarChar(255)
  fssaiLicenseNumber   String?  @unique @map("fssai_license_number") @db.VarChar(20)
  fssaiExpiryDate      DateTime? @map("fssai_expiry_date")
  kitchenAddress        String   @map("kitchen_address")
  latitude             Decimal  @db.Decimal(10, 8)
  longitude            Decimal  @db.Decimal(11, 8)
  pincode              String?  @db.VarChar(6)
  verificationStatus    String   @default("pending") @map("verification_status") @db.VarChar(20) // 'pending', 'approved', 'rejected', 'suspended'
  verificationDate     DateTime? @map("verification_date")
  kitchenPhotos        Json?    @map("kitchen_photos") // URLs of kitchen images
  profilePhoto         String?  @map("profile_photo")
  bio                  String?
  specialties           Json?    // ['punjabi', 'south-indian']
  hygieneRating        Decimal  @default(4) @map("hygiene_rating") @db.Decimal(3, 2)
  overallRating        Decimal  @default(4) @map("overall_rating") @db.Decimal(3, 2)
  totalReviews         Int      @default(0) @map("total_reviews")
  active               Boolean  @default(true)
  createdAt            DateTime @default(now()) @map("created_at")
  updatedAt            DateTime @updatedAt @map("updated_at")

  dishes               Dish[]
  orders               Order[]
  reviews              Review[]
  payouts              Payout[]

  @@index([verificationStatus])
  @@index([latitude, longitude])
  @@map("home_chefs")
}

// ============================================
// DISHES
// ============================================

model Dish {
  id                String   @id @default(cuid())
  chefId            String   @map("chef_id")
  chef              HomeChef @relation(fields: [chefId], references: [id], onDelete: Cascade)
  name              String   @db.VarChar(100)
  nameHindi         String?  @map("name_hindi") @db.VarChar(100)
  description       String?
  cuisineType       String   @map("cuisine_type") @db.VarChar(50) // 'north-indian', 'south-indian', 'punjabi'
  category          String   @db.VarChar(50) // 'breakfast', 'lunch', 'dinner', 'snack'
  dietaryTags       Json?    @map("dietary_tags") // ['veg', 'jain', 'gluten-free']
  price             Decimal  @db.Decimal(10, 2)
  halfPortionPrice  Decimal? @map("half_portion_price") @db.Decimal(10, 2)
  availablePortions Int      @default(10) @map("available_portions")
  preparationTime   Int      @map("preparation_time") // in minutes
  photos            Json?    // URLs of food images
  ingredients       String?
  nutritionalInfo   Json?    @map("nutritional_info") // {calories, protein, carbs}
  spiceLevel        String?  @map("spice_level") @db.VarChar(10) // 'mild', 'medium', 'spicy'
  availability      Json?    // {lunch: true, dinner: true}
  active            Boolean  @default(true)
  featured          Boolean  @default(false)
  totalOrders       Int      @default(0) @map("total_orders")
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")

  orders            OrderItem[]
  reviews           Review[]

  @@index([chefId])
  @@index([category])
  @@index([cuisineType])
  @@index([active])
  @@map("dishes")
}

// ============================================
// ORDERS
// ============================================

model Order {
  id                    String   @id @default(cuid())
  orderNumber           String   @unique @map("order_number") // GKK-2024-00001
  userId                String   @map("user_id")
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  chefId                String   @map("chef_id")
  chef                  HomeChef @relation(fields: [chefId], references: [id], onDelete: Cascade)
  items                 Json     // [{dish_id, quantity, price}]
  subtotal              Decimal  @db.Decimal(10, 2)
  deliveryFee           Decimal  @default(20) @map("delivery_fee") @db.Decimal(10, 2)
  discount              Decimal  @default(0) @db.Decimal(10, 2)
  totalAmount           Decimal  @map("total_amount") @db.Decimal(10, 2)
  deliveryAddress       String   @map("delivery_address")
  deliveryLatitude      Decimal? @map("delivery_latitude") @db.Decimal(10, 8)
  deliveryLongitude     Decimal? @map("delivery_longitude") @db.Decimal(11, 8)
  status               String   @default("pending") @db.VarChar(20) // 'pending', 'accepted', 'cooking', 'packed', 'out_for_delivery', 'delivered', 'cancelled'
  estimatedDeliveryTime DateTime? @map("estimated_delivery_time")
  actualDeliveryTime    DateTime? @map("actual_delivery_time")
  specialInstructions   String?  @map("special_instructions")
  createdAt            DateTime @default(now()) @map("created_at")
  updatedAt            DateTime @updatedAt @map("updated_at")

  orderItems           OrderItem[]
  payments             Payment[]
  orderStatusHistory    OrderStatusHistory[]
  reviews              Review[]
  deliveryAssignment    DeliveryAssignment?
  dispute              Dispute?

  @@index([userId])
  @@index([chefId])
  @@index([status])
  @@index([createdAt])
  @@map("orders")
}

model OrderItem {
  id        String   @id @default(cuid())
  orderId   String   @map("order_id")
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  dishId    String   @map("dish_id")
  dish      Dish     @relation(fields: [dishId], references: [id])
  quantity  Int
  price      Decimal  @db.Decimal(10, 2)
  portion   String?  @db.VarChar(10) // 'half', 'full'

  @@unique([orderId, dishId])
  @@map("order_items")
}

model OrderStatusHistory {
  id        String   @id @default(cuid())
  orderId   String   @map("order_id")
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  status    String   @db.VarChar(20)
  notes     String?
  createdAt DateTime @default(now()) @map("created_at")

  @@index([orderId])
  @@map("order_status_history")
}

// ============================================
// PAYMENTS
// ============================================

model Payment {
  id                   String   @id @default(cuid())
  orderId              String   @unique @map("order_id")
  order                Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  userId               String   @map("user_id")
  user                 User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  amount               Decimal  @db.Decimal(10, 2)
  paymentMethod        String   @map("payment_method") @db.VarChar(20) // 'upi', 'card', 'netbanking', 'cod'
  paymentGateway       String?  @map("payment_gateway") @db.VarChar(50)
  transactionId       String?  @unique @map("transaction_id")
  razorpayOrderId      String?  @unique @map("razorpay_order_id")
  razorpayPaymentId   String?  @unique @map("razorpay_payment_id")
  status              String   @default("pending") @db.VarChar(20) // 'pending', 'completed', 'failed', 'refunded'
  commissionAmount     Decimal? @map("commission_amount") @db.Decimal(10, 2)
  chefPayoutAmount    Decimal? @map("chef_payout_amount") @db.Decimal(10, 2)
  deliveryPayoutAmount Decimal? @map("delivery_payout_amount") @db.Decimal(10, 2)
  createdAt           DateTime @default(now()) @map("created_at")
  updatedAt           DateTime @updatedAt @map("updated_at")

  @@index([orderId])
  @@index([status])
  @@map("payments")
}

// ============================================
// REVIEWS
// ============================================

model Review {
  id                  String   @id @default(cuid())
  orderId             String   @unique @map("order_id")
  order               Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  userId              String   @map("user_id")
  user                User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  chefId              String   @map("chef_id")
  chef                HomeChef @relation(fields: [chefId], references: [id], onDelete: Cascade)
  dishId              String?  @map("dish_id")
  dish                Dish?    @relation(fields: [dishId], references: [id])
  rating              Int
  foodQualityRating    Int?     @map("food_quality_rating")
  packagingRating     Int?     @map("packaging_rating")
  hygieneRating       Int?     @map("hygiene_rating")
  comment             String?  @db.Text
  photos              Json?
  helpfulCount        Int      @default(0) @map("helpful_count")
  flagged             Boolean  @default(false)
  createdAt           DateTime @default(now()) @map("created_at")

  @@index([chefId])
  @@index([dishId])
  @@index([userId])
  @@map("reviews")
}

// ============================================
// DELIVERY PARTNERS
// ============================================

model DeliveryPartner {
  id                String   @id @default(cuid())
  userId            String   @unique @map("user_id")
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  name              String   @db.VarChar(100)
  phone             String   @db.VarChar(15)
  aadhaarNumber      String?  @map("aadhaar_number") @db.VarChar(12)
  drivingLicense     String?  @map("driving_license") @db.VarChar(20)
  vehicleType       String?  @map("vehicle_type") @db.VarChar(20) // 'bike', 'scooter'
  vehicleNumber     String?  @map("vehicle_number") @db.VarChar(15)
  currentLatitude    Decimal? @map("current_latitude") @db.Decimal(10, 8)
  currentLongitude   Decimal? @map("current_longitude") @db.Decimal(11, 8)
  isOnline          Boolean  @default(false) @map("is_online")
  verificationStatus String   @default("pending") @map("verification_status") @db.VarChar(20)
  totalDeliveries   Int      @default(0) @map("total_deliveries")
  rating            Decimal  @default(4) @db.Decimal(3, 2)
  createdAt         DateTime @default(now()) @map("created_at")

  deliveryAssignments DeliveryAssignment[]
  payouts           Payout[]

  @@map("delivery_partners")
}

model DeliveryAssignment {
  id              String   @id @default(cuid())
  orderId         String   @unique @map("order_id")
  order           Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  deliveryPartnerId String   @map("delivery_partner_id")
  deliveryPartner DeliveryPartner @relation(fields: [deliveryPartnerId], references: [id])
  pickupAddress   String   @map("pickup_address")
  pickupLatitude  Decimal? @map("pickup_latitude") @db.Decimal(10, 8)
  pickupLongitude Decimal? @map("pickup_longitude") @db.Decimal(11, 8)
  dropAddress     String   @map("drop_address")
  dropLatitude    Decimal? @map("drop_latitude") @db.Decimal(10, 8)
  dropLongitude   Decimal? @map("drop_longitude") @db.Decimal(11, 8)
  pickupTime     DateTime? @map("pickup_time")
  dropTime       DateTime? @map("drop_time")
  distanceKm     Decimal? @map("distance_km") @db.Decimal(5, 2)
  payoutAmount    Decimal? @map("payout_amount") @db.Decimal(10, 2)
  status         String   @default("assigned") @db.VarChar(20) // 'assigned', 'picked_up', 'delivered', 'cancelled'
  createdAt      DateTime @default(now()) @map("created_at")

  @@map("delivery_assignments")
}

// ============================================
// SUBSCRIPTIONS
// ============================================

model Subscription {
  id           String   @id @default(cuid())
  userId       String   @map("user_id")
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  planType     String   @map("plan_type") @db.VarChar(50) // 'basic', 'standard', 'premium'
  startDate    DateTime @map("start_date")
  endDate      DateTime @map("end_date")
  amountPaid   Decimal? @map("amount_paid") @db.Decimal(10, 2)
  paymentId    String?  @map("payment_id")
  active       Boolean  @default(true)
  createdAt    DateTime @default(now()) @map("created_at")

  @@index([userId])
  @@map("subscriptions")
}

// ============================================
// DISPUTES
// ============================================

model Dispute {
  id            String   @id @default(cuid())
  orderId       String   @unique @map("order_id")
  order         Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  raisedBy      String   @map("raised_by")
  disputeType   String   @map("dispute_type") @db.VarChar(50) // 'food_quality', 'delivery', 'payment', 'hygiene'
  description   String?  @db.Text
  status        String   @default("open") @db.VarChar(20) // 'open', 'investigating', 'resolved', 'closed'
  resolution    String?  @db.Text
  refundAmount  Decimal? @map("refund_amount") @db.Decimal(10, 2)
  resolvedBy    String?  @map("resolved_by")
  createdAt     DateTime @default(now()) @map("created_at")
  updatedAt     DateTime @updatedAt @map("updated_at")

  @@map("disputes")
}

// ============================================
// PAYOUTS
// ============================================

model Payout {
  id            String   @id @default(cuid())
  chefId        String?  @map("chef_id")
  chef          HomeChef? @relation(fields: [chefId], references: [id])
  deliveryPartnerId String? @map("delivery_partner_id")
  deliveryPartner DeliveryPartner? @relation(fields: [deliveryPartnerId], references: [id])
  periodStart   DateTime @map("period_start")
  periodEnd     DateTime @map("period_end")
  totalAmount   Decimal  @map("total_amount") @db.Decimal(10, 2)
  payoutAmount  Decimal  @map("payout_amount") @db.Decimal(10, 2)
  commission    Decimal? @db.Decimal(10, 2)
  status        String   @default("pending") @db.VarChar(20) // 'pending', 'processed', 'failed'
  transactionId String?  @unique @map("transaction_id")
  processedAt   DateTime? @map("processed_at")
  createdAt     DateTime @default(now()) @map("created_at")

  @@index([status])
  @@map("payouts")
}

// ============================================
// PROMOTIONS
// ============================================

model Promotion {
  id            String   @id @default(cuid())
  code          String   @unique
  description   String?  @db.Text
  discountType  String   @map("discount_type") @db.VarChar(10) // 'percentage', 'flat'
  discountValue Decimal  @map("discount_value") @db.Decimal(10, 2)
  minOrderValue Decimal? @map("min_order_value") @db.Decimal(10, 2)
  maxDiscount   Decimal? @map("max_discount") @db.Decimal(10, 2)
  usageLimit    Int?     @map("usage_limit")
  usedCount     Int      @default(0) @map("used_count")
  validFrom     DateTime @map("valid_from")
  validUntil    DateTime @map("valid_until")
  active        Boolean  @default(true)
  createdAt     DateTime @default(now()) @map("created_at")

  @@index([code])
  @@index([active])
  @@map("promotions")
}

// ============================================
// ADMIN USERS
// ============================================

model AdminUser {
  id          String   @id @default(cuid())
  userId      String   @unique @map("user_id")
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  role        String   @db.VarChar(20) // 'super_admin', 'support', 'operations'
  permissions Json?
  createdAt   DateTime @default(now()) @map("created_at")

  @@map("admin_users")
}
```

### Database Setup Commands

```bash
# Install Prisma CLI
bun add -D prisma

# Initialize Prisma
bunx prisma init

# Generate Prisma Client
bunx prisma generate

# Push schema to database (development with SQLite)
bun run db:push

# Run migrations (production with PostgreSQL)
bunx prisma migrate dev --name init

# Open Prisma Studio (database GUI)
bunx prisma studio
```

---

## API DOCUMENTATION

### Base URL

- Development: `http://localhost:3000/api`
- Production: `https://api.gharkakhana.in`

### Common Headers

```
Content-Type: application/json
Authorization: Bearer {accessToken}
```

### Common Response Format

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { }
}
```

### Error Response Format

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

---

### AUTHENTICATION API

#### 1. Send OTP

**POST** `/api/v1/auth/send-otp`

Request:
```json
{
  "phone": "+919876543210",
  "countryCode": "+91"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "otpId": "otp_abc123",
    "expiresIn": 300
  }
}
```

#### 2. Verify OTP

**POST** `/api/v1/auth/verify-otp`

Request:
```json
{
  "phone": "+919876543210",
  "otp": "123456",
  "otpId": "otp_abc123",
  "deviceInfo": {
    "deviceId": "device_unique_id",
    "platform": "android"
  }
}
```

Response:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_123",
      "phone": "+919876543210",
      "name": "Rahul Kumar",
      "isNewUser": false
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 604800
    }
  }
}
```

#### 3. Refresh Token

**POST** `/api/v1/auth/refresh-token`

Request:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

Response:
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 604800
  }
}
```

---

### USERS API

#### 4. Get User Profile

**GET** `/api/v1/users/profile`

Response:
```json
{
  "success": true,
  "data": {
    "id": "usr_123",
    "phone": "+919876543210",
    "name": "Rahul Kumar",
    "email": "rahul@example.com",
    "profile": {
      "address": "123, ABC Apartments, HSR Layout",
      "latitude": 12.9141,
      "longitude": 77.6101,
      "loyaltyPoints": 480,
      "subscriptionPlan": "standard"
    },
    "stats": {
      "totalOrders": 12,
      "avgOrderValue": 125.50
    }
  }
}
```

#### 5. Update User Profile

**PUT** `/api/v1/users/profile`

Request:
```json
{
  "name": "Rahul Kumar",
  "email": "rahul@example.com",
  "profile": {
    "address": "123, ABC Apartments, HSR Layout",
    "latitude": 12.9141,
    "longitude": 77.6101,
    "pincode": "560102",
    "dietaryPreferences": ["veg", "jain"]
  }
}
```

#### 6. Get Order History

**GET** `/api/v1/users/orders?page=1&limit=20&status=completed`

Response:
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "ord_123",
        "orderNumber": "GKK-2024-001",
        "status": "delivered",
        "items": [{"dishId": "dish_123", "name": "Dal Makhani", "quantity": 1, "price": 120}],
        "totalAmount": 140,
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 12,
      "totalPages": 1
    }
  }
}
```

---

### HOME CHEFS API

#### 7. Register as Home Chef

**POST** `/api/v1/chefs/register`

**Multipart/Form-Data:**
```json
{
  "name": "Sunita Sharma",
  "phone": "+919876543211",
  "email": "sunita@example.com",
  "fssaiLicenseNumber": "100123456789",
  "kitchenAddress": "456, XYZ Society, Koramangala",
  "latitude": 12.9352,
  "longitude": 77.6245,
  "bio": "Experienced home chef",
  "specialties": ["punjabi", "north-indian"]
}
```

Files: `kitchenPhotos[]` (3+ images), `profilePhoto`, `fssaiDocument`

Response:
```json
{
  "success": true,
  "message": "Registration submitted successfully",
  "data": {
    "id": "chef_123",
    "verificationStatus": "pending",
    "kitchenPhotos": ["https://s3.../kitchen1.jpg"]
  }
}
```

#### 8. Get Nearby Chefs

**GET** `/api/v1/chefs/nearby?latitude=12.9141&longitude=77.6101&radius=5&cuisine=punjabi`

Response:
```json
{
  "success": true,
  "data": {
    "chefs": [
      {
        "id": "chef_123",
        "name": "Sunita Sharma",
        "profilePhoto": "https://s3.../sunita.jpg",
        "specialties": ["punjabi"],
        "rating": 4.8,
        "reviews": 245,
        "distance": 1.2,
        "verified": true
      }
    ]
  }
}
```

#### 9. Get Chef Dashboard

**GET** `/api/v1/chefs/dashboard`

Response:
```json
{
  "success": true,
  "data": {
    "today": {"orders": 5, "revenue": 625, "activeOrders": 2},
    "week": {"orders": 28, "revenue": 3500},
    "month": {"orders": 115, "revenue": 14375, "payout": 12218.75},
    "recentOrders": [...]
  }
}
```

---

### DISHES API

#### 10. Get Dishes

**GET** `/api/v1/dishes?latitude=12.9141&longitude=77.6101&cuisine=punjabi&dietaryTag=veg&sort=rating&page=1&limit=20`

Response:
```json
{
  "success": true,
  "data": {
    "dishes": [
      {
        "id": "dish_123",
        "name": "Dal Makhani",
        "nameHindi": "दाल मखनी",
        "description": "Creamy black lentils",
        "photos": ["https://s3.../dal-makhani.jpg"],
        "price": 120,
        "cuisine": "punjabi",
        "category": "lunch",
        "dietaryTags": ["veg"],
        "preparationTime": 30,
        "rating": 4.7,
        "availablePortions": 8,
        "chef": {
          "id": "chef_123",
          "name": "Sunita Sharma",
          "rating": 4.8,
          "distance": 1.2
        }
      }
    ]
  }
}
```

#### 11. Get Dish Details

**GET** `/api/v1/dishes/{dishId}`

#### 12. Add Dish (Chef Only)

**POST** `/api/v1/chefs/dishes`

**Multipart/Form-Data:**
```json
{
  "name": "Dal Makhani",
  "nameHindi": "दाल मखनी",
  "description": "Creamy black lentils",
  "cuisine": "punjabi",
  "category": "lunch",
  "dietaryTags": ["veg"],
  "price": 120,
  "preparationTime": 30
}
```

Files: `photos[]` (1-5 images)

---

### ORDERS API

#### 13. Create Order

**POST** `/api/v1/orders`

Request:
```json
{
  "items": [
    {"dishId": "dish_123", "quantity": 1, "portion": "full"},
    {"dishId": "dish_456", "quantity": 1, "portion": "half"}
  ],
  "deliveryAddress": {
    "address": "123, ABC Apartments, HSR Layout",
    "latitude": 12.9141,
    "longitude": 77.6101,
    "landmark": "Near Metro Station"
  },
  "deliverySlot": {
    "date": "2024-01-15",
    "time": "lunch"
  },
  "specialInstructions": "Less spicy please",
  "promoCode": "WELCOME50"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "id": "ord_123",
    "orderNumber": "GKK-2024-001",
    "status": "pending",
    "subtotal": 190,
    "deliveryFee": 20,
    "discount": 25,
    "totalAmount": 185,
    "estimatedDeliveryTime": "2024-01-15T13:05:00Z"
  }
}
```

#### 14. Get Order Details

**GET** `/api/v1/orders/{orderId}`

#### 15. Track Order

**GET** `/api/v1/orders/{orderId}/track`

Response:
```json
{
  "success": true,
  "data": {
    "orderId": "ord_123",
    "status": "out_for_delivery",
    "progress": 75,
    "estimatedDeliveryTime": "2024-01-15T13:05:00Z",
    "timeline": [
      {"status": "pending", "label": "Order Placed", "completed": true, "time": "12:30 PM"},
      {"status": "accepted", "label": "Chef Accepted", "completed": true, "time": "12:32 PM"},
      {"status": "cooking", "label": "Preparing Food", "completed": true, "time": "12:35 PM"},
      {"status": "packed", "label": "Food Packed", "completed": true, "time": "12:55 PM"},
      {"status": "out_for_delivery", "label": "Out for Delivery", "completed": true, "time": "12:57 PM"},
      {"status": "delivered", "label": "Delivered", "completed": false, "time": "1:05 PM"}
    ]
  }
}
```

#### 16. Cancel Order

**POST** `/api/v1/orders/{orderId}/cancel`

Request:
```json
{
  "reason": "Changed mind"
}
```

---

### PAYMENTS API

#### 17. Create Payment Order (Razorpay)

**POST** `/api/v1/payments/create-order`

Request:
```json
{
  "orderId": "ord_123",
  "amount": 18500, // Amount in paise (₹185.00)
  "currency": "INR",
  "method": "upi"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "razorpayOrderId": "order_abc123",
    "amount": 18500,
    "keyId": "rzp_test_abc123",
    "name": "GharKaKhana",
    "description": "Payment for order GKK-2024-001"
  }
}
```

#### 18. Verify Payment

**POST** `/api/v1/payments/verify`

Request:
```json
{
  "razorpayOrderId": "order_abc123",
  "razorpayPaymentId": "pay_abc123",
  "razorpaySignature": "9a4b2c8d0e1f",
  "orderId": "ord_123"
}
```

---

### REVIEWS API

#### 19. Submit Review

**POST** `/api/v1/reviews`

**Multipart/Form-Data:**
```json
{
  "orderId": "ord_123",
  "dishId": "dish_123",
  "chefId": "chef_123",
  "rating": 5,
  "foodQualityRating": 5,
  "packagingRating": 4,
  "hygieneRating": 5,
  "comment": "Amazing food!"
}
```

Files: `photos[]` (optional, max 3)

#### 20. Get Reviews

**GET** `/api/v1/reviews?chefId=chef_123&dishId=dish_123&page=1&limit=20`

---

### SUBSCRIPTIONS API

#### 21. Get Subscription Plans

**GET** `/api/v1/subscriptions/plans`

Response:
```json
{
  "success": true,
  "data": {
    "plans": [
      {
        "id": "plan_basic",
        "name": "Basic",
        "price": 199,
        "duration": 30,
        "benefits": ["Free delivery on 10+ orders/month"]
      },
      {
        "id": "plan_standard",
        "name": "Standard",
        "price": 299,
        "duration": 30,
        "benefits": ["10% discount", "Free delivery", "Priority delivery"]
      },
      {
        "id": "plan_premium",
        "name": "Premium",
        "price": 499,
        "duration": 30,
        "benefits": ["15% discount", "Free delivery", "Exclusive dishes"]
      }
    ]
  }
}
```

#### 22. Subscribe to Plan

**POST** `/api/v1/subscriptions/subscribe`

Request:
```json
{
  "planId": "plan_standard",
  "paymentMethod": "upi"
}
```

---

### ADMIN API

#### 23. Admin Login

**POST** `/api/v1/admin/login`

Request:
```json
{
  "email": "admin@gharkakhana.in",
  "password": "password123"
}
```

#### 24. Get Dashboard Stats

**GET** `/api/v1/admin/dashboard?period=week`

Response:
```json
{
  "success": true,
  "data": {
    "overview": {
      "todayOrders": 127,
      "todayRevenue": 15240,
      "activeUsers": 1843,
      "activeChefs": 85,
      "pendingVerifications": 12
    },
    "trends": {
      "ordersGrowth": 15.5,
      "revenueGrowth": 18.2
    },
    "topDishes": [...],
    "topChefs": [...]
  }
}
```

#### 25. Get Pending Verifications

**GET** `/api/v1/admin/verifications/pending?page=1&limit=20`

#### 26. Approve/Reject Verification

**POST** `/api/v1/admin/verifications/{chefId}/approve`

Request:
```json
{
  "action": "approve" // or "reject"
}
```

If reject:
```json
{
  "action": "reject",
  "reason": "Kitchen photos do not meet standards"
}
```

#### 27. Get Disputes

**GET** `/api/v1/admin/disputes?status=open&page=1&limit=20`

#### 28. Resolve Dispute

**POST** `/api/v1/admin/disputes/{disputeId}/resolve`

Request:
```json
{
  "resolution": "Refund full amount",
  "refundAmount": 140,
  "status": "resolved"
}
```

#### 29. Get Payout Requests

**GET** `/api/v1/admin/payouts/pending?type=chef&page=1&limit=20`

#### 30. Process Payout

**POST** `/api/v1/admin/payouts/{payoutId}/process`

Request:
```json
{
  "transactionId": "TXN123456789",
  "notes": "Processed via NEFT"
}
```

---

### Complete API Endpoints Summary

**Authentication (3 endpoints):**
- POST /api/v1/auth/send-otp
- POST /api/v1/auth/verify-otp
- POST /api/v1/auth/refresh-token

**Users (3 endpoints):**
- GET /api/v1/users/profile
- PUT /api/v1/users/profile
- GET /api/v1/users/orders

**Home Chefs (6 endpoints):**
- POST /api/v1/chefs/register
- GET /api/v1/chefs/nearby
- GET /api/v1/chefs/{chefId}
- GET /api/v1/chefs/dashboard
- PUT /api/v1/chefs/orders/{orderId}/status
- GET /api/v1/chefs/earnings

**Dishes (5 endpoints):**
- GET /api/v1/dishes
- GET /api/v1/dishes/{dishId}
- POST /api/v1/chefs/dishes
- PUT /api/v1/chefs/dishes/{dishId}
- DELETE /api/v1/chefs/dishes/{dishId}

**Orders (4 endpoints):**
- POST /api/v1/orders
- GET /api/v1/orders/{orderId}
- GET /api/v1/orders/{orderId}/track
- POST /api/v1/orders/{orderId}/cancel

**Payments (3 endpoints):**
- POST /api/v1/payments/create-order
- POST /api/v1/payments/verify
- POST /api/v1/payments/{paymentId}/refund

**Reviews (3 endpoints):**
- POST /api/v1/reviews
- GET /api/v1/reviews
- POST /api/v1/reviews/{reviewId}/flag

**Delivery Partners (5 endpoints):**
- POST /api/v1/delivery-partners/register
- PUT /api/v1/delivery-partners/online-status
- POST /api/v1/delivery-partners/assignments/{assignmentId}/accept
- PUT /api/v1/delivery-partners/assignments/{assignmentId}/status
- GET /api/v1/delivery-partners/earnings

**Subscriptions (4 endpoints):**
- GET /api/v1/subscriptions/plans
- POST /api/v1/subscriptions/subscribe
- GET /api/v1/subscriptions/current
- POST /api/v1/subscriptions/cancel

**Admin (7 endpoints):**
- POST /api/v1/admin/login
- GET /api/v1/admin/dashboard
- GET /api/v1/admin/verifications/pending
- POST /api/v1/admin/verifications/{chefId}/approve
- GET /api/v1/admin/disputes
- POST /api/v1/admin/disputes/{disputeId}/resolve
- GET /api/v1/admin/payouts/pending
- POST /api/v1/admin/payouts/{payoutId}/process

**Total: 43 core endpoints**

---

## LEGAL DOCUMENTS

### 1. Terms of Service (English)

```
TERMS OF SERVICE
GharKaKhana Private Limited

Last Updated: [Date]

1. ACCEPTANCE OF TERMS

By accessing or using GharKaKhana platform, you agree to be bound by these Terms of Service.

2. USER ELIGIBILITY

To use the Platform, you must:
- Be at least 18 years of age
- Have the legal capacity to enter into a contract
- Provide accurate and complete information

3. HOME CHEF REQUIREMENTS

Home Chefs must:
- Be at least 18 years of age
- Have valid FSSAI registration or Basic License
- Maintain hygiene standards as specified by FSSAI
- Use tamper-evident packaging

4. ORDERS AND PAYMENTS

Orders are subject to availability and Home Chef acceptance.
Payments can be made via UPI, credit/debit card, net banking, or COD.
Delivery fee of ₹20 is charged per order.

5. FOOD SAFETY

While we verify Home Chefs and monitor quality, we cannot guarantee all food will meet individual standards.

6. LIMITATION OF LIABILITY

To the maximum extent permitted by law, GharKaKhana shall not be liable for indirect or consequential damages.

7. GOVERNING LAW

These Terms are governed by the laws of India. Disputes subject to jurisdiction of courts in Bangalore, Karnataka.

Contact: support@gharkakhana.in
```

### 2. Privacy Policy

```
PRIVACY POLICY
GharKaKhana Private Limited

1. INFORMATION WE COLLECT

- Personal Information: Name, phone, email, address, location
- Transaction Information: Order history, payment history
- Device Information: Device ID, operating system

2. HOW WE USE YOUR INFORMATION

- To provide services (process orders, payments, delivery)
- To improve services (analyze usage, personalize)
- To communicate (order updates, promotional messages)

3. INFORMATION SHARING

We share information with:
- Home Chefs (delivery address, order details)
- Delivery Partners (delivery address, phone)
- Payment Processors (Razorpay)
- Legal authorities (when required by law)

4. DATA SECURITY

We implement industry-standard security measures:
- SSL/TLS encryption
- Secure payment processing
- Regular security audits

5. YOUR RIGHTS

- Access your personal information
- Correct inaccurate information
- Request deletion of your data
- Withdraw consent for marketing

Contact: privacy@gharkakhana.in
```

### 3. Home Chef Agreement (Summary)

```
HOME CHEF SERVICE AGREEMENT

1. APPOINTMENT
Home Chef is an independent contractor, not an employee.

2. OBLIGATIONS OF HOME CHEF
- Maintain valid FSSAI Basic Registration
- Follow all FSSAI guidelines
- Maintain cleanliness in kitchen
- Use fresh ingredients
- Use tamper-evident packaging

3. COMMISSION AND PAYMENTS
- Platform deducts 15% commission
- Home Chef receives 85% of food value
- Weekly payouts (every Friday)

4. LIABILITY
Home Chef is solely responsible for:
- Food quality and safety
- Food poisoning issues
- Packaging integrity

5. TERMINATION
Immediate termination if Home Chef:
- Violates food safety standards
- Receives rating below 3.0 for 3 consecutive orders
- Commits fraud or misrepresentation
```

### 4. Delivery Partner Contract (Summary)

```
DELIVERY PARTNER SERVICE AGREEMENT

1. APPOINTMENT
Delivery Partner is an independent contractor.

2. OBLIGATIONS
- Accept assigned orders promptly
- Pick up within specified time
- Deliver within estimated time
- Be courteous to customers
- Follow traffic rules

3. PAYMENTS
- Standard orders: ₹20 per order
- Extended distance: ₹25 per order
- Weekly payouts

4. PERFORMANCE REQUIREMENTS
- Accept 80% of assigned orders
- Maintain rating of at least 4.0
- Complete 90% of accepted orders
```

---

## DEPLOYMENT & INFRASTRUCTURE

### Initial Setup (Month 1-3)

**AWS Resources:**

| Component | Specs | Cost/Month |
|-----------|-------|------------|
| EC2 (Application Server) | t3.medium (2 vCPU, 4GB RAM) | ₹5,000 |
| RDS PostgreSQL (Database) | db.t3.small | ₹3,500 |
| ElastiCache Redis (Cache) | cache.t3.small | ₹2,000 |
| S3 (Storage) | Standard (500GB) | ₹1,000 |
| CloudFront (CDN) | | ₹500 |
| ALB (Load Balancer) | | ₹1,500 |
| **Total** | | **₹15,500** |

### Scale-up Plan (Month 4-6)

- Add Application Server: +1 EC2 t3.medium (₹5,000)
- Database Upgrade: RDS db.t3.medium (₹6,000)
- Add Cache: +1 Redis instance (₹2,000)
- **Total at Scale:** ₹28,500/month

### Environment Setup

**Development (.env.local):**
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
MSG91_AUTH_KEY="your-msg91-key"
RAZORPAY_KEY_ID="rzp_test_xxx"
RAZORPAY_KEY_SECRET="your-secret"
FIREBASE_PROJECT_ID="your-firebase-project"
AWS_ACCESS_KEY_ID="your-key"
AWS_SECRET_ACCESS_KEY="your-secret"
AWS_REGION="ap-south-1"
AWS_S3_BUCKET="gharkakhana-dev"
```

**Production (.env.production):**
```env
DATABASE_URL="postgresql://user:pass@host:5432/gharkakhana"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://gharkakhana.in"
MSG91_AUTH_KEY="your-production-msg91-key"
RAZORPAY_KEY_ID="rzp_live_xxx"
RAZORPAY_KEY_SECRET="your-production-secret"
FIREBASE_PROJECT_ID="your-firebase-project"
AWS_ACCESS_KEY_ID="your-production-key"
AWS_SECRET_ACCESS_KEY="your-production-secret"
AWS_REGION="ap-south-1"
AWS_S3_BUCKET="gharkakhana-prod"
```

### Deployment Commands

```bash
# Build for production
bun run build

# Start production server
bun run start

# Or use PM2 for process management
pm2 start bun --name "gharkakhana" -- start

# Database migrations
bunx prisma migrate deploy

# Generate Prisma Client
bunx prisma generate
```

---

## OPERATIONS & LOGISTICS

### Home Chef Onboarding Process

**Timeline: 12-15 days**

1. **Day 1: Initial Screening**
   - Phone call from operations team
   - Basic information collection
   - Check: Cooking experience, available hours, kitchen space

2. **Day 1-2: Online Assessment**
   - Hygiene quiz (20 questions)
   - Upload kitchen photos (min 3)
   - Upload government ID (Aadhaar/PAN)
   - Upload FSSAI registration

3. **Day 3-4: Video Kitchen Inspection**
   - 15-minute video call
   - Checklist verification
   - Approval/rejection decision

4. **Day 5: Training**
   - Watch 30-minute training video
   - Pass quiz (80% passing score)
   - Review platform guidelines
   - Sign agreement

5. **Day 7: Starter Kit Delivery**
   - Packaging materials (50 units)
   - Digital thermometer
   - Disposable gloves (100)
   - Aprons (2)
   - Tamper-evident seals (100)
   - Cost: ₹1,500 (deducted from first payout)

6. **Day 10-12: Trial Order**
   - Mystery customer order
   - Full quality check
   - Final approval
   - Go live

### Delivery System

**Model: Hyperlocal Dedicated Delivery**

**Zone Structure:**
- Bangalore divided into 10 zones (3-5km radius each)
- Each zone: 5-8 delivery partners
- Each delivery partner covers 2-3 km radius

**Delivery Slots:**
- Lunch: 11:00 AM - 2:00 PM
- Dinner: 7:00 PM - 10:00 PM

**Delivery Fees:**
- Standard: ₹20 (up to 3 km)
- Extended: ₹30 (3-5 km)
- Free for subscription users

**Delivery Partner Earnings:**
- Per order: ₹20-25
- Average 15-20 orders/day = ₹300-500/day
- Monthly: ₹9,000-15,000

### Quality Control

1. **Mystery Ordering**
   - Frequency: 1 in 20 orders (5%)
   - Process: Mystery customer orders from verified account
   - Evaluation: Food quality, packaging, delivery time

2. **Customer Rating Triggers**
   - Rating < 3: Immediate inspection
   - Rating < 4: Warning + training recommendation
   - 3 consecutive low ratings: Temporary suspension

3. **Regular Refresher Training**
   - Monthly: Top performer tips
   - Quarterly: Mandatory hygiene refresher

---

## MARKETING STRATEGY

### Launch Plan (First Month)

**Pre-Launch (Week 0):**
- Build WhatsApp groups in target societies
- Create waitlist landing page
- Teaser social media posts

**Week 1: Launch**
- Offer: 50% discount for first 100 orders
- WhatsApp broadcast to waitlist
- Launch event in pilot society
- Press release to local tech blogs

**Week 2: Referral Program**
- Offer: ₹100 credit for both referrer and referee
- Referral link sharing
- Weekly winners

**Week 3: B2B Tie-ups**
- Partner with 5 PG/hostels
- Corporate lunch plans (3 offices)
- Bulk order discounts (15%)

**Week 4: Content Marketing**
- Home chef stories (Instagram Reels)
- Food photography challenges
- Customer testimonials

### Customer Acquisition

**Digital Marketing (60% of budget):**
- Instagram/Facebook Ads: Target age 22-35, Bangalore
- Google Ads: Keywords "home food", "tiffin service"
- WhatsApp Marketing: Broadcast lists

**Offline Marketing (25% of budget):**
- Flyers & posters in apartment complexes
- Standees at PG/hostels
- Food tasting events

**Partnerships (15% of budget):**
- Office park tie-ups
- Corporate wellness programs
- Student organizations

### Retention Strategy

**Loyalty Program:**
- Every 5th meal free
- Double points on weekends
- Birthday special: Free dessert

**Subscription Benefits:**
- Basic (₹199/month): Free delivery on 10+ orders
- Standard (₹299/month): 10% discount + free delivery
- Premium (₹499/month): 15% discount + priority delivery

**Festival Specials:**
- Diwali: ₹500 thali at ₹399
- Christmas: Special cake pre-orders
- Eid: Biryani specials

---

## FINANCIAL PROJECTIONS

### 6-Month Financial Projections

**Month 1 (Pilot):**
- Orders: 30/day (900/month)
- AOV: ₹100
- Gross Revenue: ₹90,000
- Commission Revenue (15%): ₹13,500
- Delivery Fee Revenue: ₹18,000
- Total Revenue: ₹31,500
- Expenses: ₹80,000
- Net: **-₹48,500**

**Month 2:**
- Orders: 60/day (1,800/month)
- AOV: ₹105
- Gross Revenue: ₹1,89,000
- Commission Revenue (15%): ₹28,350
- Delivery Fee Revenue: ₹36,000
- Total Revenue: ₹64,350
- Expenses: ₹90,000
- Net: **-₹25,650**

**Month 3:**
- Orders: 150/day (4,500/month)
- AOV: ₹110
- Gross Revenue: ₹4,95,000
- Commission Revenue (15%): ₹74,250
- Delivery Fee Revenue: ₹90,000
- Subscription Revenue: ₹20,000
- Total Revenue: ₹1,84,250
- Expenses: ₹1,10,000
- Net: **+₹74,250** [FIRST PROFIT!]

**Month 4:**
- Orders: 250/day (7,500/month)
- AOV: ₹115
- Gross Revenue: ₹8,62,500
- Commission Revenue: ₹1,29,375
- Delivery Fee Revenue: ₹1,50,000
- Subscription Revenue: ₹50,000
- Total Revenue: ₹3,29,375
- Expenses: ₹1,40,000
- Net: **+₹1,89,375**

**Month 5:**
- Orders: 350/day (10,500/month)
- AOV: ₹118
- Gross Revenue: ₹12,39,000
- Commission Revenue: ₹1,85,850
- Delivery Fee Revenue: ₹2,10,000
- Subscription Revenue: ₹80,000
- Total Revenue: ₹4,75,850
- Expenses: ₹1,70,000
- Net: **+₹3,05,850**

**Month 6:**
- Orders: 500/day (15,000/month)
- AOV: ₹120
- Gross Revenue: ₹18,00,000
- Commission Revenue: ₹2,70,000
- Delivery Fee Revenue: ₹3,00,000
- Subscription Revenue: ₹1,00,000
- Total Revenue: ₹6,70,000
- Expenses: ₹2,00,000
- Net: **+₹4,70,000**

**6-Month Summary:**
- Total Orders: 39,900
- Total Revenue: ₹17,55,325
- Total Expenses: ₹7,90,000
- Net Profit: ₹9,65,325
- **Breakeven: Month 3**

### Initial Funding Requirements

**Total Needed: ₹25,00,000**

**Breakdown:**
- Team & Operations (3 months): ₹10,00,000
- Infrastructure (6 months): ₹90,000
- Marketing & Launch: ₹4,00,000
- Legal & Compliance: ₹1,00,000
- Working Capital: ₹6,00,000
- Contingency (20%): ₹4,00,000

### Funding Sources

1. **Self-Funding + Friends & Family:** ₹10,00,000
2. **Startup India Seed Fund:** Up to ₹5,00,000
3. **Angel Investors:** ₹10,00,000 for 10% equity

---

## DEVELOPMENT ROADMAP

### 10-Week Sprint Plan

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

### Team & Costs (3-Month MVP)

**Team Composition:**
- 2 React Native Developers: ₹1.2L/month each = ₹3.6L (3 months)
- 1 Node.js Backend Developer: ₹1L/month = ₹3L (3 months)
- 1 UI/UX Designer: ₹80k/month = ₹2.4L (3 months)
- QA Tester (Part-time): ₹30k/month = ₹90k (3 months)
- **Total Team Cost:** ₹9,90,000

**Additional Costs:**
- Infrastructure (3 months): ₹46,500
- Design tools & licenses: ₹30,000
- Legal & compliance: ₹50,000
- Marketing (launch): ₹1,00,000
- Contingency (15%): ₹1,70,000

**Total MVP Cost: ₹14,36,500**

---

## LAUNCH CHECKLIST

### Pre-Launch (30 Days Before)

**Legal & Compliance:**
- [ ] Register Private Limited Company
- [ ] Obtain GST Registration
- [ ] Get FSSAI Basic License for Platform
- [ ] Open bank account
- [ ] Get insurance (food liability, product liability, public liability)
- [ ] Finalize and sign all legal agreements
- [ ] Register trademarks

**Technology:**
- [ ] Finalize tech stack and architecture
- [ ] Set up development environment
- [ ] Create database schema
- [ ] Set up version control (Git)
- [ ] Configure CI/CD pipeline
- [ ] Set up monitoring and logging
- [ ] Implement backup strategy

**Design:**
- [ ] Finalize brand colors and logo
- [ ] Create design system
- [ ] Design all app screens
- [ ] Create marketing materials
- [ ] Prepare social media templates

**Operations:**
- [ ] Hire core team
- [ ] Set up office space
- [ ] Create standard operating procedures (SOPs)
- [ ] Prepare training materials
- [ ] Set up customer support systems

### 2 Weeks Before Launch

**Team:**
- [ ] Conduct final training sessions
- [ ] Test all features internally
- [ ] Create launch day schedule
- [ ] Assign roles and responsibilities

**Marketing:**
- [ ] Set up social media accounts
- [ ] Create landing page
- [ ] Build waitlist
- [ ] Prepare press release
- [ ] Contact local bloggers and influencers

**Home Chefs:**
- [ ] Onboard 50 home chefs
- [ ] Verify all chefs (kitchen inspection, FSSAI)
- [ ] Conduct training sessions
- [ ] Deliver starter kits
- [ ] Test order with each chef

**Delivery:**
- [ ] Recruit 20 delivery partners
- [ ] Verify all delivery partners
- [ ] Deliver insulated bags
- [ ] Test delivery routes

### 1 Week Before Launch

**Technology:**
- [ ] Deploy to production (AWS)
- [ ] Load testing
- [ ] Security audit
- [ ] Payment integration testing
- [ ] SMS gateway testing
- [ ] Push notification testing

**Marketing:**
- [ ] Start social media teasers
- [ ] Send waitlist emails
- [ ] Prepare launch day posts
- [ ] Schedule content calendar

**Operations:**
- [ ] Finalize emergency protocols
- [ ] Prepare customer support FAQs
- [ ] Set up dispute resolution process
- [ ] Test refund process

### Launch Day (Day 0)

**Morning (6:00 AM - 10:00 AM):**
- [ ] Wake up call to all home chefs
- [ ] Confirm all chefs are online
- [ ] Verify all delivery partners are online
- [ ] Test app functionality
- [ ] Check all systems (payment, SMS, notifications)

**Launch (10:00 AM):**
- [ ] Go live in app stores
- [ ] Launch marketing campaigns
- [ ] Send WhatsApp broadcast to waitlist
- [ ] Publish social media posts
- [ ] Issue press release

**Monitoring (Throughout Day):**
- [ ] Monitor order flow
- [ ] Track app performance
- [ ] Respond to customer queries
- [ ] Address any issues immediately
- [ ] Collect feedback from first customers

**Evening (8:00 PM - 10:00 PM):**
- [ ] Review day's performance
- [ ] Count total orders
- [ ] Check feedback and ratings
- [ ] Identify issues
- [ ] Plan improvements for tomorrow

---

## RISK MITIGATION

### Critical Risk Matrix

| Risk | Probability | Impact | Mitigation Strategy | Owner |
|------|-------------|--------|---------------------|-------|
| Food poisoning incident | Low | Critical | Insurance + emergency protocol + 24h sample preservation | Ops Manager |
| Regulatory crackdown | Medium | High | FSSAI compliance lawyer, regular audits | Legal Counsel |
| Delivery delays | High | Medium | Multiple riders per zone, real-time tracking | Ops Manager |
| Payment failures | Medium | Medium | UPI fallback + COD option | Tech Lead |
| Home chef churn | Medium | High | 85% commission vs 75% competitors | Founder |
| Platform downtime | Low | Critical | AWS auto-scaling, CDN, 99.9% uptime SLA | Tech Lead |
| Negative PR | Low | High | Crisis communication plan, quick response | Marketing Lead |
| Competition | High | Medium | Differentiation (authentic home-cooked) | Founder |

### Incident Response Plans

**Food Poisoning Incident:**
1. Receive complaint → Apologize + issue full refund
2. Pause chef's orders temporarily
3. Preserve chef's food sample for testing
4. Lab results confirm/not confirm
5. If confirmed: Chef suspended permanently, insurance claim
6. Public statement (if multiple complaints)

**Delivery Delays:**
1. Prevention: ETA buffer of 15 minutes
2. Mitigation: Auto-notify customer of delay
3. Compensation: ₹50 credit for >30 min delay
4. Post-incident: Root cause analysis

**Payment Failures:**
1. Real-time: Retry failed transactions (max 3 attempts)
2. Fallback to COD if UPI fails
3. Follow-up: Support team contacts customer
4. Prevention: Multiple payment gateway redundancy

---

## CONTACT INFORMATION

### Food Safety
- **FSSAI Consultant:** Mr. Sharma - +91-9876543210
- **Food Testing Lab:** City Lab - +91-9876543211

### Legal
- **Corporate Lawyer:** Ms. Priya - +91-9876543212
- **FSSAI Registration Agent:** Food License Expert - +91-9876543213

### Technology
- **Razorpay Support:** +91-9876543214
- **MSG91 Support:** +91-9876543215
- **AWS Support:** Available via AWS Console

### Operations
- **Packaging Supplier:** PackCo India - +91-9876543216
- **Delivery Bags Supplier:** ThermoBags - +91-9876543217
- **Digital Thermometers:** MedEquip - +91-9876543218

---

## NEXT STEPS FOR AI AGENT

### Immediate Tasks (Week 1)

1. **Set up project structure** following the project structure outlined
2. **Configure Prisma** with the provided schema
3. **Set up Next.js** with TypeScript and Tailwind CSS
4. **Implement authentication** using JWT and MSG91
5. **Create API routes** for all endpoints listed
6. **Build UI components** using shadcn/ui
7. **Implement homepage** with dish browsing
8. **Implement admin dashboard** with all panels

### Priority Order

**Phase 1 (Weeks 1-2): Core Infrastructure**
- Database setup with Prisma
- Authentication system
- User API endpoints
- Base UI components

**Phase 2 (Weeks 3-4): User App**
- Dish browsing and filtering
- Cart and checkout
- Order placement
- Order tracking

**Phase 3 (Weeks 5-6): Chef & Admin Apps**
- Chef registration
- Admin dashboard
- Order management
- Payout system

**Phase 4 (Weeks 7-8): Advanced Features**
- Payment integration (Razorpay)
- Real-time notifications
- Review system
- Analytics

### Code Requirements

- Use TypeScript throughout with strict typing
- Use 'use client' for client components
- Use 'use server' for server components
- Follow Prisma schema exactly
- Implement all API endpoints
- Use shadcn/ui components
- Responsive design (mobile-first)
- Error handling and validation
- Security best practices

### Testing Requirements

- Unit tests for critical functions
- Integration tests for API endpoints
- E2E tests for user flows
- Load testing before production
- Security audit

---

## END OF DOCUMENT

This document contains all information needed to build and deploy the complete GharKaKhana platform.

**For questions:**
- Review sections above
- Contact resources listed
- Follow the development roadmap

**Good luck with building GharKaKhana!** 🚀

---

**Document Version:** 1.0.0
**Last Updated:** January 2025
**Size:** ~50 pages of comprehensive documentation
