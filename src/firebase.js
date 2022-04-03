import { initializeApp } from "firebase";

const config = {
  apiKey: "AIzaSyBWHO5Gt7SQAqIBpfGTyfpaFFVQQsZ3PSA",
  authDomain: "samer-tiktok.firebaseapp.com",
  projectId: "samer-tiktok",
  storageBucket: "samer-tiktok.appspot.com",
  messagingSenderId: "813519962798",
  appId: "1:813519962798:web:06637c364607f1fe43a33f",
};

const app = initializeApp(config);

const db = app.firestore();

export default db;
