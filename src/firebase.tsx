// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider,
    connectAuthEmulator 
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-L_LpAxhiWlRCLZO9KxxrMgzLQKXbGNg",
  authDomain: "slime-counter.firebaseapp.com",
  projectId: "slime-counter",
  storageBucket: "slime-counter.firebasestorage.app",
  messagingSenderId: "786828654503",
  appId: "1:786828654503:web:fdf962df08dca52f8de882",
  measurementId: "G-3BZ6W9GVE9"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
connectAuthEmulator(auth, "http://127.0.0.1:9099");
export const googleProvider = new GoogleAuthProvider();
