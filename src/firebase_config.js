import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbRNkEGe-08t-flqRrR05bJlEOReD4cHg",
  authDomain: "contact-manager-6b111.firebaseapp.com",
  projectId: "contact-manager-6b111",
  storageBucket: "contact-manager-6b111.appspot.com",
  messagingSenderId: "372527334492",
  appId: "1:372527334492:web:09af9054608609fd3fd299",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
