import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyCNOZmOFtYPA8FHJegNziulXlF22Y9IYR8',
    authDomain: 'case-clicker-ceb21.firebaseapp.com',
    databaseURL: 'https://case-clicker-ceb21.firebaseio.com',
    projectId: 'case-clicker-ceb21',
    storageBucket: 'case-clicker-ceb21.appspot.com',
    messagingSenderId: '816843676597',
    appId: '1:816843676597:web:a510ffcd08b89bd24b17fc',
    measurementId: 'G-Z62R9T5M1Z',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();
const firestore = firebase.firestore();

let currentUser = '';

const setBasicData = async (userUID) => {
    await firestore.collection('users').doc(userUID).set({
        money: 0,
        currentTap: 0.001,
        experience: 0,
        items: [],
    });
};

export const getUserData = async (userUID) => {
    const userData = await firestore.collection('users').doc(userUID).get();
    return userData.data();
};

export const updateUserData = async (Money, CurrentTap, Experience, Items) => {
    await firestore.collection('users').doc(currentUser).update({
        money: Money,
        currentTap: CurrentTap,
        experience: Experience,
        items: Items,
    });
};

export const login = async (email, password) => {
    const loginUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((item) => {
            currentUser = item.user.uid;
            const basicData = firestore.collection('users').doc(currentUser);
            basicData.get().then((doc) => {
                if (!doc.exists) {
                    setBasicData(currentUser);
                }
            });
            return getUserData(currentUser);
        });

    return loginUser;
};

export const register = async (nick, email, password) => {
    const createUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    await createUser.user.updateProfile({
        displayName: nick,
    });
};
