import * as firebase from 'firebase/app';
import 'firebase/auth';

const signUp = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorMessage === 'auth/invalid-email') {
                console.log('asdasdasdasdasdasdasdasd');
            }
            console.log(errorCode);
            console.log(errorMessage);
        });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            const { displayName } = user;
            const { email } = user;
            const { emailVerified } = user;
            const { photoURL } = user;
            const { isAnonymous } = user;
            const { uid } = user;
            const { providerData } = user;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });
};
