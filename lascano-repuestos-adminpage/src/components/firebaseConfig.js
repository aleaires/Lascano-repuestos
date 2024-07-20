// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvJ1mvT0mtD4SUgMzuqifxkCQM_AGDlT8",
    authDomain: "lascano-repuestos.firebaseapp.com",
    projectId: "lascano-repuestos",
    storageBucket: "lascano-repuestos.appspot.com",
    messagingSenderId: "576027644463",
    appId: "1:576027644463:web:d60d7349c1919dfc90acda",
    measurementId: "G-LCY7KLW8VD"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
