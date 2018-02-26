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
// Components
// Needs at least one method
// Render Method


// This is what you do when you want to render out a component using <App />
// document.getElementByID('app') - where you want to render out to
ReactDOM.render(<App />, document.getElementById('app'));



// Best practice to put each of your components into a separate file (easier to maintiain)
