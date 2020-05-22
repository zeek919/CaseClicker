import 'firebase/firestore';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/rootReducer';
import { firebaseConfig } from './services/firebaseInit';

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.auth();
const firestore = firebase.firestore();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
                services: {
                    firebase,
                    firestore,
                },
            }),
            logger
        )
    )
);

export default store;
