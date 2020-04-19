import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './services/firebaseInit';
import Root from './containers/Root/Root';

firebase.initializeApp(firebaseConfig);
firebase.auth();
ReactDOM.render(<Root />, document.getElementById('root'));
