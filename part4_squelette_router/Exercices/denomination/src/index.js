import React from 'react';

// parcequ'on fait une Web App
import ReactDOM from 'react-dom';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// les css globaux de votre App qui vont donc agir sur tous les composants
import './index.css';

// Le composant bootstrap ou le composant Racine
import App from './App';
import * as serviceWorker from './serviceWorker';

// Montage du composant racine 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
