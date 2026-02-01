// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyQZ7QhB0K13Z8yCob6POtF21DTQ-piEc",
  authDomain: "internarea-4f12d.firebaseapp.com",
  projectId: "internarea-4f12d",
  storageBucket: "internarea-4f12d.firebasestorage.app",
  messagingSenderId: "160077457936",
  appId: "1:160077457936:web:bdfc1aca729fed7e8c3895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}