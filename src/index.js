import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './scss/Main/main.scss';
import Firebase_register, { FirebaseContext } from './components/App/Firebase/RegisterFirebase/Firebase_register';

ReactDOM.render(

    <FirebaseContext.Provider value={new Firebase_register()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
