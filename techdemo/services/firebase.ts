import Constants from 'expo-constants';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: Constants.manifest?.extra?.firebaseApiKey,
    authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
    projectId: Constants.manifest?.extra?.firebaseProjectId,
    storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
    appId: Constants.manifest?.extra?.firebaseAppId,
};
let app;
// if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
// }
// else {
//     app = firebase.app();
// }
let user = firebase.auth().currentUser;

export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        user = firebase.auth().currentUser;
        await user?.updateProfile({
            displayName: fName
        })
        console.log(result.user);
        return 'success';
    } catch (e) {
        console.log(e);
    }
}

export const logInWithEmail = async (email: string, password: string) => {
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(result.user);
        return 'success';
    } catch (e) {
        console.log(e);
    }
}

export const logOut = async () => {
    try {
        await firebase.auth().signOut();
    } catch (e) {
        console.log(e);
    }
}

export const getFirstName = async () => {
    return await user?.displayName;
}