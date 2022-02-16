import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "@firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAF4x5_E2Qa7Xc4pvAvAtsambIZM8D2M1o",
    authDomain: "blooo-messenger.firebaseapp.com",
    projectId: "blooo-messenger",
    storageBucket: "blooo-messenger.appspot.com",
    messagingSenderId: "627415559769",
    appId: "1:627415559769:web:f861c2af071b73c2a8cb48",
    measurementId: "G-LRYEJWBLCV"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }