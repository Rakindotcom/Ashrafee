# Firebase Setup Guide

## Installation Complete ✓

Firebase has been successfully installed and configured for your Hotel Ashrafee project.

## What's Been Set Up

### 1. Firebase Package
- `firebase` package installed via npm
- Includes all Firebase services (Auth, Firestore, Storage, Analytics)

### 2. Configuration Files

#### `src/firebase.js` (Direct Config)
- Basic Firebase initialization with hardcoded credentials
- Exports: `app`, `analytics`, `auth`, `db`, `storage`
- Ready to use immediately

#### `src/firebase-secure.js` (Environment Variables - Recommended)
- Uses environment variables for better security
- Recommended for production deployments
- Keeps sensitive data out of your codebase

### 3. Environment Files
- `.env` - Contains your Firebase credentials (not committed to git)
- `.env.example` - Template for other developers
- `.gitignore` - Updated to exclude .env files

## How to Use Firebase in Your App

### Option 1: Import from firebase.js (Quick Start)
```javascript
import { auth, db, storage } from './firebase';

// Use Firebase Authentication
import { signInWithEmailAndPassword } from 'firebase/auth';

// Use Firestore Database
import { collection, addDoc } from 'firebase/firestore';

// Use Storage
import { ref, uploadBytes } from 'firebase/storage';
```

### Option 2: Import from firebase-secure.js (Production)
```javascript
import { auth, db, storage } from './firebase-secure';
// Same usage as above
```

## Common Use Cases for Your Hotel

### 1. Store Booking Data
```javascript
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const saveBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      checkIn: bookingData.checkIn,
      checkOut: bookingData.checkOut,
      guests: bookingData.guests,
      roomType: bookingData.roomType,
      timestamp: new Date()
    });
    console.log('Booking saved with ID:', docRef.id);
  } catch (error) {
    console.error('Error saving booking:', error);
  }
};
```

### 2. User Authentication (Admin Panel)
```javascript
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Admin logged in:', userCredential.user);
  } catch (error) {
    console.error('Login error:', error);
  }
};
```

### 3. Upload Room Images
```javascript
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadRoomImage = async (file, roomName) => {
  const storageRef = ref(storage, `rooms/${roomName}/${file.name}`);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('Image uploaded:', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Upload error:', error);
  }
};
```

## Firebase Services Available

- **Authentication** (`auth`) - User login/signup
- **Firestore** (`db`) - NoSQL database for bookings, rooms, etc.
- **Storage** (`storage`) - File storage for images
- **Analytics** (`analytics`) - Track user behavior

## Next Steps

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `hotel-ashrafee-404`
3. Set up Firestore Database (if not already done)
4. Set up Storage rules
5. Configure Authentication methods if needed

## Security Notes

- Your `.env` file is excluded from git
- Never commit Firebase credentials to version control
- Use `firebase-secure.js` for production
- Set up proper Firestore security rules in Firebase Console

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Auth Guide](https://firebase.google.com/docs/auth)
