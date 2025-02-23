import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdSkb9-DGoJ7NoOsihtUmw91bWWwkRsIc",
    authDomain: "gopikalakshmi.firebaseapp.com",
    projectId: "gopikalakshmi",
    storageBucket: "gopikalakshmi.firebasestorage.app",
    messagingSenderId: "116092799831",
    appId: "1:116092799831:web:33584e854f8bfd8864cc12",
    measurementId: "G-B3C0QVSP5S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };