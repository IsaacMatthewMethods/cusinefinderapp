# Firebase Deployment Guide

This guide will help you deploy your Yoruba Food Helper app to Firebase Hosting as a static site.

## Prerequisites

1. Install Firebase CLI globally:
   \`\`\`bash
   npm install -g firebase-tools
   \`\`\`

2. Login to Firebase:
   \`\`\`bash
   firebase login
   \`\`\`

## Setup Steps

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Copy your project ID

2. **Update Firebase Configuration**
   - Edit `.firebaserc` file
   - Replace `"your-project-id"` with your actual Firebase project ID

3. **Initialize Firebase (Optional)**
   If you want to reconfigure Firebase settings:
   \`\`\`bash
   npm run firebase:init
   \`\`\`

## Build and Deploy

1. **Build the static site**:
   \`\`\`bash
   npm run export
   \`\`\`
   This creates an `out` folder with all static files.

2. **Deploy to Firebase**:
   \`\`\`bash
   npm run deploy
   \`\`\`
   Or manually:
   \`\`\`bash
   firebase deploy
   \`\`\`

3. **Test locally** (optional):
   \`\`\`bash
   npm run firebase:serve
   \`\`\`

## What's Included

- ✅ Static export configuration
- ✅ Firebase hosting setup
- ✅ Client-side search and chat functions
- ✅ Pre-generated static routes for all categories and foods
- ✅ Optimized images and assets
- ✅ Mobile-responsive design
- ✅ PWA-ready structure

## File Structure

\`\`\`
out/                 # Generated static files (created after build)
├── _next/          # Next.js assets
├── categories/     # Static category pages
├── food/          # Static food detail pages
├── index.html     # Homepage
└── ...            # Other static assets
\`\`\`

## Notes

- All server actions have been converted to client-side functions
- The app works entirely offline after initial load
- All dynamic routes are pre-generated during build
- Images are unoptimized for static hosting compatibility
