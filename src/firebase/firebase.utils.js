import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAe6X8DLD6AwzchciA4QioU7zlBpIHZzi4",
    authDomain: "vscrown-db.firebaseapp.com",
    projectId: "vscrown-db",
    storageBucket: "vscrown-db.appspot.com",
    messagingSenderId: "1037666226542",
    appId: "1:1037666226542:web:ab336c943b570226a9f17f",
    measurementId: "G-3VT0Q0PWHR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;