import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyA6DO0jMF0EQdpyKDY9oi8wrATZbVjoyzA',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'skylife-5552e.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'skylife-5552e',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'skylife-5552e.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '26710209488',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:26710209488:web:ae28c36c8b2e8c365b3fd5',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-X047RF513F',
};

const requiredConfigKeys: Array<keyof typeof firebaseConfig> = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
];

export const isFirebaseConfigured = requiredConfigKeys.every((key) => Boolean(firebaseConfig[key]));

export const firebaseApp = isFirebaseConfigured
  ? getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

export const app = firebaseApp;

export const auth = firebaseApp ? getAuth(firebaseApp) : null;
export const db = firebaseApp ? getFirestore(firebaseApp) : null;

export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== 'undefined' && firebaseApp) {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(firebaseApp);
    }
  }).catch(() => {
    // Analytics is not supported in this environment
  });
}

export const getFirebaseAuth = () => {
  if (!auth) {
    throw new Error('Firebase is not configured. Add the required VITE_FIREBASE_* values to your .env file.');
  }

  return auth;
};

export const getFirebaseDb = () => {
  if (!db) {
    throw new Error('Firebase is not configured. Add the required VITE_FIREBASE_* values to your .env file.');
  }

  return db;
};
