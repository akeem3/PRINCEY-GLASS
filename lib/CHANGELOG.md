# Princey Glass - Project Changelog & Implementation Plan

## 🛠️ Project Stack Summary

| Area            | Tech                                                 |
| --------------- | ---------------------------------------------------- |
| Frontend        | Next.js + Tailwind CSS                               |
| Backend         | Node.js + Express.js                                 |
| Package Manager | pnpm (confirmed)                                     |
| Database        | MySQL (suggested: PlanetScale)                       |
| Hosting         | Render (Free Tier)                                   |
| Order Handling  | Google Sheets API (via Google Cloud Service Account) |
| Version Control | Git + GitHub                                         |
| CI/CD           | GitHub + Render autodeploy from main branch          |
| Asset Storage   | Free image hosting via Cloudinary (optional)         |

## 🧩 Project Structure Plan

```
/princey-glass
├── frontend/         # Next.js frontend
│   ├── pages/
│   ├── components/
│   ├── public/
│   └── styles/
│
├── backend/          # Express server
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── config/
│
├── shared/           # Common types/interfaces (if needed)
├── .env              # API keys and DB connection strings
├── docker/           # Optional for future containerization
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

- [x] Use Express.js with CORS and .env config
- [x] Install mysql2, dotenv, axios, googleapis

#### ✅ Database Setup

- [x] Recommend: PlanetScale — MySQL, scalable, free tier, no sleep like Render DB
- [x] Create a products table: name, description, image, price

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

| Variable               | Use                 |
| ---------------------- | ------------------- |
| MYSQL_HOST             | PlanetScale DB host |
| MYSQL_USER             | PlanetScale user    |
| MYSQL_PASSWORD         | DB password         |
| GOOGLE_SHEET_ID        | Google Sheet ID     |
| GOOGLE_SERVICE_ACCOUNT | JSON credentials    |

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

### ✅ Completed Components

- [x] **Navbar Component** (`components/Navbar.tsx`)

  - Responsive design with mobile menu
  - Placeholder for glassblower icon
  - Navigation links: Home, Shopping, Contact
  - **Fixed sticky positioning** with `fixed top-0 left-0 right-0 z-[9999]`
  - Centered layout with max-width container
  - Integrated into root layout
  - Updated to match Figma design: light grey rounded navigation container
  - Larger logo and improved spacing
  - Black text on white background for navigation links
  - Enhanced mobile dropdown with white background
  - **Robust Implementation**: TypeScript interfaces, proper error handling, JSX.Element return types
  - **Sticky Behavior Fix**: Changed from `sticky` to `fixed` positioning to ensure navbar stays visible when scrolling to categories section

- [x] **Hero Component** (`components/Hero.tsx`)

  - Optimized height (80vh) to reduce empty space and length
  - Next.js Image placeholder for glassblower background
  - Dark overlay for text readability (removed gradient backgrounds)
  - Right-aligned content with "FIRED BEAUTY" and "HANDMADE MAGIC" headline
  - Fresh copy: "Transform your space with handcrafted glass art..."
  - CTA button with arrow icon and hover effects
  - Responsive design with proper mobile scaling
  - **Robust Implementation**: TypeScript interfaces, proper error handling, configurable props
  - **Positioning Fix**: Absolute positioning to eliminate white space at top
  - **Layout Flow**: Spacer div ensures Categories section appears below Hero

- [x] **Categories Component** (`components/Categories.tsx`)

  - Olive green background matching Figma design
  - 3 horizontal product cards with enhanced styling
  - Responsive grid layout (1 column mobile, 3 columns desktop)
  - Enhanced card design with rounded-3xl corners and shadow-xl
  - Hover animations with transform and shadow effects
  - Larger typography and improved spacing
  - Placeholder images for each category (Accessories, Vases & Jars, Figurines)
  - CTA button with enhanced styling and larger size
  - **Green Section Enhancement**: Added negative margins to spread green portion to screen edges
  - **Improved Styling**: Added rounded-2xl corners to green section for better visual appeal
  - **Proper Padding**: Added py-16 for top and bottom padding on green section
  - **Robust Implementation**: TypeScript interfaces, proper error handling, configurable props

- [x] **Footer Component** (`components/Footer.tsx`)
  - **Dark Design**: Charcoal/dark gray background with light text for contrast
  - **Four-Column Layout**: Brand/About, Company, Support, Social sections
  - **Brand Section**: "Princey Glass" logo with vertical text layout and company description
  - **Link Sections**: Organized navigation links with hover effects
  - **Bottom Section**: Copyright and Payment Methods with border separator
  - **Responsive Design**: Mobile-first approach with proper grid layout
  - **TypeScript Implementation**: Proper interfaces for FooterLink and FooterColumn
  - **Accessibility**: Proper link structure and semantic HTML
  - **Integration**: Added to root layout for site-wide footer

### 🎨 Design System Implementation

- [x] **Color Palette** - Olive green (#6B7C32), Light beige (#F5F5DC), Black (#000000), White (#FFFFFF)
- [x] **Typography** - Bold headings, regular body text, consistent font weights
- [x] **Component Structure** - Modular React components with Tailwind CSS
- [x] **Responsive Design** - Mobile-first approach with breakpoints

### 📋 Figma Design Analysis

Based on the provided Figma design, the landing page includes:

1. **Header** - Princey Glass logo with glassblower icon + navigation ✅ **COMPLETED**
2. **Hero Section** - Glassblower background with "FIRED BEAUTY" and "HANDMADE MAGIC" headline ✅ **COMPLETED**
3. **Categories Section** - 3 product cards (Accessories, Vases & Jars, Figurines) ✅ **COMPLETED**
4. **About Section** - Two-column layout with "ABOUT PRINCEY" card
5. **Custom Work Section** - "REQUEST CUSTOM WORK" with glassblower image
6. **Testimonials Section** - 3 testimonial cards with ratings
7. **Footer** - Company info, links, and social media ✅ **COMPLETED**

**📝 Content Note:** All placeholder text needs fresh copy - Lorem ipsum will be replaced with actual content during implementation.

**🔧 Development Standards:**

- **Robust Coding**: TypeScript interfaces, proper error handling, JSX.Element return types
- **Error Prevention**: Comprehensive testing and validation before concluding
- **Code Quality**: High-level quality with thorough error checking
- **Type Safety**: Strict TypeScript implementation with proper interfaces

### 🔄 Next Implementation Steps

1. **About Section** - Two-column layout with olive green card
2. **Custom Work Section** - Image + content layout
3. **Testimonials Section** - Carousel with 3 cards

---

## 🆕 Recent Updates (February 2025)

### ✅ Navbar Sticky Behavior Fix

- **Issue**: Navbar disappeared when scrolling to categories section
- **Solution**: Changed from `sticky` to `fixed` positioning with `z-[9999]`
- **Result**: Navbar now stays visible at all times during scrolling

### ✅ Categories Section Enhancement

- **Green Section**: Spread to screen edges using negative margins
- **Styling**: Added rounded-2xl corners for better visual appeal
- **Padding**: Proper top and bottom padding (py-16) for better spacing

### ✅ Footer Component Implementation

- **Design**: Matches Figma design with dark background and four-column layout
- **Features**: Brand section, company links, support links, social media links
- **Integration**: Added to root layout for site-wide footer
- **Responsive**: Mobile-first design with proper grid layout

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

_Last Updated: February 8, 2025_
_Version: 1.0.11_
_Status: Implementation Phase - Global Button Hover Consistency Completed_
