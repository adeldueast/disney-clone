// Import the functions you need from the SDKs you need
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase if not initialized yet
//const app = !getApps().length ? initializeApp(firebaseConfig) : firebase.app();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//const db = getFirestore(app);
const db = firebase.firestore();

// const storage = getStorage(app);

export { db };
