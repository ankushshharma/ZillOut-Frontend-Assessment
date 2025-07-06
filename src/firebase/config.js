import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC5tlTfGUTFPQpyLeritlR7p_GI1d1dXvU",
    authDomain: "zillout-assessment.firebaseapp.com",
    projectId: "zillout-assessment",
    storageBucket: "zillout-assessment.firebasestorage.app",
    messagingSenderId: "581951519551",
    appId: "1:581951519551:web:73ca24c440c020950b718a",
    measurementId: "G-B33DZH61MH"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app; 