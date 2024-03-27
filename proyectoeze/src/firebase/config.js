import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmpMN6EJVCGwzIAYQgV4AF5fo5oAX92c8",
    authDomain: "proyectoreact-3d1f5.firebaseapp.com",
    projectId: "proyectoreact-3d1f5",
    storageBucket: "proyectoreact-3d1f5.appspot.com",
    messagingSenderId: "208752706313",
    appId: "1:208752706313:web:0fedfaad29f5907ee309d8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
