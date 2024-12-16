
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWrjgmvdvx1vQiYHx-8Vts785e2qKmBHM",
  authDomain: "e-commerce-cfffc.firebaseapp.com",
  projectId: "e-commerce-cfffc",
  storageBucket: "e-commerce-cfffc.firebasestorage.app",
  messagingSenderId: "841947843538",
  appId: "1:841947843538:web:d94308a12e089e2e60160b"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log('Firebase configurado correctamente:', app);
export { db };
