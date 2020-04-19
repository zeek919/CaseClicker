import * as firebase from 'firebase/app';
import 'firebase/auth';

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

export const login = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
};
