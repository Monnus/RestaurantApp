
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: "AIzaSyAsQu_JOGRuK49w7cD2C8KWHPEaNDQCkTM",
  authDomain: "restaurantapp-8b8df.firebaseapp.com",
  projectId: "restaurantapp-8b8df",
  storageBucket: "restaurantapp-8b8df.appspot.com",
  messagingSenderId: "704060795887",
  appId: "1:704060795887:web:d363c95e27caebb11de41a"
};

const app = initializeApp(firebaseConfig);
export default app