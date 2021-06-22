// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACKZMY0b6dHcLu9HKl7lZkbp_vomWuT10",
  authDomain: "clone-c3c87.firebaseapp.com",
  projectId: "clone-c3c87",
  storageBucket: "clone-c3c87.appspot.com",
  messagingSenderId: "522897232264",
  appId: "1:522897232264:web:dfb63691736bc6f4406a3d",
  measurementId: "G-R3JJB1BJ95"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}