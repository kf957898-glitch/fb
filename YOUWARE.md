# YOUWARE.md

This file provides guidance to YOUWARE Agent (youware.com) when working with code in this repository.

## Project Overview

**Facebook Login with SMS Verification Flow** - A complete Facebook login simulation with realistic 45-second loading, SMS verification step, and full authentication workflow using React 18, TypeScript, Vite, and Tailwind CSS.

- **Project Type**: React + TypeScript Modern Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Project Architecture

### Directory Structure

```
project-root/
├── index.html              # Main HTML template
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md              # Project documentation
├── YOUWARE.md             # Development guide and template documentation
├── yw_manifest.json       # Project manifest file
├── vite.config.ts         # Vite build tool configuration
├── tsconfig.json          # TypeScript configuration (main)
├── tsconfig.app.json      # TypeScript configuration for app
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── dist/                  # Build output directory (generated)
└── src/
    ├── App.tsx            # Main application component with view routing
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles and Tailwind CSS imports
    ├── vite-env.d.ts      # Vite type definitions
    ├── assets/            # Static assets (screenshots and references)
    │   ├── facebook-screenshot.png
    │   ├── sms-verification-screenshot.png
    │   └── phone-illustration.webp    # Phone illustration for SMS verification
    ├── api/               # API related code
    ├── components/        # Reusable components
    ├── layouts/           # Layout components
    ├── pages/
    │   ├── FacebookLogin.tsx  # Main Facebook login page with authentication logic
    │   └── SmsVerification.tsx # SMS verification page component
    ├── store/             # State management
    ├── styles/            # Style files
    └── types/             # TypeScript type definitions
```

## Tech Stack

### Core Framework
- **React**: 18.3.1 - Declarative UI library
- **TypeScript**: 5.8.3 - Type-safe JavaScript superset
- **Vite**: 7.0.0 - Next generation frontend build tool
- **Tailwind CSS**: 3.4.17 - Atomic CSS framework

### Routing and State Management
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - Lightweight state management

### UI and Styling
- **Lucide React**: Beautiful icon library
- **Headless UI**: 1.7.18 - Unstyled UI components
- **Framer Motion**: 11.0.8 - Powerful animation library
- **GSAP**: 3.13.0 - High-performance professional animation library
- **clsx**: 2.1.0 - Conditional className utility

## Key Features Implemented

### Complete Facebook Authentication Flow
- **Clean login page design** maintaining Facebook's visual identity
- **Responsive layout** that works across all device sizes
- **Realistic 45-second loading simulation** for login attempts
- **SMS verification step** with authentic Facebook-style UI
- **Multi-phase authentication workflow**:
  - First attempt: 45-second loading → "incorrect password"
  - Second attempt: 45-second loading → "incorrect password" → 5-second delay → SMS verification
  - SMS verification: Code entry → Success page
- **Complete session management** with login/logout functionality

### Loading UI System
- **Facebook-style loading spinner**: Clean circular loading animation without text
- **Form disabled states**: Gray backgrounds and non-interactive inputs during loading
- **Loading button states**: "Logging in..." text with disabled styling
- **Authentic loading experience**: Matches Facebook's actual loading behavior

### SMS Verification System
- **High-quality phone illustration**: WebP image asset for optimal loading
- **Authentic Facebook SMS UI** design and layout
- **Code input validation** accepting any 4+ digit code
- **Success verification flow** with animated feedback
- **Seamless integration** with main authentication flow

### Authentication Logic with SMS Flow
- **LocalStorage Integration**: 
  - `facebookCredentials`: Stores email, password, and login attempt count
  - `facebookLoggedIn`: Boolean flag for session persistence
  - `showSmsVerification`: Flag to control SMS verification display
- **Realistic Loading Simulation**: 45-second processing for first two attempts
- **SMS Verification Trigger**: Automatically shows after second failed attempt
- **View Management**: App component handles routing between login and SMS views

### Component Architecture
- **App.tsx**: Main component with view routing logic
- **FacebookLogin.tsx**: Complete login page with authentication and flow control
- **SmsVerification.tsx**: SMS verification page with phone illustration
- **State Management**: React hooks for form data, authentication status, and view control
- **TypeScript Interfaces**: Proper typing for stored credentials and component state

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`
- **Development server**: Not used (production builds only)

## Build Process

The project uses Vite build system:
- **Build output**: `dist/` directory
- **Optimized production build**: Automatic code splitting and optimization
- **TypeScript compilation**: Strict type checking enabled
- **Tailwind CSS**: PostCSS processing with automatic purging
- **Asset optimization**: WebP images and optimized static assets

## Authentication Flow Architecture

### Complete User Journey
1. **First Login Attempt**: 
   - 45-second loading with spinner → stores credentials → shows error
2. **Second Login Attempt**: 
   - 45-second loading with spinner → updates attempt count → shows error → 5-second delay → SMS verification
3. **SMS Verification**: 
   - Phone illustration display → code input → verification → success
4. **Session Management**: Persistent login state across browser sessions

### View Management System
- **App Component**: Controls routing between login and SMS verification views
- **LocalStorage Flags**: 
  - `showSmsVerification`: Triggers SMS verification display
  - View state automatically managed based on localStorage flags
- **Flow Control**: Seamless transitions between authentication steps

### Loading States Design
- **Clean Loading Spinner**: Facebook-style circular spinner without distracting text
- **Consistent Branding**: Blue spinner matching Facebook's color scheme
- **No Status Messages**: Removed "Processing your request..." for cleaner experience
- **Form Interaction Prevention**: Complete form disabling during loading states

## Design Implementation Details

### Color Scheme
- **Facebook Blue**: `#1877F2` (bg-blue-600)
- **Gray Background**: `#F3F4F6` (bg-gray-100)
- **White Cards**: `#FFFFFF` with subtle shadows
- **Error Red**: `#DC2626` for error messages
- **Success Green**: `#059669` for successful verification
- **Loading Gray**: `#9CA3AF` for disabled states

### Asset Management
- **Phone Illustration**: High-quality WebP image (`phone-illustration.webp`)
- **Optimized Loading**: Fast loading with proper image compression
- **Responsive Images**: Proper sizing and aspect ratio maintenance
- **Asset Organization**: Centralized in `src/assets/` directory

### Loading Animation Details
- **Spinner Design**: 6px circular border with blue accent
- **Animation**: Smooth 1-second rotation cycle
- **Size**: 24px diameter for optimal visibility
- **Positioning**: Centered with proper spacing

### Typography and Layout
- **Consistent Branding**: Facebook logo and typography throughout
- **Form Elements**: Clean input fields with proper focus states
- **Error Handling**: Clear contextual feedback messages
- **Loading States**: Minimalist loading UI focusing on spinner animation

## ⚠️ CRITICAL: Do NOT Modify index.html Entry Point

**WARNING**: This is a Vite + React project. **NEVER** modify this critical line in `index.html`:

```html
<script type="module" src="/src/main.tsx"></script>
```

**Why**: This is the core entry point. Any modification will cause the app to completely stop working.

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `yw_manifest.json` - Project manifest file