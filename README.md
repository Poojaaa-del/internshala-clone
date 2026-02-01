# Internshala Clone - README

## 📋 Project Overview

Internshala Clone is a full-stack web application that replicates the functionality of Internshala, a popular internship and job portal. It connects students with internship and job opportunities from top companies.

## ✨ Features

### For Students/Users
- Browse Internships & Jobs - Explore available internship and job listings
- Apply for Opportunities - Submit applications for internships and jobs
- Track Applications - View the status of submitted applications
- User Profile - Manage personal profile and application history
- Search & Filter - Find opportunities based on skills, location, and industry

### For Admin
- Manage Listings - Create, edit, and delete internship and job postings
- Review Applications - View and manage candidate applications
- Accept/Reject Applications - Make hiring decisions
- Application Details - Access detailed candidate information

## 🛠️ Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- UI Components: Swiper (for sliders)
- Image Optimization: Next.js Image component

## 📁 Project Structure
e:\Coding\Internshala_clone
├── pages/
│ ├── index.js (Home page with slider)
│ ├── internship.js (Internship listings)
│ ├── job.js (Job listings)
│ ├── detailinternship.js (Internship details)
│ ├── userapplication.js (User applications)
│ ├── admin/ (Admin pages)
│ │ ├── applications.js (Manage applications)
│ │ └── detailapplication.js (Application details)
├── assets/ (Images and logos)
│ ├── Slider images (Firstslide, secondslide, etc.)
│ ├── Company logos (adidas, amazon, google, netflix, puma)
│ └── Profile images (1.jpg - 7.jpg, admin.jpg)
├── components/ (Reusable components)
└── styles/ (CSS files)


## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <[https://github.com/Poojaaa-del/internshala-clone]>
cd Internshala_clone
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a .env.local file in the root directory:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
MONGODB_URI=<your-mongodb-connection-string>
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser
Navigate to http://localhost:3000

## Key Features Details

### Home Page Slider
- Displays featured internship and job opportunities
- Auto-plays with manual navigation
- Uses optimized Next.js Image component

### Internship/Job Listings
- Responsive grid layout
- Search and filter capabilities
- Company information displayed

### Application Management
- Submit applications with resume and cover letter
- Track application status (pending, accepted, rejected)
- View application history

## Configuration

### Development Server
- Frontend runs on http://localhost:3000
- Backend API runs on http://localhost:5000

### Environment Variables Setup
- Create a .env.local file in the root directory:
- NEXT_PUBLIC_API_URL=http://localhost:5000
- MONGODB_URI=mongodb://localhost:27017/internshala_clone

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Dependencies

### Install all dependencies
```bash
npm install
```

### Key npm packages:
- next - React framework
- react - UI library
- tailwindcss - CSS framework
- swiper - Carousel/slider component
- axios - HTTP client
- mongodb - Database driver
- express - Backend framework
- dotenv - Environment variables management

### Install specific package
```bash
npm install package-name
```

### Update dependencies
```bash
npm update
```

## Troubleshooting

### Pages not loading
#### Solution 1: Ensure backend server is running
```bash
npm run dev:server
```

#### Solution 2: Check MongoDB connection
Verify MONGODB_URI in .env.local is correct

#### Solution 3: Clear cache and restart
 rm -rf .next
```bash
npm run dev
```

### Images not displaying
#### Solution 1: Verify images exist in /assets folder
 Check if /public/assets directory exists

#### Solution 2: Check image file paths are correct
 Ensure imports match actual file names

#### Solution 3: Restart development server
npm run dev

### Application submission issues
#### Solution 1: Check backend API is running
curl http://localhost:5000/api/applications

#### Solution 2: Verify API endpoint is accessible
Check network tab in browser developer tools

#### Solution 3: Check console for error messages
Open browser DevTools (F12) and check Console tab

#### Solution 4: Ensure all required fields are filled
Verify form validation before submission

### Port already in use
#### For Frontend (Port 3000):
lsof -ti:3000 | xargs kill -9

#### For Backend (Port 5000):
lsof -ti:5000 | xargs kill -9

#### Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

## License

- This project is provided as-is for educational purposes.
- You are free to use, modify, and distribute this project.
- No warranty is provided with this software.

## Support

- For issues and questions, please open an issue in the repository
- GitHub Issues: https://github.com/yourprofile/Internshala_clone/issues

### Email Support: poojapvt010@gmail.com

### Documentation: https://github.com/Poojaaa-del/internshala-clone#readme

## Report a Bug
 1. Go to GitHub Issues
 2. Click "New Issue"
 3. Provide detailed description with steps to reproduce
 4. Include screenshots if applicable
 5. Submit the issue

## Feature Request
 1. Go to GitHub Issues
 2. Click "New Issue"
 3. Title: [FEATURE] Your feature request
 4. Describe the feature and why it's needed
 5. Submit the issue

