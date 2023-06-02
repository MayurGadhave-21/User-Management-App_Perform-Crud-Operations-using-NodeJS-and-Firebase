const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAKsqN2a5o-GpxvZfOH1_GMe6D5zv1X49U",
  authDomain: "crud-application-d965f.firebaseapp.com",
  projectId: "crud-application-d965f",
  storageBucket: "crud-application-d965f.appspot.com",
  messagingSenderId: "1570979179",
  appId: "1:1570979179:web:75a7802b8c7a83bbdfa02e",
  measurementId: "G-YE9T2SLKRT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
