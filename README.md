# Rate Repository App

A full-stack React Native application for rating and reviewing GitHub repositories.

## Prerequisites

- Node.js installed
- npm or yarn
- For mobile testing: Android Studio (for Android emulator) or Expo Go app

## Installation & Setup

### 1. Install Dependencies

Install dependencies for both the backend and frontend:
```bash
# Install backend dependencies
cd rate-repository-api
npm install

# Install frontend dependencies
cd ../rate-repository-app
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `rate-repository-app` root directory:
```env
# For Android Emulator
APOLLO_URI=http://10.0.2.2:4000/graphql

# For Browser (uncomment this and comment the line above)
# APOLLO_URI=http://127.0.0.1:4000/graphql
```

**Note:** Switch between these URLs depending on where you're running the app:
- Use `http://10.0.2.2:4000/graphql` for Android emulator
- Use `http://<YOUR_LOCAL_IP>:4000/graphql` for browser/web

### 3. Start the Application

#### Option 1: Recommended (with cache clearing)
```bash
# Open 2 TERMINAL BARS 

# Start backend
cd rate-repository-api
npm start --clear

# Start frontend
cd rate-repository-app
npm start --clear
```

#### Option 2: Standard start
```bash
# Terminal 1 - Start backend
cd rate-repository-api
npm start

# Terminal 2 - Start frontend
cd rate-repository-app
npm start
```

### 4. Access the App

- **Web browser:** Press `w` in the Expo terminal
- **Android emulator:** Press `a` in the Expo terminal
- **iOS simulator:** Press `i` in the Expo terminal (macOS only)
- **Physical device:** Scan the QR code with Expo Go app

## Features

- Browse and search repositories
- View repository details and reviews
- Create an account and sign in
- Submit reviews for repositories
- View and manage your own reviews
- Infinite scrolling for repositories and reviews
- Sort repositories by latest, highest rated, or lowest rated

## Tech Stack

- **Frontend:** React Native, Expo, React Router Native
- **Backend:** Apollo Server, GraphQL
- **State Management:** Apollo Client
- **Form Handling:** Formik + Yup
- **UI Components:** React Native Paper

---

Built as part of the Full Stack Open course - Part 10