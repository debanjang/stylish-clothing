import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCeYtcYQ4SxHiZ0yxArT7qOCYqL_Yo7Ab8",
  authDomain: "stylish-clothing-db.firebaseapp.com",
  databaseURL: "https://stylish-clothing-db.firebaseio.com",
  projectId: "stylish-clothing-db",
  storageBucket: "stylish-clothing-db.appspot.com",
  messagingSenderId: "360999027770",
  appId: "1:360999027770:web:ab8910fbb290c62925a103",
  measurementId: "G-XVEWY8TK41"
};

firebase.initializeApp(config);

//export auth and firestore to be imported in other files as needed
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//create a user document within users collection if not already existing
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth is not passed, do not proceed
  if (!userAuth) {
    return;
  }
  //get document reference to userAuth Object
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const user = await userRef.get();
  //if user does not exist, create new
  if (!user.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating new user" + error.message);
    }
  }
  //return userRef for future use
  return userRef;
};
//create a provider for Google login
const provider = new firebase.auth.GoogleAuthProvider();
//Always show prompt for signing in when using the google provider
provider.setCustomParameters({ prompt: "select_account" });

//export function that triggers sign in with google pop up
export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

//export the whole firebase library if needed anywhere. Caution: It is heavy
export default firebase;
