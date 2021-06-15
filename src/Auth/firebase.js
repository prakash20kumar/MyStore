import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-p8G8MuxhrP51Zy2XnzgkSB0SxuJlYKg",
  authDomain: "store-app-569a5.firebaseapp.com",
  projectId: "store-app-569a5",
  storageBucket: "store-app-569a5.appspot.com",
  messagingSenderId: "983434299854",
  appId: "1:983434299854:web:d2562f9940aeda295f439f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
