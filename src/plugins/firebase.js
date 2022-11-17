  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAEdeTcrFZ18K5ySCIteZmg7ugtt3vI7-g",
  authDomain: "test-firebase-vue-blog.firebaseapp.com",
  projectId: "test-firebase-vue-blog",
  storageBucket: "test-firebase-vue-blog.appspot.com",
  messagingSenderId: "716705412959",
  appId: "1:716705412959:web:673aaf2f3d17223b21a8ea",
  measurementId: "G-D3HJ1L2WLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);