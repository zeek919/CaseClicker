import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
