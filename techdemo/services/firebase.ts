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

const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

export const signUpWithEmail = async (fName: string, lName: string, email: string, password: string) => {
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(result.user);
    } catch (e) {
        console.log(e);
    }
}