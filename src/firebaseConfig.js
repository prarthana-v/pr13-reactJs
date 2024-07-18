import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBMlLlbm4_Ct0CFyfBpxTulpi6Gu2YoqN0",
  authDomain: "auth-pr13.firebaseapp.com",
  projectId: "auth-pr13",
  storageBucket: "auth-pr13.appspot.com",
  messagingSenderId: "808106997794",
  appId: "1:808106997794:web:d56e30c4c8f27a3719727b",
  measurementId: "G-FMPFKV7W66",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
