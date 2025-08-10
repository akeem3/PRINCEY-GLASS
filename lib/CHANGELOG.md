# Princey Glass - Project Changelog & Implementation Plan

## 🛠️ Project Stack Summary

| Area            | Tech                                                 |
| --------------- | ---------------------------------------------------- |
| Frontend        | Next.js + Tailwind CSS                               |
| Backend         | Next.js API Routes                                   |
| Package Manager | pnpm (confirmed)                                     |
| Database        | PostgreSQL (Aiven) + Prisma ORM                      |
| Hosting         | Render (Free Tier)                                   |
| Order Handling  | Google Sheets API (via Google Cloud Service Account) |
| Version Control | Git + GitHub                                         |
| CI/CD           | GitHub + Render autodeploy from main branch          |
| Asset Storage   | Free image hosting via Cloudinary (optional)         |

## 🧩 Project Structure Plan

```
/princey-glass
├── app/              # Next.js App Router
│   ├── api/          # API routes
│   │   ├── products/
│   │   └── orders/
│   ├── shop/         # Shop pages
│   │   └── [id]/     # Individual product pages
│   ├── components/   # React components
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── prisma/           # Database schema and migrations
│   └── schema.prisma
│
├── lib/              # Utility functions
│   └── prisma.ts     # Prisma client
│
├── .env              # Environment variables
└── README.md
```

## 📅 Development Roadmap

### Phase 1: Project Setup

#### ✅ Initialize the repos

- [x] Create a monorepo using PNPM workspaces
- [x] Set up GitHub repo with frontend/ and backend/

#### ✅ Frontend Setup

- [x] Scaffold with pnpm create next-app
- [x] Install TailwindCSS, Headless UI, axios
- [x] Install additional dependencies: lucide-react, framer-motion, @headlessui/react
- [x] Configure Tailwind CSS with custom brand colors (olive green, light beige)
- [x] Create components directory structure
- [x] Create Navbar component with responsive design and placeholder logo
- [x] Integrate Navbar into root layout for site-wide navigation

#### ✅ Backend Setup

- [x] **UPDATED**: Next.js API Routes (no separate Express server needed)
- [x] **UPDATED**: Prisma ORM for database management
- [x] Install prisma, @prisma/client

#### ✅ Database Setup

- [x] **Updated**: PostgreSQL (Aiven) — scalable, reliable, production-ready
- [x] **UPDATED**: Prisma ORM for database management
- [x] **COMPLETED**: Prisma initialization (`npx prisma init`)
- [x] **COMPLETED**: Prisma schema created at `prisma/schema.prisma`
- [ ] Create Product model with Prisma schema
- [ ] Run Prisma migration to create database tables

#### ✅ Google Sheets API Setup

- [x] Enable Google Sheets API in Google Cloud Console
- [x] Create a Service Account + share the Sheet with its email
- [x] Store credentials as a .json file, referenced in .env

### Phase 2: Core Features Development

#### 🖼️ 1. Landing Page

- Components: Hero, Category Cards, About Section, Testimonials
- All content is static or fetched via props if needed

#### 🛍️ 2. Shop Page

- Fetch product list from backend /api/products
- Use Tailwind for responsive product cards
- "Buy" button triggers an order form modal or a direct request

#### 📤 3. Order Handling

- On "Buy", send order data to backend:

```typescript
POST /api/order
{
  name: 'Pendant One',
  customer_email: 'xyz@example.com',
  payment_method: 'Pay on delivery'
}
```

- Backend adds this to Google Sheets using Google Sheets API

#### 📩 4. Contact Page

- Basic form with Name, Email, Message
- Optional: use emailjs or save to another Google Sheet

## 🔐 Environment Variables Needed

| Variable               | Use                                                |
| ---------------------- | -------------------------------------------------- |
| DATABASE_URL           | Aiven PostgreSQL connection string (✅ CONFIGURED) |
| GOOGLE_SHEET_ID        | Google Sheet ID                                    |
| GOOGLE_SERVICE_ACCOUNT | JSON credentials                                   |

## ✅ Best Practices & Tools

| Area            | Tool / Practice                                                           |
| --------------- | ------------------------------------------------------------------------- |
| Git Hosting     | GitHub (autodeploy with Render)                                           |
| Image Hosting   | Cloudinary Free Tier (if not embedding all images)                        |
| API Calls       | Use Axios, centralize API logic                                           |
| Type Safety     | Use TypeScript (optional but strongly recommended)                        |
| Logging         | Use simple winston or console logs in dev                                 |
| Error Handling  | Use try/catch and centralized error handlers in Express                   |
| Component Reuse | Modular React components (e.g., ProductCard, Header, Footer)              |
| Code Linting    | ESLint + Prettier config (already built-in in most Next.js setups)        |
| Performance     | Optimize images, lazy-load components, use <Image /> in Next.js           |
| Analytics       | (Optional) Add simple tools like Plausible or PostHog (free up to limits) |

## 🧪 Testing (Optional for MVP)

| Type           | Tool                                     |
| -------------- | ---------------------------------------- |
| Unit/API Tests | Jest + supertest                         |
| E2E Tests      | Cypress (optional, if you want solid QA) |

## 🧾 Deployment Strategy

- Frontend and Backend can be hosted separately on Render:
  - Frontend: Static Next.js build
  - Backend: Node server with API endpoints
- Use GitHub deploy hooks or connect Render to autodeploy from main

## 🧠 Stretch Goals / Optional Additions

- Admin dashboard (to upload or delete products)
- WhatsApp integration on orders
- Webhook to auto-email admin when a new order is made
- SEO: Add meta tags, OG tags, and sitemap
- Add reCAPTCHA to contact/order form

---

## 📋 Section-by-Section Implementation Plan

### 🏠 Landing Page (Home)

#### Header Section

- **Logo**: "Princey Glass" with glassblower icon
- **Navigation**: Home, Shopping, Contact links
- **Styling**: White text on dark overlay, positioned absolutely over hero image

#### Hero Section

- **Background**: Glassblower working with torch (warm-toned, blurred)
- **Content**:
  - Main headline: "BOLD STYLE EVERY DAY"
  - Subtitle: Lorem ipsum placeholder text
  - CTA Button: "Get Started" (black background, white text)
- **Layout**: Right-aligned content on hero image

#### Categories Section

- **Background**: Olive green top section, light beige bottom
- **Title**: "VIEW OUR CATEGORIES" (white, centered)
- **Product Cards**: 3 horizontal cards
  - Accessories (iridescent pendant)
  - Vases & Jars (red pendant)
  - Figurines (blue/white striped pendant)
- **CTA**: "Go To Shop" button

#### About Princey Section

- **Layout**: Two-column design
- **Left Card**: Olive green background
  - Title: "ABOUT PRINCEY"
  - Greeting: "Hey guys!!"
  - Description: Lorem ipsum text
  - CTA: "Read More" button
- **Right Image**: Multi-colored glass pendant

#### Request Custom Work Section

- **Layout**: Two-column design
- **Left Image**: Glassblower working with safety glasses
- **Right Content**: Olive green background
  - Title: "REQUEST CUSTOM WORK"
  - Description: Lorem ipsum text
  - CTA: "Start Now" button

#### Testimonials Section

- **Background**: Light beige
- **Title**: "WHAT OUR CLIENTS SAY" (left-aligned)
- **CTA**: "Get Started" button (right-aligned)
- **Cards**: 3 horizontal testimonial cards
  - Name: "Jack William"
  - Rating: 4/5 stars
  - Review: Lorem ipsum text
- **Navigation**: Carousel arrows

#### Footer

- **Top Section** (Black background):
  - Left: Logo + company description
  - Middle: 3 columns of links
  - Right: Social media links
- **Bottom Section** (Dark grey):
  - Left: Copyright "@2024 Princey"
  - Right: "Payment Methods"

### 🛍️ Shop Page

#### Header (Same as Home)

- Logo and navigation consistent with home page

#### Hero Section

- **Background**: Same glassblower image
- **Content**:
  - Main headline: "SHOPPING TIME"
  - Subtitle: "Get Shopping mudafuckers!!!"
  - Description: Lorem ipsum text

#### Product Grid

- **Layout**: 3-column responsive grid
- **Products**: 12 product cards (4 rows × 3 columns)
- **Card Design**:
  - Product image (teardrop pendant on string)
  - Product name (Pendant one, two, three)
  - Price: "2 $"
  - Buy button (black background, white text)
- **Product Variations**:
  - Pendant one: Iridescent, multi-colored
  - Pendant two: Vibrant red
  - Pendant three: Blue/grey swirled

#### Footer (Same as Home)

### 📞 Contact Page

#### Header (Same as Home)

- Logo and navigation consistent with home page

#### Hero Section

- **Background**: Same glassblower image
- **Content**:
  - Main headline: "CONTACT US"
  - Subtitle: "Get Shopping mudafuckers!!!"
  - Description: Lorem ipsum text

#### Contact Form Section

- **Layout**: Large empty content area (light beige background)
- **Form Elements** (to be implemented):
  - Name field
  - Email field
  - Message textarea
  - Submit button
- **Styling**: Clean, modern form design

#### Footer (Same as Home)

---

## 🎨 Design System

### Color Palette

- **Primary**: Olive Green (#6B7C32)
- **Secondary**: Light Beige (#F5F5DC)
- **Accent**: Black (#000000)
- **Text**: White (#FFFFFF) on dark backgrounds
- **Text**: Black (#000000) on light backgrounds

### Typography

- **Headings**: Bold, sans-serif
- **Body**: Regular, sans-serif
- **Buttons**: Bold, white text on black background

### Components

- **Buttons**: Rounded rectangles, black background, white text
- **Cards**: Rounded corners, consistent padding
- **Navigation**: Clean, minimal design
- **Hero Sections**: Dark overlay on background images

---

## 📝 Implementation Notes

### Priority Order

1. **Landing Page** - Core business presentation
2. **Shop Page** - Revenue generation
3. **Contact Page** - Customer service
4. **Backend API** - Order processing
5. **Database Integration** - Product management
6. **Google Sheets Integration** - Order tracking

### Technical Considerations

- **Responsive Design**: Mobile-first approach
- **Performance**: Optimize images and lazy loading
- **SEO**: Meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation
- **Security**: Form validation and CSRF protection
- **Code Quality**: TypeScript interfaces, proper error handling, JSX.Element return types
- **Error Prevention**: Comprehensive testing and validation before deployment

### Content Strategy

- **Static Content**: About sections, testimonials
- **Dynamic Content**: Products, orders
- **SEO Content**: Meta descriptions, alt text
- **Legal Content**: Privacy policy, terms of service

---

## 🚀 Implementation Progress

### ✅ **LANDING PAGE COMPLETED** (All Components Working)

- [x] **Navbar Component** (`components/Navbar.tsx`) - Fixed positioning, responsive design
- [x] **Hero Component** (`components/Hero.tsx`) - Glassblower background, "FIRED BEAUTY" headline
- [x] **Categories Component** (`components/Categories.tsx`) - 3-column cards, olive green styling
- [x] **About Component** (`components/About.tsx`) - Modal popup with detailed content
- [x] **Custom Work Component** (`components/CustomWork.tsx`) - Overlapping design
- [x] **Testimonials Component** (`components/Testimonials.tsx`) - Sliding carousel
- [x] **Footer Component** (`components/Footer.tsx`) - Dark design, four-column layout

### 🔄 **SHOP PAGE IN PROGRESS** (Currently Working On)

- [x] **Prisma Setup** - Initialized and schema created
- [ ] **Database Schema** - Product model configuration
- [ ] **API Routes** - Next.js App Router endpoints
- [ ] **Shop Page Components** - Hero, banner, grid, cards
- [ ] **Individual Product Pages** - Detail pages with Buy + Add to Cart
- [ ] **Navigation Updates** - Shop routing and breadcrumbs

### 🎨 Design System Implementation

- [x] **Color Palette** - Olive green (#6B7C32), Light beige (#F5F5DC), Black (#000000), White (#FFFFFF)
- [x] **Typography** - Bold headings, regular body text, consistent font weights
- [x] **Component Structure** - Modular React components with Tailwind CSS
- [x] **Responsive Design** - Mobile-first approach with breakpoints
- [x] **Button Styling** - Consistent hover states with olive green (#727D57)

### 📋 Figma Design Analysis

Based on the provided Figma design, the landing page includes:

1. **Header** - Princey Glass logo with glassblower icon + navigation ✅ **COMPLETED**
2. **Hero Section** - Glassblower background with "FIRED BEAUTY" and "HANDMADE MAGIC" headline ✅ **COMPLETED**
3. **Categories Section** - 3 product cards (Accessories, Vases & Jars, Figurines) ✅ **COMPLETED**
4. **About Section** - Two-column layout with "ABOUT PRINCEY" card ✅ **COMPLETED**
5. **Custom Work Section** - "REQUEST CUSTOM WORK" with glassblower image ✅ **COMPLETED**
6. **Testimonials Section** - 3 testimonial cards with ratings ✅ **COMPLETED**
7. **Footer** - Company info, links, and social media ✅ **COMPLETED**

### 🛍️ **SHOP PAGE DESIGN** (From Attached Image)

1. **Shop Hero** - "SHOPPING TIME" with glassblower background
2. **Accessories Banner** - Olive green with "Accessories" title
3. **Product Grid** - 3×4 layout (12 products total)
4. **Product Cards** - Square images, white info boxes, "2 $" pricing, black "Buy" buttons
5. **Individual Product Pages** - Full details with **Buy + Add to Cart buttons**

**🔧 Development Standards:**

- **Robust Coding**: TypeScript interfaces, proper error handling, JSX.Element return types
- **Error Prevention**: Comprehensive testing and validation before concluding
- **Code Quality**: High-level quality with thorough error checking
- **Type Safety**: Strict TypeScript implementation with proper interfaces

### 🔄 **CURRENT IMPLEMENTATION FOCUS**

**NEXT: Shop Page Implementation**

1. **Configure Prisma schema** for Product model
2. **Create Next.js API routes** in `/app/api/` folder
3. **Build shop page components** (Hero, banner, grid, cards)
4. **Implement individual product pages** with Buy + Add to Cart functionality

---

## 🆕 Recent Updates (February 2025)

### ✅ **MAJOR ARCHITECTURE CHANGE - RESTARTED IMPLEMENTATION**

- **Previous Approach**: Separate Express.js backend + MySQL
- **New Approach**: Next.js API Routes + Prisma ORM + PostgreSQL (Aiven)
- **Reason**: Simplified architecture, better integration, no separate server needed
- **Status**: Prisma initialized, ready for schema configuration

### ✅ **Prisma Setup Completed**

- **Initialization**: `npx prisma init` completed successfully
- **Schema Created**: `prisma/schema.prisma` ready for Product model
- **Database**: Aiven PostgreSQL connection configured
- **Environment**: DATABASE_URL properly set in .env

### ✅ **Previous Landing Page Components** (Still Working)

- **Navbar**: Fixed positioning, responsive design
- **Hero**: Glassblower background with "FIRED BEAUTY" headline
- **Categories**: 3-column product cards with olive green styling
- **About**: Modal popup with detailed content
- **Custom Work**: Overlapping design with glass working image
- **Testimonials**: Sliding carousel with star ratings
- **Footer**: Dark design with four-column layout

## 📝 Changes

### Navbar Logo Improvements (Latest)

- **Logo Structure**: Restructured to match brand design with stacked "Princey Glass" text and person image
- **Text Alignment**: Left-aligned both "Princey" and "Glass" text for better visual balance
- **Image Positioning**: Logo image positioned after the brand text as per design
- **Size Optimization**: Adjusted logo image size to w-12 h-12 for proper proportions
- **Spacing**: Increased navbar padding to px-6 for better edge spacing
- **Transparency**: Maintained bg-white/90 with backdrop blur for modern glass effect

### About Section Implementation

- **Design Layout**: Created overlapping layout with olive green card and glass pendant image
- **Layering Effect**: Added shadow layering with darker olive green background for depth
- **Square Card**: Implemented square About card with proper proportions and spacing
- **Image Integration**: Used actual image (`/image/cate1.jpg`) instead of placeholder gradients
- **Responsive Design**: Mobile-first approach with proper grid layout and spacing
- **Professional Styling**: Left-aligned text, proper typography hierarchy, and clean button design

### Custom Work Section Implementation

- **Overlapping Design**: Created dramatic overlapping effect where glass working image extends into About section
- **Image Integration**: Used actual glass working image (`/image/custom.jpg`) with proper Next.js Image optimization
- **Extended Layout**: Image extends upward with `-mt-48` positioning for dramatic visual impact
- **Content Positioning**: Text content positioned to work around the overlapping image
- **Shorter Section**: Reduced padding and spacing for more compact layout
- **Professional Quality**: High-quality image display with proper object-cover and responsive design

### Image Display Fixes

- **Real Images**: Replaced all placeholder gradients with actual images from `/public/image/` folder
- **Next.js Optimization**: Proper Image component implementation with fill and object-cover
- **Performance**: Optimized image loading with proper alt text and responsive sizing
- **Available Images**: Confirmed custom.jpg (137KB), cate1.jpg (116KB), cate2.jpg (135KB), cate3.jpg (133KB)

### UI/UX Improvements (Latest)

- **Button Styling**: Updated all buttons from `rounded-full` to `rounded-2xl` for modern, consistent design
- **Footer Background**: Changed footer background from `bg-gray-900` to `bg-[#1E1E1E]` for darker, more professional look
- **Copy Improvements**: Replaced all Lorem ipsum text with engaging, authentic copy about Princey Glass
- **About Section Copy**: Added compelling content about craftsmanship, experience, and studio work
- **Custom Work Copy**: Created engaging copy about custom glass work, vision, and collaboration
- **Professional Tone**: Maintained consistent, professional voice throughout all content

### About Section Modal Popup (Latest)

- **Modal Functionality**: Added popup modal that opens when "Read More" button is clicked
- **Rich Content**: Modal contains detailed sections about Princey's journey, craft, studio, process, and philosophy
- **Scrollable Content**: Modal content is scrollable with `max-h-[60vh] overflow-y-auto`
- **Professional Design**: Modal features olive green header with close button and clean white content area
- **Accessibility**: Added proper aria-label for close button and z-index management
- **Detailed Sections**: Includes "My Journey", "The Craft", "My Studio", "The Process", "What Makes Each Piece Unique", "My Philosophy", and "The Future"
- **Engaging Copy**: Comprehensive, authentic content that tells Princey's story and glass crafting expertise

### Testimonials Section Implementation (Latest)

- **Sliding Carousel**: Implemented smooth sliding functionality with navigation arrows
- **Star Ratings**: Dynamic star rating system with filled and outlined stars
- **Navigation Controls**: Left and right arrow buttons for testimonial navigation
- **Dots Indicator**: Visual dots showing current testimonial position
- **Professional Design**: Matches design image with olive green cards and light background
- **Responsive Layout**: Mobile-first design with proper spacing and typography
- **Multiple Testimonials**: 5 authentic testimonials with realistic names and ratings
- **Smooth Transitions**: 500ms ease-in-out transitions for professional feel
- **Accessibility**: Proper aria-labels for navigation buttons and screen readers
- **Layout Refinements**: Header text aligned with testimonial box edge, increased vertical padding (py-32), removed unnecessary "Get Started" button for cleaner design

### Global Button Hover Update (Latest)

- **Consistent Branding**: Updated all button hover states across the entire landing page to use olive green `#727D57`
- **Components Updated**: Hero, Categories, About, CustomWork, and Testimonials sections
- **Visual Consistency**: All interactive elements now have unified hover color for better brand recognition
- **Professional Appearance**: Creates cohesive color scheme throughout the entire user experience
- **Enhanced UX**: Clear visual feedback with consistent hover states across all sections

---

## 🛍️ Shop Page Implementation Plan (February 2025)

### **Phase 1: Database & Backend Setup (CURRENTLY WORKING ON)**

#### **Step 1.1: Database Setup**

- [x] **Aiven PostgreSQL database** - User has set up and ready
- [x] **Prisma initialization** - `npx prisma init` completed
- [x] **Prisma schema created** - `prisma/schema.prisma` ready for configuration
- [ ] **Configure Prisma schema** for Product model:
  ```prisma
  model Product {
    id          Int      @id @default(autoincrement())
    name        String
    description String
    category    String   @default("Accessories")
    price       Decimal
    image_url   String
    created_at  DateTime @default(now())
    updated_at  DateTime @updatedAt
  }
  ```
- [ ] **Run Prisma migration** to create database tables
- [ ] **Seed database** with 12 sample pendant products

#### **Step 1.2: Next.js API Routes Setup**

- [ ] **Create `/app/api/products/route.ts`** - GET all products with pagination
- [ ] **Create `/app/api/products/[id]/route.ts`** - GET single product
- [ ] **Create `/app/api/products/categories/route.ts`** - GET all categories
- [ ] **Create `/app/api/products/search/route.ts`** - Search products
- [ ] **Create `/app/api/orders/route.ts`** - POST order submission
- [ ] **Set up Prisma client** in `lib/prisma.ts`
- [ ] **Add error handling** for API endpoints

#### **Step 1.3: Environment Variables**

- [x] **DATABASE_URL configured** in .env file
- [ ] **Google Sheets integration** (for future order handling)

### **Phase 2: Frontend Implementation (AI TASKS)**

#### **Step 2.1: Create Shop Page Route**

- [ ] **Create `/app/shop/page.tsx`** - Main shop page
- [ ] **Update navbar** "Shopping" link to point to `/shop`

#### **Step 2.2: Shop Hero Component**

- [ ] **Create `components/ShopHero.tsx`**:
  - Background: Glassblower working image
  - Title: "SHOPPING TIME"
  - Subtitle: "Get Shopping mudafuckers!!!"
  - Description: Lorem ipsum text
  - Rounded bottom corners

#### **Step 2.3: Product Grid Component**

- [ ] **Create `components/ProductGrid.tsx`**:
  - 3-column responsive grid (desktop)
  - 2-column for tablet
  - 1-column for mobile
  - Loading states
  - Error handling

#### **Step 2.4: Product Card Component**

- [ ] **Create `components/ProductCard.tsx`**:
  - Product image (square format)
  - Product name
  - Category badge (olive green)
  - Price display
  - "Buy" button with hover effects

#### **Step 2.5: Product Modal Component**

- [ ] **Create `components/ProductModal.tsx`**:
  - Large product image
  - Product name and category
  - Detailed description
  - Price and purchase options
  - Close/back navigation

### **Phase 3: API Integration (AI TASKS)**

#### **Step 3.1: API Service**

- [ ] **Create `lib/api.ts`** for API calls:
  ```typescript
  export const fetchProducts = async () => {
    /* API call */
  };
  export const fetchProduct = async (id: string) => {
    /* API call */
  };
  export const submitOrder = async (orderData: OrderData) => {
    /* API call */
  };
  ```

#### **Step 3.2: Data Fetching**

- [ ] **Integrate API calls** in ProductGrid component
- [ ] **Add loading states** with skeleton components
- [ ] **Add error handling** with user-friendly messages

### **Phase 4: Styling & Polish (AI TASKS)**

#### **Step 4.1: Design Implementation**

- [ ] **Apply olive green color scheme** (#727D57)
- [ ] **Use light background** (#F5F5DC)
- [ ] **Consistent button styling** across components
- [ ] **Responsive design** for all screen sizes

#### **Step 4.2: Navigation Updates**

- [ ] **Update navbar** "Shopping" link to `/shop`
- [ ] **Add breadcrumb navigation**
- [ ] **Back to home functionality**

### **Phase 5: Advanced Features (AI TASKS)**

#### **Step 5.1: Filtering & Search**

- [ ] **Category filtering** functionality
- [ ] **Search products** by name
- [ ] **Filter UI components**

#### **Step 5.2: Order System**

- [ ] **Order form modal** when "Buy" is clicked
- [ ] **Google Sheets integration** for order tracking
- [ ] **Order confirmation** messages

### **🎯 Design Specifications:**

#### **Shop Hero Section:**

- Background: Glassblower working image (same as home)
- Title: "SHOPPING TIME"
- Subtitle: "Get Shopping mudafuckers!!!"
- Description: Lorem ipsum text
- Rounded bottom corners

#### **Accessories Section Banner:**

- Olive green background
- White text: "Accessories"
- Subtitle: "Beauty is in the eyes of the beholder!!"

#### **Product Grid:**

- Layout: 3 columns × 4 rows = 12 products (as per design image)
- Card Design:
  - Square product image (teardrop pendants on black background)
  - White information box below image
  - Product name (e.g., "Pendant one", "Pendant two")
  - Price: "2 $" for all products
  - "Buy" button (black background, white text)

#### **Individual Product Pages:**

- Route: `/shop/[id]` for each product
- Layout: Dedicated page with full product details
- Content:
  - Large product image
  - Product name and category
  - Detailed description
  - Price and purchase options
  - Back to shop navigation

### **🔧 Technical Implementation:**

#### **Components to Create:**

- **ShopHero.tsx** - Hero section with "SHOPPING TIME" and glassblower background
- **AccessoriesBanner.tsx** - Olive green banner with "Accessories" title
- **ProductGrid.tsx** - Main product grid container (3×4 layout, 12 products)
- **ProductCard.tsx** - Individual product card with image, name, price, buy button
- **ProductPage.tsx** - Individual product page component with **Buy + Add to Cart buttons**
- **ShopPage.tsx** - Main shop page component

#### **API Integration:**

- **Database Schema**: PostgreSQL with Aiven + Prisma ORM
- **API Routes**: Next.js App Router (`/app/api/products/`)
- **Responsive Design**:
  - Desktop: 3-column grid
  - Tablet: 2-column grid
  - Mobile: 1-column grid
- **Navigation**: Consistent with home page navbar
- **Individual Product Pages**: `/shop/[id]` routing

#### **🎯 Features:**

- **Product Display**: 12 products in responsive grid (3×4 layout)
- **Individual Product Pages**: Dedicated pages for each product (`/shop/[id]`)
- **Buy + Add to Cart Buttons**: On individual product pages (as requested)
- **Category Filtering**: Filter by product category
- **Search Functionality**: Search products by name
- **Loading States**: Skeleton loading while fetching data
- **Error Handling**: Graceful error display
- **Navigation**: Back to shop from product pages

#### **🔗 Navigation:**

- Update navbar "Shopping" link to point to /shop
- Individual product page routing (`/shop/[id]`)
- Back to shop navigation from product pages
- Breadcrumb navigation (optional)

### **📋 Implementation Priority:**

#### **CURRENT IMPLEMENTATION STATUS:**

1. ✅ **Aiven PostgreSQL database** - Already set up
2. ✅ **DATABASE_URL configured** in .env file
3. ✅ **Prisma initialized** - `npx prisma init` completed
4. ✅ **Prisma schema created** - Ready for Product model configuration
5. 🔄 **NEXT: Configure Prisma schema** and run migration
6. 🔄 **NEXT: Create Next.js API routes** in `/app/api/` folder

#### **AI TASKS (After Database Setup):**

1. **Frontend Shop Page Components**:

   - `/app/shop/page.tsx` - Main shop page
   - `components/ShopHero.tsx` - Hero section
   - `components/AccessoriesBanner.tsx` - Olive green banner
   - `components/ProductGrid.tsx` - 3×4 product grid
   - `components/ProductCard.tsx` - Individual product cards

2. **Individual Product Pages**:

   - `/app/shop/[id]/page.tsx` - Product detail pages
   - `components/ProductPage.tsx` - Product detail component
   - **Buy and Add to Cart buttons** (as requested)

3. **Navigation Updates**:

   - Update navbar "Shopping" link to `/shop`
   - Add breadcrumb navigation
   - Back navigation from product pages

4. **Features Implementation**:
   - Product filtering by category
   - Search functionality
   - Loading states with skeleton components
   - Error handling with user-friendly messages
   - Responsive design (3 columns desktop, 2 tablet, 1 mobile)

---

_Last Updated: February 8, 2025_
_Version: 1.0.14_
_Status: RESTARTED - Using Next.js API Routes + Prisma - Shop Page Implementation In Progress_
