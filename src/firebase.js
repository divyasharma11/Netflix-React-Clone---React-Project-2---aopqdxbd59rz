import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDPH-FELbpL77le3rpNk-XyootdxeE9NiA",
  authDomain: "netflix-clone-dee12.firebaseapp.com",
  projectId: "netflix-clone-dee12",
  storageBucket: "netflix-clone-dee12.appspot.com",
  messagingSenderId: "779908773263",
  appId: "1:779908773263:web:b5406ba8a1a64e74b907fa",
  measurementId: "G-LB4YB5N6D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };