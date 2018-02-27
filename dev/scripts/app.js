import React from 'react';
import ReactDOM from 'react-dom';
import App from './second.js';
import Buttons from './buttons.js';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBSySWCbsuXs0wzm_ka7hcghsqgFvNc0m8",
    authDomain: "react-app-4429d.firebaseapp.com",
    databaseURL: "https://react-app-4429d.firebaseio.com",
    projectId: "react-app-4429d",
    storageBucket: "react-app-4429d.appspot.com",
    messagingSenderId: "667534107689"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('app'));

