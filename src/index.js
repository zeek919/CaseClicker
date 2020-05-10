import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import store from './store';
import Root from './containers/Root/Root';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
