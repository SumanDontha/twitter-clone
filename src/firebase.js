import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJiabJ3WoP771rQNPZ_LrZ6LWdpa20UHc",
  authDomain: "twitter-clone-c2ffd.firebaseapp.com",
  databaseURL: "https://twitter-clone-c2ffd.firebaseio.com",
  projectId: "twitter-clone-c2ffd",
  storageBucket: "twitter-clone-c2ffd.appspot.com",
  messagingSenderId: "112607284214",
  appId: "1:112607284214:web:4fcddcd568b36fd85c55d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
