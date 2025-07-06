# ZillOut – Twitter/X Clone

A modern, responsive Twitter/X clone built with React, Firebase, and Tailwind CSS. This project was developed as part of an assessment and includes several enhancements for a polished user experience.

---

## 🚀 Features

### Assessment Requirements
- **Landing Page:**  
  - Clean, responsive layout inspired by Twitter/X.
  - Sign up and login options (including Google sign-in).
  - Terms of Service and Privacy Policy pages, accessible from the footer and sign-up agreement.

- **Tweet Feed Interface:**  
  - Displays a list of tweets with user avatars, names, and timestamps.
  - Tweet composer for posting new tweets.
  - Interactive buttons for comment, retweet, and like (with live updating counts).

- **User Authentication:**  
  - Email/password and Google sign-in.
  - User profile section in the sidebar, sticky at the bottom.

### Additional Features
- **Animated Loading Skeletons:**  
  - Modern skeleton loaders for tweet feed while loading data.
- **Profile Dropdown Menu:**  
  - Click the user profile in the sidebar to access Profile, Settings, and Logout.
- **Toast Notifications:**  
  - Success/error popups for actions like posting a tweet or logging out.
- **Sidebar Enhancements:**  
  - Responsive sidebar with active state highlighting.
  - Custom SVG icons for all menu items.
  - "Post" button always visible below the menu.
- **Accessibility & UX:**  
  - Keyboard navigation, focus states, and ARIA labels.
  - Responsive design for mobile and desktop.

---

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

Replace the placeholder config in `src/firebase/config.js` with your actual Firebase configuration.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── TwitterHome.jsx       # Main Twitter/X home page
│   ├── Login.jsx             # Login page component
│   └── Signup.jsx            # Signup page component
├── contexts/
│   └── AuthContext.jsx       # Firebase authentication context
├── firebase/
│   └── config.js             # Firebase configuration
├── utils/
│   └── mockData.js           # Mock data for tweets and trends
└── App.jsx                   # Main app component with routing
```

---

## ✅ Assessment Feature Checklist

| Feature                        | Status   |
|--------------------------------|----------|
| Responsive landing page        | ✅       |
| Tweet feed interface           | ✅       |
| Google sign-in                 | ✅       |
| Terms of Service page          | ✅       |
| Privacy Policy page            | ✅       |
| Sidebar with sticky profile    | ✅       |
| Interactive tweet actions      | ✅       |
| Profile dropdown menu          | ✅       |
| Toast notifications            | ✅       |
| Loading skeletons              | ✅       |
| Custom SVG icons               | ✅       |
| Animated sidebar, Post button  | ✅       |
| Accessibility improvements     | ✅       |

---

## ✨ Usage

- **Sign up** or **log in** (with email or Google).
- **Post tweets** and interact with the feed.
- **Navigate** using the sidebar (Home, Explore, Notifications, etc.).
- **Access** Terms of Service and Privacy Policy from the footer or sign-up agreement.
- **Open the profile dropdown** for profile/settings/logout.
- **Enjoy instant feedback** with toast notifications and loading skeletons.

---

