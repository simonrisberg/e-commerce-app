import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fireBaseConfig = {
    apiKey: "AIzaSyB8mlQWt2Ya2PbQAN_hdj2ByrqE7vyAMZA",
    authDomain: "e-commerce-db-f34b8.firebaseapp.com",
    databaseURL: "https://e-commerce-db-f34b8.firebaseio.com",
    projectId: "e-commerce-db-f34b8",
    storageBucket: "e-commerce-db-f34b8.appspot.com",
    messagingSenderId: "436084687919",
    appId: "1:436084687919:web:146bce0e6b119d6ead32da",
    measurementId: "G-8ZMQ1Q3FQY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot)

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(fireBaseConfig);

export const auth = firebase.auth();
export const firestore =  firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;