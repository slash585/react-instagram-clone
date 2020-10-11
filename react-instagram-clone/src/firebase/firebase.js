import firebase from 'firebase'

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyDinJn1SP4D1Bg8nygZ_ozulTo0suUrp7s",
    authDomain: "react-instagram-clone-87b66.firebaseapp.com",
    databaseURL: "https://react-instagram-clone-87b66.firebaseio.com",
    projectId: "react-instagram-clone-87b66",
    storageBucket: "react-instagram-clone-87b66.appspot.com",
    messagingSenderId: "1031918769706",
    appId: "1:1031918769706:web:ef9215ad252dc2ce895553",
    measurementId: "G-TW45Y61FFJ"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage}