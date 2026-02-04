# GharKaKhana - API Documentation
## Complete API Endpoints & Specifications

Version: 1.0.0
Base URL: `https://api.gharkakhana.in`
Documentation Last Updated: January 2025

---

## TABLE OF CONTENTS

1. [Authentication](#1-authentication)
2. [Users](#2-users)
3. [Home Chefs](#3-home-chefs)
4. [Dishes](#4-dishes)
5. [Orders](#5-orders)
6. [Payments](#6-payments)
7. [Reviews](#7-reviews)
8. [Delivery Partners](#8-delivery-partners)
9. [Subscriptions](#9-subscriptions)
10. [Admin](#10-admin)
11. [Error Codes](#error-codes)

---

## AUTHENTICATION

### 1.1 Send OTP (Phone Registration)

Send OTP to user's phone number for registration/login.

**Endpoint:** `POST /api/v1/auth/send-otp`

**Request Body:**
```json
{
  "phone": "+919876543210",
  "countryCode": "+91"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "otpId": "otp_abc123xyz",
    "expiresIn": 300,
    "resendAfter": 60
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Invalid phone number format"
}
```

**Response (429 Too Many Requests):**
```json
{
  "success": false,
  "error": "Too many attempts. Please try again later.",
  "retryAfter": 300
}
```

---

### 1.2 Verify OTP (Login/Register)

Verify OTP and return authentication token.

**Endpoint:** `POST /api/v1/auth/verify-otp`

**Request Body:**
```json
{
  "phone": "+919876543210",
  "otp": "123456",
  "otpId": "otp_abc123xyz",
  "deviceInfo": {
    "deviceId": "device_unique_id",
    "platform": "android",
    "osVersion": "13.0"
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "data": {
    "user": {
      "id": "usr_123abc",
      "phone": "+919876543210",
      "name": "Rahul Kumar",
      "isVerified": true,
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

**Response (401 Unauthorized):**
```json
{
  "success": false,
  "error": "Invalid OTP"
}
```

---

### 1.3 Refresh Token

Refresh access token using refresh token.

**Endpoint:** `POST /api/v1/auth/refresh-token`

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response (200 OK):**
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

### 1.4 Logout

Invalidate current session.

**Endpoint:** `POST /api/v1/auth/logout`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## USERS

### 2.1 Get User Profile

Get current user's profile details.

**Endpoint:** `GET /api/v1/users/profile`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "usr_123abc",
    "phone": "+919876543210",
    "name": "Rahul Kumar",
    "email": "rahul.kumar@example.com",
    "profile": {
      "address": "123, ABC Apartments, HSR Layout",
      "latitude": 12.9141,
      "longitude": 77.6101,
      "pincode": "560102",
      "city": "Bangalore",
      "state": "Karnataka",
      "dietaryPreferences": ["veg"],
      "favoriteCuisines": ["punjabi", "north-indian"],
      "loyaltyPoints": 480,
      "subscriptionPlan": "basic",
      "subscriptionExpiry": "2024-12-31"
    },
    "stats": {
      "totalOrders": 12,
      "avgOrderValue": 125.50,
      "reviewsGiven": 8
    }
  }
}
```

---

### 2.2 Update User Profile

Update user profile information.

**Endpoint:** `PUT /api/v1/users/profile`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "name": "Rahul Kumar",
  "email": "rahul.kumar@example.com",
  "profile": {
    "address": "123, ABC Apartments, HSR Layout",
    "latitude": 12.9141,
    "longitude": 77.6101,
    "pincode": "560102",
    "city": "Bangalore",
    "state": "Karnataka",
    "dietaryPreferences": ["veg", "jain"]
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "usr_123abc",
    "name": "Rahul Kumar",
    "email": "rahul.kumar@example.com",
    "profile": {
      "address": "123, ABC Apartments, HSR Layout",
      "latitude": 12.9141,
      "longitude": 77.6101,
      "pincode": "560102",
      "city": "Bangalore",
      "state": "Karnataka",
      "dietaryPreferences": ["veg", "jain"]
    }
  }
}
```

---

### 2.3 Get Order History

Get user's order history with pagination.

**Endpoint:** `GET /api/v1/users/orders`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page
- `status` (optional) - Filter by status: `pending`, `completed`, `cancelled`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "orders": [
      {
        "id": "ord_123abc",
        "orderNumber": "GKK-2024-001",
        "status": "delivered",
        "items": [
          {
            "dishId": "dish_123",
            "name": "Dal Makhani",
            "quantity": 1,
            "price": 120
          }
        ],
        "totalAmount": 140,
        "createdAt": "2024-01-15T10:30:00Z",
        "deliveryAddress": "123, ABC Apartments, HSR Layout",
        "chef": {
          "id": "chef_123",
          "name": "Sunita Sharma",
          "rating": 4.8
        }
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

## HOME CHEFS

### 3.1 Register as Home Chef

Register a new home chef (requires authentication).

**Endpoint:** `POST /api/v1/chefs/register`

**Headers:**
```
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "name": "Sunita Sharma",
  "phone": "+919876543211",
  "email": "sunita.sharma@example.com",
  "fssaiLicenseNumber": "100123456789",
  "fssaiExpiryDate": "2025-12-31",
  "kitchenAddress": "456, XYZ Society, Koramangala",
  "latitude": 12.9352,
  "longitude": 77.6245,
  "pincode": "560034",
  "bio": "Experienced home chef specializing in Punjabi cuisine",
  "specialties": ["punjabi", "north-indian"]
}
```

**File Uploads:**
- `kitchenPhotos` (array of files) - Minimum 3 photos
- `profilePhoto` (file) - Optional
- `fssaiDocument` (file) - FSSAI license image

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Home chef registration submitted successfully",
  "data": {
    "id": "chef_123",
    "name": "Sunita Sharma",
    "phone": "+919876543211",
    "verificationStatus": "pending",
    "kitchenPhotos": [
      "https://s3.gharkakhana.in/kitchen/abc123.jpg",
      "https://s3.gharkakhana.in/kitchen/def456.jpg",
      "https://s3.gharkakhana.in/kitchen/ghi789.jpg"
    ],
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 3.2 Get Nearby Home Chefs

Get list of verified home chefs near user's location.

**Endpoint:** `GET /api/v1/chefs/nearby`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `latitude` (required) - User's latitude
- `longitude` (required) - User's longitude
- `radius` (optional, default: 3) - Search radius in km
- `cuisine` (optional) - Filter by cuisine type
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Example Request:**
```
GET /api/v1/chefs/nearby?latitude=12.9141&longitude=77.6101&radius=5&page=1&limit=10
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "chefs": [
      {
        "id": "chef_123",
        "name": "Sunita Sharma",
        "profilePhoto": "https://s3.gharkakhana.in/chef/sunita.jpg",
        "specialties": ["punjabi", "north-indian"],
        "rating": 4.8,
        "reviews": 245,
        "distance": 1.2,
        "verified": true,
        "activeDishes": 12,
        "todayOrders": 5
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "totalPages": 5
    }
  }
}
```

---

### 3.3 Get Chef Details

Get detailed information about a specific home chef.

**Endpoint:** `GET /api/v1/chefs/{chefId}`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "chef_123",
    "name": "Sunita Sharma",
    "profilePhoto": "https://s3.gharkakhana.in/chef/sunita.jpg",
    "bio": "Experienced home chef with 10+ years of experience in Punjabi cuisine",
    "specialties": ["punjabi", "north-indian"],
    "rating": 4.8,
    "hygieneRating": 4.7,
    "reviews": 245,
    "totalOrders": 1250,
    "kitchenAddress": "456, XYZ Society, Koramangala",
    "distance": 1.2,
    "verified": true,
    "verifiedDate": "2024-01-01",
    "dishes": [
      {
        "id": "dish_123",
        "name": "Dal Makhani",
        "price": 120,
        "rating": 4.7,
        "availablePortions": 8,
        "preparationTime": 30
      }
    ],
    "reviews": [
      {
        "id": "rev_123",
        "rating": 5,
        "comment": "Amazing food! Tastes just like home.",
        "createdAt": "2024-01-14T12:00:00Z"
      }
    ]
  }
}
```

---

### 3.4 Get Chef Dashboard

Get chef dashboard with orders, earnings, and statistics.

**Endpoint:** `GET /api/v1/chefs/dashboard`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "today": {
      "orders": 5,
      "revenue": 625.00,
      "activeOrders": 2
    },
    "week": {
      "orders": 28,
      "revenue": 3500.00,
      "averageRating": 4.7
    },
    "month": {
      "orders": 115,
      "revenue": 14375.00,
      "payout": 12218.75,
      "commission": 2156.25
    },
    "recentOrders": [
      {
        "id": "ord_123",
        "orderNumber": "GKK-2024-001",
        "status": "cooking",
        "items": [
          {
            "dishName": "Dal Makhani",
            "quantity": 1
          }
        ],
        "total": 120,
        "customerPhone": "+91XXXXXXXXXX",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

---

### 3.5 Update Order Status

Update order status (for chefs).

**Endpoint:** `PUT /api/v1/chefs/orders/{orderId}/status`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "status": "cooking",
  "notes": "Started preparing"
}
```

**Valid Status Transitions:**
- `pending` → `accepted`
- `accepted` → `cooking`
- `cooking` → `packed`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Order status updated successfully",
  "data": {
    "orderId": "ord_123",
    "status": "cooking",
    "updatedAt": "2024-01-15T10:45:00Z"
  }
}
```

---

### 3.6 Get Earnings

Get chef's earnings history.

**Endpoint:** `GET /api/v1/chefs/earnings`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `period` (optional, default: 'month') - `day`, `week`, `month`, `year`
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalRevenue": 14375.00,
      "totalPayout": 12218.75,
      "totalCommission": 2156.25,
      "pendingPayout": 1500.00
    },
    "earnings": [
      {
        "date": "2024-01-15",
        "orders": 5,
        "revenue": 625.00,
        "payout": 531.25,
        "commission": 93.75
      }
    ],
    "payouts": [
      {
        "id": "payout_123",
        "periodStart": "2024-01-01",
        "periodEnd": "2024-01-07",
        "amount": 5312.50,
        "status": "processed",
        "processedAt": "2024-01-09T00:00:00Z"
      }
    ]
  }
}
```

---

## DISHES

### 4.1 Get Dishes

Get list of dishes with filters.

**Endpoint:** `GET /api/v1/dishes`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `latitude` (required) - User's latitude
- `longitude` (required) - User's longitude
- `radius` (optional, default: 3) - Search radius in km
- `chefId` (optional) - Filter by chef
- `cuisine` (optional) - Filter by cuisine type
- `category` (optional) - Filter by category: `breakfast`, `lunch`, `dinner`, `snack`
- `dietaryTag` (optional) - Filter by dietary tag: `veg`, `non-veg`, `jain`
- `minPrice` (optional) - Minimum price
- `maxPrice` (optional) - Maximum price
- `search` (optional) - Search in dish name and description
- `sort` (optional, default: 'distance') - Sort by: `distance`, `rating`, `price_asc`, `price_desc`, `popularity`
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Example Request:**
```
GET /api/v1/dishes?latitude=12.9141&longitude=77.6101&dietaryTag=veg&cuisine=punjabi&sort=rating&page=1&limit=20
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "dishes": [
      {
        "id": "dish_123",
        "name": "Dal Makhani",
        "nameHindi": "दाल मखनी",
        "description": "Creamy black lentils slow-cooked for hours with butter and cream",
        "photos": [
          "https://s3.gharkakhana.in/dishes/dal-makhani-1.jpg",
          "https://s3.gharkakhana.in/dishes/dal-makhani-2.jpg"
        ],
        "price": 120,
        "halfPortionPrice": 70,
        "cuisine": "punjabi",
        "category": "lunch",
        "dietaryTags": ["veg"],
        "preparationTime": 30,
        "rating": 4.7,
        "reviews": 128,
        "availablePortions": 8,
        "chef": {
          "id": "chef_123",
          "name": "Sunita Sharma",
          "rating": 4.8,
          "distance": 1.2
        }
      }
    ],
    "filters": {
      "cuisines": ["punjabi", "south-indian", "north-indian", "rajasthani"],
      "categories": ["breakfast", "lunch", "dinner", "snack"],
      "dietaryTags": ["veg", "non-veg", "jain", "gluten-free", "diabetic-friendly"]
    },
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "totalPages": 3
    }
  }
}
```

---

### 4.2 Get Dish Details

Get detailed information about a specific dish.

**Endpoint:** `GET /api/v1/dishes/{dishId}`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "dish_123",
    "name": "Dal Makhani",
    "nameHindi": "दाल मखनी",
    "description": "Creamy black lentils slow-cooked for hours with butter and cream. A classic Punjabi delicacy that melts in your mouth.",
    "photos": [
      "https://s3.gharkakhana.in/dishes/dal-makhani-1.jpg",
      "https://s3.gharkakhana.in/dishes/dal-makhani-2.jpg"
    ],
    "price": 120,
    "halfPortionPrice": 70,
    "cuisine": "punjabi",
    "category": "lunch",
    "dietaryTags": ["veg"],
    "spiceLevel": "medium",
    "availability": {
      "lunch": true,
      "dinner": true
    },
    "preparationTime": 30,
    "rating": 4.7,
    "reviews": 128,
    "totalOrders": 450,
    "availablePortions": 8,
    "ingredients": "Black lentils (urad dal), butter, cream, tomatoes, ginger, garlic, spices",
    "nutritionalInfo": {
      "calories": 350,
      "protein": 15,
      "carbs": 40,
      "fat": 15
    },
    "chef": {
      "id": "chef_123",
      "name": "Sunita Sharma",
      "profilePhoto": "https://s3.gharkakhana.in/chef/sunita.jpg",
      "rating": 4.8,
      "reviews": 245,
      "verified": true,
      "distance": 1.2
    }
  }
}
```

---

### 4.3 Add Dish (Chef Only)

Add a new dish (requires chef authentication).

**Endpoint:** `POST /api/v1/chefs/dishes`

**Headers:**
```
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "name": "Dal Makhani",
  "nameHindi": "दाल मखनी",
  "description": "Creamy black lentils slow-cooked for hours",
  "cuisine": "punjabi",
  "category": "lunch",
  "dietaryTags": ["veg"],
  "price": 120,
  "halfPortionPrice": 70,
  "preparationTime": 30,
  "spiceLevel": "medium",
  "availability": {
    "lunch": true,
    "dinner": true
  },
  "ingredients": "Black lentils, butter, cream, tomatoes",
  "nutritionalInfo": {
    "calories": 350,
    "protein": 15,
    "carbs": 40,
    "fat": 15
  }
}
```

**File Uploads:**
- `photos` (array of files) - Minimum 1 photo, maximum 5 photos

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Dish added successfully",
  "data": {
    "id": "dish_123",
    "name": "Dal Makhani",
    "price": 120,
    "active": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 4.4 Update Dish (Chef Only)

Update existing dish.

**Endpoint:** `PUT /api/v1/chefs/dishes/{dishId}`

**Headers:**
```
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body:** (All fields optional)
```json
{
  "price": 130,
  "availablePortions": 10,
  "active": false
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Dish updated successfully",
  "data": {
    "id": "dish_123",
    "name": "Dal Makhani",
    "price": 130,
    "active": false
  }
}
```

---

### 4.5 Delete Dish (Chef Only)

Delete a dish permanently.

**Endpoint:** `DELETE /api/v1/chefs/dishes/{dishId}`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Dish deleted successfully"
}
```

---

## ORDERS

### 5.1 Create Order

Place a new order.

**Endpoint:** `POST /api/v1/orders`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "items": [
    {
      "dishId": "dish_123",
      "quantity": 1,
      "portion": "full"
    },
    {
      "dishId": "dish_456",
      "quantity": 1,
      "portion": "half"
    }
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

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Order created successfully",
  "data": {
    "id": "ord_123",
    "orderNumber": "GKK-2024-001",
    "status": "pending",
    "items": [
      {
        "dishId": "dish_123",
        "name": "Dal Makhani",
        "quantity": 1,
        "price": 120
      }
    ],
    "chef": {
      "id": "chef_123",
      "name": "Sunita Sharma",
      "phone": "+919876543211"
    },
    "subtotal": 190,
    "deliveryFee": 20,
    "discount": 25,
    "totalAmount": 185,
    "estimatedDeliveryTime": "2024-01-15T13:05:00Z",
    "createdAt": "2024-01-15T12:30:00Z"
  }
}
```

---

### 5.2 Get Order Details

Get detailed information about a specific order.

**Endpoint:** `GET /api/v1/orders/{orderId}`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "ord_123",
    "orderNumber": "GKK-2024-001",
    "status": "cooking",
    "items": [
      {
        "dishId": "dish_123",
        "name": "Dal Makhani",
        "nameHindi": "दाल मखनी",
        "photo": "https://s3.gharkakhana.in/dishes/dal-makhani-1.jpg",
        "quantity": 1,
        "price": 120
      }
    ],
    "chef": {
      "id": "chef_123",
      "name": "Sunita Sharma",
      "profilePhoto": "https://s3.gharkakhana.in/chef/sunita.jpg",
      "phone": "+919876543211",
      "rating": 4.8
    },
    "delivery": {
      "address": "123, ABC Apartments, HSR Layout",
      "latitude": 12.9141,
      "longitude": 77.6101,
      "partner": {
        "id": "delivery_123",
        "name": "Ramesh Kumar",
        "phone": "+919876543212",
        "vehicle": "Bike",
        "currentLatitude": 12.9200,
        "currentLongitude": 77.6150
      },
      "estimatedTime": "2024-01-15T13:05:00Z",
      "actualTime": null
    },
    "subtotal": 120,
    "deliveryFee": 20,
    "discount": 0,
    "totalAmount": 140,
    "payment": {
      "method": "upi",
      "status": "completed",
      "transactionId": "TXN123456789"
    },
    "specialInstructions": "Less spicy please",
    "timeline": [
      {
        "status": "pending",
        "note": "Order placed",
        "createdAt": "2024-01-15T12:30:00Z"
      },
      {
        "status": "accepted",
        "note": "Chef accepted the order",
        "createdAt": "2024-01-15T12:32:00Z"
      },
      {
        "status": "cooking",
        "note": "Started preparing",
        "createdAt": "2024-01-15T12:35:00Z"
      }
    ],
    "createdAt": "2024-01-15T12:30:00Z",
    "updatedAt": "2024-01-15T12:35:00Z"
  }
}
```

---

### 5.3 Track Order

Get real-time order tracking information.

**Endpoint:** `GET /api/v1/orders/{orderId}/track`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "orderId": "ord_123",
    "orderNumber": "GKK-2024-001",
    "status": "out_for_delivery",
    "statusText": "On the way to you",
    "progress": 75,
    "estimatedDeliveryTime": "2024-01-15T13:05:00Z",
    "remainingTime": 12,
    "chef": {
      "id": "chef_123",
      "name": "Sunita Sharma",
      "phone": "+919876543211",
      "kitchenAddress": "456, XYZ Society, Koramangala",
      "latitude": 12.9352,
      "longitude": 77.6245
    },
    "deliveryPartner": {
      "id": "delivery_123",
      "name": "Ramesh Kumar",
      "phone": "+919876543212",
      "vehicle": "Bike",
      "currentLatitude": 12.9250,
      "currentLongitude": 77.6200,
      "photo": "https://s3.gharkakhana.in/delivery/ramesh.jpg"
    },
    "timeline": [
      {
        "status": "pending",
        "label": "Order Placed",
        "completed": true,
        "time": "12:30 PM"
      },
      {
        "status": "accepted",
        "label": "Chef Accepted",
        "completed": true,
        "time": "12:32 PM"
      },
      {
        "status": "cooking",
        "label": "Preparing Food",
        "completed": true,
        "time": "12:35 PM"
      },
      {
        "status": "packed",
        "label": "Food Packed",
        "completed": true,
        "time": "12:55 PM"
      },
      {
        "status": "out_for_delivery",
        "label": "Out for Delivery",
        "completed": true,
        "time": "12:57 PM"
      },
      {
        "status": "delivered",
        "label": "Delivered",
        "completed": false,
        "time": "1:05 PM"
      }
    ]
  }
}
```

---

### 5.4 Cancel Order

Cancel an order.

**Endpoint:** `POST /api/v1/orders/{orderId}/cancel`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "reason": "Changed mind"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Order cancelled successfully",
  "data": {
    "orderId": "ord_123",
    "status": "cancelled",
    "refundAmount": 140,
    "refundMessage": "Refund will be processed within 5-7 business days"
  }
}
```

**Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Cannot cancel order - Chef has already started preparing"
}
```

---

## PAYMENTS

### 6.1 Create Payment Order

Create a payment order via Razorpay.

**Endpoint:** `POST /api/v1/payments/create-order`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "orderId": "ord_123",
  "amount": 14000,
  "currency": "INR",
  "method": "upi"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "razorpayOrderId": "order_abc123",
    "amount": 14000,
    "currency": "INR",
    "keyId": "rzp_test_abc123",
    "name": "GharKaKhana",
    "description": "Payment for order GKK-2024-001",
    "prefill": {
      "name": "Rahul Kumar",
      "email": "rahul.kumar@example.com",
      "contact": "+919876543210"
    },
    "theme": {
      "color": "#FF6B35"
    }
  }
}
```

---

### 6.2 Verify Payment

Verify payment success after Razorpay callback.

**Endpoint:** `POST /api/v1/payments/verify`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "razorpayOrderId": "order_abc123",
  "razorpayPaymentId": "pay_abc123",
  "razorpaySignature": "9a4b2c8d0e1f",
  "orderId": "ord_123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "data": {
    "paymentId": "pay_123",
    "orderId": "ord_123",
    "amount": 14000,
    "status": "completed",
    "commissionAmount": 1800,
    "chefPayoutAmount": 12200,
    "deliveryPayoutAmount": 2000
  }
}
```

---

### 6.3 Request Refund

Request a refund for a payment.

**Endpoint:** `POST /api/v1/payments/{paymentId}/refund`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "amount": 14000,
  "reason": "Food quality issue"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Refund request submitted successfully",
  "data": {
    "refundId": "refund_abc123",
    "amount": 14000,
    "status": "processing",
    "estimatedProcessingTime": "5-7 business days"
  }
}
```

---

## REVIEWS

### 7.1 Submit Review

Submit a review for an order.

**Endpoint:** `POST /api/v1/reviews`

**Headers:**
```
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "orderId": "ord_123",
  "dishId": "dish_123",
  "chefId": "chef_123",
  "rating": 5,
  "foodQualityRating": 5,
  "packagingRating": 4,
  "hygieneRating": 5,
  "comment": "Amazing food! Tastes just like home."
}
```

**File Uploads:**
- `photos` (array of files) - Review photos (optional, max 3)

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Review submitted successfully",
  "data": {
    "id": "rev_123",
    "orderId": "ord_123",
    "rating": 5,
    "comment": "Amazing food! Tastes just like home.",
    "createdAt": "2024-01-15T13:30:00Z"
  }
}
```

---

### 7.2 Get Reviews

Get reviews for a dish or chef.

**Endpoint:** `GET /api/v1/reviews`

**Query Parameters:**
- `dishId` (optional) - Filter by dish
- `chefId` (optional) - Filter by chef
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page
- `sort` (optional, default: 'recent') - Sort by: `recent`, `rating_high`, `rating_low`, `helpful`

**Example Request:**
```
GET /api/v1/reviews?chefId=chef_123&page=1&limit=10&sort=rating_high
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "reviews": [
      {
        "id": "rev_123",
        "orderId": "ord_123",
        "user": {
          "id": "usr_123",
          "name": "Rahul Kumar"
        },
        "dish": {
          "id": "dish_123",
          "name": "Dal Makhani"
        },
        "rating": 5,
        "foodQualityRating": 5,
        "packagingRating": 4,
        "hygieneRating": 5,
        "comment": "Amazing food! Tastes just like home.",
        "photos": [
          "https://s3.gharkakhana.in/reviews/abc123.jpg"
        ],
        "helpfulCount": 12,
        "createdAt": "2024-01-15T13:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 128,
      "totalPages": 13
    }
  }
}
```

---

### 7.3 Flag Review

Flag an inappropriate review.

**Endpoint:** `POST /api/v1/reviews/{reviewId}/flag`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "reason": "Spam or inappropriate content"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Review flagged successfully",
  "data": {
    "reviewId": "rev_123",
    "flagged": true,
    "reason": "Spam or inappropriate content"
  }
}
```

---

## DELIVERY PARTNERS

### 8.1 Register as Delivery Partner

Register a new delivery partner.

**Endpoint:** `POST /api/v1/delivery-partners/register`

**Headers:**
```
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "name": "Ramesh Kumar",
  "phone": "+919876543212",
  "aadhaarNumber": "1234-5678-9012",
  "drivingLicense": "DL123456789",
  "vehicleType": "bike",
  "vehicleNumber": "KA01AB1234"
}
```

**File Uploads:**
- `profilePhoto` (file) - Profile photo
- `aadhaarPhoto` (file) - Aadhaar card photo
- `licensePhoto` (file) - Driving license photo

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Delivery partner registration submitted successfully",
  "data": {
    "id": "delivery_123",
    "name": "Ramesh Kumar",
    "phone": "+919876543212",
    "verificationStatus": "pending",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 8.2 Go Online/Offline

Update delivery partner online status.

**Endpoint:** `PUT /api/v1/delivery-partners/online-status`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "isOnline": true,
  "currentLatitude": 12.9141,
  "currentLongitude": 77.6101
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Online status updated successfully",
  "data": {
    "isOnline": true,
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### 8.3 Accept Delivery

Accept a delivery assignment.

**Endpoint:** `POST /api/v1/delivery-partners/assignments/{assignmentId}/accept`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Delivery accepted successfully",
  "data": {
    "assignmentId": "assign_123",
    "orderId": "ord_123",
    "status": "assigned",
    "estimatedPayout": 20
  }
}
```

---

### 8.4 Update Delivery Status

Update delivery status.

**Endpoint:** `PUT /api/v1/delivery-partners/assignments/{assignmentId}/status`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "status": "picked_up",
  "currentLatitude": 12.9352,
  "currentLongitude": 77.6245
}
```

**Valid Status Transitions:**
- `assigned` → `picked_up`
- `picked_up` → `delivered`
- `delivered` (final status)

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Delivery status updated successfully",
  "data": {
    "assignmentId": "assign_123",
    "status": "picked_up",
    "pickupTime": "2024-01-15T13:00:00Z",
    "updatedAt": "2024-01-15T13:00:00Z"
  }
}
```

---

### 8.5 Get Earnings

Get delivery partner earnings.

**Endpoint:** `GET /api/v1/delivery-partners/earnings`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `period` (optional, default: 'week') - `day`, `week`, `month`, `year`
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalEarnings": 3750.00,
      "totalDeliveries": 150,
      "averageEarnings": 25.00,
      "rating": 4.5
    },
    "earnings": [
      {
        "date": "2024-01-15",
        "deliveries": 18,
        "earnings": 450.00
      }
    ],
    "payouts": [
      {
        "id": "payout_456",
        "periodStart": "2024-01-08",
        "periodEnd": "2024-01-14",
        "amount": 1750.00,
        "status": "processed",
        "processedAt": "2024-01-16T00:00:00Z"
      }
    ]
  }
}
```

---

## SUBSCRIPTIONS

### 9.1 Get Subscription Plans

Get available subscription plans.

**Endpoint:** `GET /api/v1/subscriptions/plans`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "plans": [
      {
        "id": "plan_basic",
        "name": "Basic",
        "price": 199,
        "currency": "INR",
        "duration": 30,
        "benefits": [
          "Free delivery on 10+ orders per month",
          "Priority customer support",
          "Exclusive discounts"
        ]
      },
      {
        "id": "plan_standard",
        "name": "Standard",
        "price": 299,
        "currency": "INR",
        "duration": 30,
        "benefits": [
          "10% discount on all orders",
          "Free delivery on all orders",
          "Priority delivery",
          "Exclusive dishes access",
          "Priority customer support"
        ]
      },
      {
        "id": "plan_premium",
        "name": "Premium",
        "price": 499,
        "currency": "INR",
        "duration": 30,
        "benefits": [
          "15% discount on all orders",
          "Free delivery on all orders",
          "Priority delivery",
          "Exclusive dishes access",
          "Priority customer support",
          "Monthly free meal",
          "Early access to new dishes"
        ]
      }
    ]
  }
}
```

---

### 9.2 Subscribe to Plan

Subscribe to a subscription plan.

**Endpoint:** `POST /api/v1/subscriptions/subscribe`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "planId": "plan_standard",
  "paymentMethod": "upi"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Subscription activated successfully",
  "data": {
    "id": "sub_123",
    "planId": "plan_standard",
    "planName": "Standard",
    "startDate": "2024-01-15",
    "endDate": "2024-02-14",
    "amountPaid": 299,
    "active": true,
    "benefits": [
      "10% discount on all orders",
      "Free delivery on all orders"
    ]
  }
}
```

---

### 9.3 Get Subscription Details

Get current subscription details.

**Endpoint:** `GET /api/v1/subscriptions/current`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "sub_123",
    "plan": {
      "id": "plan_standard",
      "name": "Standard",
      "price": 299
    },
    "startDate": "2024-01-15",
    "endDate": "2024-02-14",
    "active": true,
    "daysRemaining": 30,
    "benefits": {
      "discountPercentage": 10,
      "freeDelivery": true,
      "priorityDelivery": true
    },
    "usage": {
      "ordersThisMonth": 12,
      "freeDeliveriesUsed": 12,
      "discountsUsed": 12,
      "totalSaved": 120.00
    }
  }
}
```

---

### 9.4 Cancel Subscription

Cancel active subscription.

**Endpoint:** `POST /api/v1/subscriptions/cancel`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Subscription cancelled successfully",
  "data": {
    "subscriptionId": "sub_123",
    "endDate": "2024-02-14",
    "willAutoRenew": false
  }
}
```

---

## ADMIN

### 10.1 Admin Login

Admin authentication.

**Endpoint:** `POST /api/v1/admin/login`

**Request Body:**
```json
{
  "email": "admin@gharkakhana.in",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "admin": {
      "id": "admin_123",
      "email": "admin@gharkakhana.in",
      "name": "Admin User",
      "role": "super_admin"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 604800
    }
  }
}
```

---

### 10.2 Get Dashboard Stats

Get admin dashboard statistics.

**Endpoint:** `GET /api/v1/admin/dashboard`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `period` (optional, default: 'today') - `today`, `week`, `month`, `year`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "overview": {
      "todayOrders": 127,
      "todayRevenue": 15240.00,
      "activeUsers": 1843,
      "activeChefs": 85,
      "pendingVerifications": 12
    },
    "trends": {
      "ordersGrowth": 15.5,
      "revenueGrowth": 18.2,
      "usersGrowth": 12.0
    },
    "topDishes": [
      {
        "id": "dish_123",
        "name": "Dal Makhani",
        "orders": 45,
        "rating": 4.7
      }
    ],
    "topChefs": [
      {
        "id": "chef_123",
        "name": "Sunita Sharma",
        "orders": 28,
        "rating": 4.8
      }
    ]
  }
}
```

---

### 10.3 Get Pending Verifications

Get pending home chef verifications.

**Endpoint:** `GET /api/v1/admin/verifications/pending`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "verifications": [
      {
        "id": "chef_456",
        "name": "Lakshmi Devi",
        "phone": "+919876543213",
        "email": "lakshmi.devi@example.com",
        "fssaiLicenseNumber": "100987654321",
        "kitchenAddress": "789, PQR Street, Indiranagar",
        "kitchenPhotos": [
          "https://s3.gharkakhana.in/kitchen/xyz1.jpg",
          "https://s3.gharkakhana.in/kitchen/xyz2.jpg",
          "https://s3.gharkakhana.in/kitchen/xyz3.jpg"
        ],
        "profilePhoto": "https://s3.gharkakhana.in/chef/lakshmi.jpg",
        "bio": "South Indian cuisine specialist",
        "specialties": ["south-indian", "andhra"],
        "appliedAt": "2024-01-15T08:30:00Z"
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

### 10.4 Approve/Reject Verification

Approve or reject home chef verification.

**Endpoint:** `POST /api/v1/admin/verifications/{chefId}/approve`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body (for rejection):**
```json
{
  "action": "reject",
  "reason": "Kitchen photos do not meet hygiene standards"
}
```

**Request Body (for approval):**
```json
{
  "action": "approve"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Home chef approved successfully",
  "data": {
    "chefId": "chef_456",
    "status": "approved",
    "verificationDate": "2024-01-15T10:30:00Z"
  }
}
```

---

### 10.5 Manage Disputes

Get and manage disputes.

**Endpoint:** `GET /api/v1/admin/disputes`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `status` (optional) - Filter by status: `open`, `investigating`, `resolved`, `closed`
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "disputes": [
      {
        "id": "disp_123",
        "orderId": "ord_456",
        "raisedBy": {
          "id": "usr_789",
          "name": "Amit Singh",
          "phone": "+919876543214"
        },
        "disputeType": "food_quality",
        "description": "Food was cold and not fresh",
        "status": "investigating",
        "createdAt": "2024-01-15T14:00:00Z",
        "orderDetails": {
          "orderNumber": "GKK-2024-045",
          "chefName": "Sunita Sharma",
          "totalAmount": 140
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 5,
      "totalPages": 1
    }
  }
}
```

---

### 10.6 Resolve Dispute

Resolve a dispute.

**Endpoint:** `POST /api/v1/admin/disputes/{disputeId}/resolve`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "resolution": "Refund full amount to customer",
  "refundAmount": 140,
  "status": "resolved"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Dispute resolved successfully",
  "data": {
    "disputeId": "disp_123",
    "status": "resolved",
    "resolution": "Refund full amount to customer",
    "refundAmount": 140,
    "refundId": "refund_xyz123",
    "resolvedAt": "2024-01-15T15:00:00Z"
  }
}
```

---

### 10.7 Get Payout Requests

Get pending payout requests for chefs and delivery partners.

**Endpoint:** `GET /api/v1/admin/payouts/pending`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Query Parameters:**
- `type` (optional) - Filter by type: `chef`, `delivery`
- `page` (optional, default: 1) - Page number
- `limit` (optional, default: 20) - Items per page

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "payouts": [
      {
        "id": "payout_789",
        "chefId": "chef_123",
        "chefName": "Sunita Sharma",
        "type": "chef",
        "periodStart": "2024-01-08",
        "periodEnd": "2024-01-14",
        "totalAmount": 5312.50,
        "payoutAmount": 5312.50,
        "commission": 937.50,
        "orders": 28,
        "status": "pending",
        "requestedAt": "2024-01-15T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 15,
      "totalPages": 1
    }
  }
}
```

---

### 10.8 Process Payout

Process a payout.

**Endpoint:** `POST /api/v1/admin/payouts/{payoutId}/process`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request Body:**
```json
{
  "transactionId": "TXN123456789",
  "notes": "Processed via NEFT"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Payout processed successfully",
  "data": {
    "payoutId": "payout_789",
    "status": "processed",
    "transactionId": "TXN123456789",
    "processedAt": "2024-01-16T00:00:00Z"
  }
}
```

---

## ERROR CODES

### Standard HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request parameters |
| 401 | Unauthorized - Authentication required or invalid |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 422 | Unprocessable Entity - Validation failed |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |
| 503 | Service Unavailable - Server temporarily unavailable |

### Application-Specific Error Codes

| Code | Message | Description |
|------|---------|-------------|
| AUTH_001 | Invalid phone number format | Phone number format is incorrect |
| AUTH_002 | Invalid OTP | OTP provided is incorrect |
| AUTH_003 | OTP expired | OTP has expired |
| AUTH_004 | Too many OTP attempts | Exceeded maximum OTP attempts |
| AUTH_005 | Invalid token | Authentication token is invalid |
| AUTH_006 | Token expired | Authentication token has expired |
| USER_001 | User not found | User does not exist |
| USER_002 | Email already registered | Email is already in use |
| CHEF_001 | Chef not found | Home chef does not exist |
| CHEF_002 | Already registered as chef | User is already a home chef |
| CHEF_003 | FSSAI license already exists | FSSAI license is already registered |
| DISH_001 | Dish not found | Dish does not exist |
| DISH_002 | Insufficient portions | Not enough portions available |
| ORDER_001 | Order not found | Order does not exist |
| ORDER_002 | Cannot cancel order | Order cannot be cancelled in current state |
| ORDER_003 | Invalid order status | Invalid order status transition |
| PAYMENT_001 | Payment failed | Payment processing failed |
| PAYMENT_002 | Refund failed | Refund processing failed |
| REVIEW_001 | Review not found | Review does not exist |
| REVIEW_002 | Already reviewed | Order already has a review |
| ADMIN_001 | Admin access required | Admin permissions required |
| VALIDATION_001 | Validation error | Request validation failed |
| VALIDATION_002 | Missing required field | Required field is missing |
| VALIDATION_003 | Invalid data format | Data format is incorrect |

### Error Response Format

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {
    "field": "Additional error details"
  }
}
```

### Rate Limiting

| Endpoint Type | Rate Limit |
|--------------|------------|
| Authentication (OTP) | 3 requests per 5 minutes |
| API Requests (Authenticated) | 100 requests per minute |
| API Requests (Unauthenticated) | 50 requests per minute |

Rate limit headers are included in all responses:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642252800
```

---

## WEBHOOKS

### Payment Webhooks

**Endpoint:** `POST /api/v1/webhooks/payment/razorpay`

Razorpay payment success/failure callbacks.

**Webhook Payload (Payment Success):**
```json
{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "entity": {
        "id": "pay_abc123",
        "amount": 14000,
        "currency": "INR",
        "status": "captured",
        "order_id": "order_abc123",
        "invoice_id": null,
        "international": false,
        "amount_refunded": 0,
        "refund_status": null,
        "captured": true,
        "description": "Payment for order GKK-2024-001",
        "card_id": null,
        "bank": null,
        "wallet": null,
        "vpa": "user@upi",
        "email": "rahul.kumar@example.com",
        "contact": "+919876543210",
        "notes": {},
        "fee": 140,
        "tax": 18,
        "error_code": null,
        "error_description": null,
        "created_at": 1642252800
      }
    }
  }
}
```

---

## APPENDIX

### Authentication Flow

1. User sends phone number → `/api/v1/auth/send-otp`
2. System generates OTP and sends via MSG91
3. User verifies OTP → `/api/v1/auth/verify-otp`
4. System returns access token and refresh token
5. User includes access token in `Authorization: Bearer {token}` header
6. When token expires, user refreshes → `/api/v1/auth/refresh-token`

### Order Status Flow

```
pending → accepted → cooking → packed → out_for_delivery → delivered
                    ↓
                 cancelled
```

### File Upload Guidelines

- **Maximum file size:** 5MB per file
- **Supported formats:** JPEG, PNG, WEBP
- **Image dimensions:** Recommended 800x800px minimum
- **Compression:** Auto-compression applied by server

### Pagination

All list endpoints support pagination:

- `page`: Page number (starts from 1)
- `limit`: Items per page (default: 20, max: 100)

Response includes pagination metadata:

```json
{
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### Timestamps

All timestamps are in ISO 8601 format (UTC):
```
2024-01-15T10:30:00Z
```

### Currency

All monetary values are in Indian Rupees (INR) as integers in paise (cents):
- ₹100.00 → `10000`
- ₹150.50 → `15050`

---

**END OF API DOCUMENTATION**

For questions or support, contact: api@gharkakhana.in
