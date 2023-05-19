import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged,
    signOut
 } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4HayiLOlVvBFRLEpUOF66JeD_byNlvxg",
    authDomain: "fundraising-management-program.firebaseapp.com",
    projectId: "fundraising-management-program",
    storageBucket: "fundraising-management-program.appspot.com",
    messagingSenderId: "301117335029",
    appId: "1:301117335029:web:a4e26cd3bdbb7ac0f96cbc",
    measurementId: "G-VPRR8S21WJ"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const myVariable = 'heyo'

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promt: "select_account"
})

const auth = getAuth();

export { auth, provider }

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc (userDocRef)
    console.log(userSnapshot)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef
};

export const signOutUser = () => {
    signOut(auth).then((e) => {
        console.log(e)
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}

 export const onAuthStateChangedListener = (callback) => 
    onAuthStateChanged(auth, callback);


