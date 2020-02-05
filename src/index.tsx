import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as radium_web_component from 'radium_web_component';
import { Provider } from 'react-redux';
import { store } from './state';
import {OutputActionTypes, SET_OUTPUT} from './state/output-actions';
const enable = radium_web_component;

window.setInterval(() => {  
    const random = Math.floor(Math.random() * 101);
    store.dispatch({type: SET_OUTPUT, payload: random});
}, 2000);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
