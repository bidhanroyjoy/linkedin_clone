import firebase from "firebase";
// import * as firebase from 'firebase';
// import * as firebase from "firebase/app"
import  "firebase/auth";
import  "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyAytU8RSbqwijpOo_9XKahS3eb2MILdGuA",
    authDomain: "linkedin-clone-29712.firebaseapp.com",
    projectId: "linkedin-clone-29712",
    storageBucket: "linkedin-clone-29712.appspot.com",
    messagingSenderId: "1058363822909",
    appId: "1:1058363822909:web:34025f2ec3a709e2a6eb54",
    measurementId: "G-ZZZK3GN6YY"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth(); 

  export { db, auth };
    
  //  export const firebaseApp= firebase.initializeApp(firebaseConfig);
  //  export const db= firebaseApp.firestore();
  //  export const auth= firebase.auth(); 
  // export default db.database().ref();


