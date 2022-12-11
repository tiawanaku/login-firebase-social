import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhSTldra8-cY3vX5ZIRCIYYj7MsRmdeQI",
  authDomain: "authentication-a50c1.firebaseapp.com",
  projectId: "authentication-a50c1",
  storageBucket: "authentication-a50c1.appspot.com",
  messagingSenderId: "371759390838",
  appId: "1:371759390838:web:78086bce859df5878dbf57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();