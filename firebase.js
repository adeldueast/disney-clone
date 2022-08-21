// Import the functions you need from the SDKs you need
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBipoeslxso27hPBGMzK5B7-x8Vtdb6GqI",
  authDomain: "disney-clone-a2062.firebaseapp.com",
  projectId: "disney-clone-a2062",
  storageBucket: "disney-clone-a2062.appspot.com",
  messagingSenderId: "885494222897",
  appId: "1:885494222897:web:57c6a016116d5121298510"
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
