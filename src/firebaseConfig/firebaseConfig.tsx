import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
    databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();