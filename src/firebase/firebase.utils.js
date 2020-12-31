import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config ={
  apiKey: "AIzaSyD_VYVaEjJG2Vj-FmCimu0n3a6gZgelbIg",
    authDomain: "crwn-db-23-b1687.firebaseapp.com",
    databaseURL: "https://crwn-db-23-b1687-default-rtdb.firebaseio.com",
    projectId: "crwn-db-23-b1687",
    storageBucket: "crwn-db-23-b1687.appspot.com",
    messagingSenderId: "142631866294",
    appId: "1:142631866294:web:b92078e3c967bd4f613b17",
    measurementId: "G-V682FLF7B1"
  };

  export const createUserProfileDocument = async (userAuth , additionalData ) =>{
    if( !userAuth ) return;
    
    const userRef =firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    console.log(snapShot);

    if (!snapShot.exists){
      
      const { displayName , email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
      
    }
    return userRef;
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = ( ) => auth.signInWithPopup(provider);

  export default firebase;
      
