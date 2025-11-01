# Wedding Invitation Website

## Project Overview
This is a wedding invitation website for Rene & Celia's wedding on December 28, 2025. The project is a full-stack JavaScript application showcasing a beautiful wedding invitation with multiple sections including hero, slideshow, invitation details, countdown, story, venue information, RSVP, entourage, dress code, and more.

## Project Architecture
- **Frontend**: React with TypeScript, Vite for bundling, Tailwind CSS + shadcn/ui for styling
- **Backend**: Express.js server with TypeScript
- **Routing**: Wouter (React routing library)
- **State Management**: TanStack Query for server state
- **Database**: In-memory storage (MemStorage) - can be upgraded to PostgreSQL if needed
- **Styling**: Tailwind CSS with custom wedding theme
- **Audio**: Background music integration with user interaction triggers

## Key Features
- Responsive wedding invitation website
- Interactive hero section with invitation opening animation
- Background music that starts on user interaction
- Interactive quiz game for invitation reveal
- Score-based invitation designs (premium for 4-5 correct, standard for 0-3 correct)
- Multiple content sections (story, venue, RSVP, FAQ, entourage, dress code, etc.)
- Modern UI components using shadcn/ui
- Dark/light theme support
- SEO optimized

## Current Wedding Details
- **Couple**: Rene & Celia
- **Date**: December 28, 2025 at 3:00 PM
- **Venue**: Milagros Garden, Siling Bata, Pandi, Bulacan (single venue for both ceremony and reception)
- **Timeline**: 
  - 2:30 PM: Guest Arrival
  - 3:00 PM: Ceremony
  - Total Event Duration: 6 hours
- **Hashtag**: #RENEwulitkayCELIA
- **RSVP Deadline**: December 15, 2025
- **Officiating Priest**: Father Alex Aquino

## Dress Code
- **Principal Sponsors**: 
  - Men: Black suit
  - Women: Formal gown in taupe, mocha, or dark mocha shades
- **Guests**: 
  - Semi-formal attire
  - Long sleeves or polo shirts
  - Dresses in nude colors

## Entourage
- **Principal Sponsors**: 14 couples
- **Secondary Sponsors**: 
  - Senior Groomsmen and Senior Bridesmaids
  - Junior Groomsmen and Junior Bridesmaids
  - Little Groom and Little Bride

## Development Notes
- Uses Replit's full-stack template with Express backend and React frontend
- Server runs on port 5000 and serves both API and frontend
- Vite handles development bundling and HMR
- Audio files are hosted on Cloudinary CDN
- Server configured with `allowedHosts: true` for Replit proxy compatibility

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## Recent Changes
- **2025-11-01**: Complete content update for Rene & Celia's wedding:
  - Updated all components with couple names "Rene & Celia"
  - Changed wedding date to December 28, 2025 at 3:00 PM
  - Updated venue to single location: Milagros Garden, Siling Bata, Pandi, Bulacan
  - Updated wedding timeline (2:30 PM arrival, 3:00 PM ceremony, 6-hour event)
  - Updated dress code section with specific attire requirements
  - Updated EntourageSection with 14 principal sponsor couples and all secondary sponsors
  - Added officiating priest Father Alex Aquino
  - Added wedding hashtag #RENEwulitkayCELIA
  - Updated RSVP deadline to December 15, 2025
  - Changed RSVP links from external site to mailto link
  - Updated Footer with new couple names and venue
  - Updated Navigation RSVP link to internal anchor
  - Updated all alt texts to reference Rene & Celia
  - Removed all references to previous couples (Isabel & Rustin, and others)
  - Fixed CoverSection to use alt prop instead of hardcoded alt text
  - Verified no old couple names remain in codebase (grep search confirmed)

## Technical Architecture
- Replit environment with npm packages properly installed
- Workflow "Start application" configured to run `npm run dev` on port 5000
- Deployment config set for autoscale deployment
- All components use modern React patterns with TypeScript
- Responsive design with mobile-first approach
- Dark mode aesthetic with sophisticated wedding styling
