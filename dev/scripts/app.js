import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './buttons.js';
import Logo from './logo.js';
import Form from './form.js';



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

class App extends React.Component {
    render() {
        return (
            // Must only have one parent element
            <div className="container">
                <Logo />
                <Buttons />
                <Form />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

