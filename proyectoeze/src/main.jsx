import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmpMN6EJVCGwzIAYQgV4AF5fo5oAX92c8",
  authDomain: "proyectoreact-3d1f5.firebaseapp.com",
  projectId: "proyectoreact-3d1f5",
  storageBucket: "proyectoreact-3d1f5.appspot.com",
  messagingSenderId: "208752706313",
  appId: "1:208752706313:web:bca34bf3d6a335a3e309d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);