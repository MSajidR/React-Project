import  firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoZKr4kC4eynwdAffsbggPInXxqMwDMZw",
    authDomain: "work-f0bf1.firebaseapp.com",
    databaseURL: "https://work-f0bf1.firebaseio.com",
    projectId: "work-f0bf1",
    storageBucket: "work-f0bf1.appspot.com",
    messagingSenderId: "434598527640",
    appId: "1:434598527640:web:7052499332a815082886ed"
  }
  firebase.initializeApp(firebaseConfig);

  export default firebase;