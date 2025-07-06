# Twitter/X Clone with Firebase Authentication

A complete Twitter/X home page interface built with React, featuring Firebase authentication for user login/signup functionality.

## 🚀 Features

### Authentication
- **Email/Password Authentication** - Traditional signup and login
- **Google OAuth** - One-click sign-in with Google
- **Protected Routes** - Automatic redirection for unauthenticated users
- **User Profile Integration** - Display user info in the interface

### Twitter Interface
- **Responsive Design** - Works on desktop and mobile
- **Left Sidebar** - Navigation menu with Home, Explore, Notifications, etc.
- **Main Feed** - Tweet composer and feed with mock data
- **Right Sidebar** - Search, trending topics, and "Who to follow" suggestions
- **Interactive Elements** - Like, retweet, comment, share buttons
- **Real-time Character Counter** - 280 character limit for tweets

## 🛠️ Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
   - Enable Google sign-in
4. Get your Firebase config:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click the web icon (</>) to add a web app
   - Copy the config object

### 2. Update Firebase Config

Replace the placeholder config in `src/firebase/config.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Login.jsx           # Login page component
│   ├── Signup.jsx          # Signup page component
│   ├── ProtectedRoute.jsx  # Route protection component
│   ├── TweetCard.jsx       # Individual tweet component
│   ├── TweetComposer.jsx   # Tweet creation component
│   ├── SidebarLeft.jsx     # Left navigation sidebar
│   ├── SidebarRight.jsx    # Right sidebar with trends
│   └── MainFeed.jsx        # Main feed component
├── contexts/
│   └── AuthContext.jsx     # Firebase authentication context
├── firebase/
│   └── config.js           # Firebase configuration
├── utils/
│   └── mockData.js         # Mock data for tweets and trends
└── App.jsx                 # Main app component with routing
```

## 🔐 Authentication Flow

1. **Unauthenticated Users** - Redirected to `/login`
2. **Login Options**:
   - Email/Password authentication
   - Google OAuth sign-in
3. **Signup Options**:
   - Email/Password registration
   - Google OAuth sign-up
4. **Authenticated Users** - Access to main Twitter interface
5. **Logout** - Available in the user profile section

## 🎨 Design Features

- **Dark Theme** - Login/signup pages use Twitter's dark theme
- **Light Theme** - Main interface uses Twitter's light theme
- **Responsive Layout** - Three-column layout that adapts to screen size
- **Hover Effects** - Smooth transitions and interactive elements
- **Modern UI** - Clean, Twitter-like design with proper spacing

## 🔧 Customization

### Adding Real Backend
- Replace mock data in `utils/mockData.js` with API calls
- Update tweet posting functionality to save to database
- Add real-time updates for likes, retweets, etc.

### Styling
- All styles use Tailwind CSS classes
- Easy to customize colors, spacing, and layout
- Component-based architecture for easy modifications

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - Vercel
   - Netlify
   - Firebase Hosting
   - GitHub Pages

## 📝 Notes

- This is a frontend-only implementation with mock data
- Firebase authentication is fully functional
- Backend integration can be added for real data persistence
- All components are responsive and follow Twitter's design patterns

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is for educational purposes.
