import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDkhUms-Sq05KR3TdFnQtf4SW9r1aW1jh8",
    authDomain: "e-commerce-website-a5859.firebaseapp.com",
    databaseURL: "https://e-commerce-website-a5859.firebaseio.com",
    projectId: "e-commerce-website-a5859",
    storageBucket: "e-commerce-website-a5859.appspot.com",
    messagingSenderId: "209887614923",
    appId: "1:209887614923:web:82d178cf128aa6f6d5884e",
    measurementId: "G-JPB9KDRKLM"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase