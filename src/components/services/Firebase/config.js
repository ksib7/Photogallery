import firebase from "firebase/compat/app";

import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVxkLDQBlInaY5rpNvyoSJzvndhWxt1e4",
  authDomain: "firegram-be04d.firebaseapp.com",
  projectId: "firegram-be04d",
  storageBucket: "firegram-be04d.appspot.com",
  messagingSenderId: "274572999931",
  appId: "1:274572999931:web:07953142703f73382d445e",
};

firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
