import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyD_VYVaEjJG2Vj-FmCimu0n3a6gZgelbIg",
    authDomain: "crwn-db-23-b1687.firebaseapp.com",
    projectId: "crwn-db-23-b1687",
    storageBucket: "crwn-db-23-b1687.appspot.com",
    messagingSenderId: "142631866294",
    appId: "1:142631866294:web:7a64ebce3ec5a697613b17",
    measurementId: "G-BRPDEXT87Z"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);

  export default firebase;
      