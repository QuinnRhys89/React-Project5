import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './buttons.js';
import Logo from './logo.js';
// import Form from './form.js';

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
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: {},
            userText: ''
        }

        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((res) => {
            console.log(res, "this is in component didmount");
            if (res) {
                this.setState({
                    loggedIn: true,
                    user: res
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: {}
                })
            }
        });
    }

    signIn() {
        console.log("signing in!");
        //  creating a new instance of google auth provider
        const provider = new firebase.auth.GoogleAuthProvider();

        // Allows you to sign in with a different account
        provider.setCustomParameters({
            prompt: 'select_account'
        })

        firebase.auth().signInWithPopup(provider).then((user) => {
            console.log(user);
        });
    }

    signOut() {
        console.log("is this working");
        firebase.auth().signOut();

        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            // Must only have one parent element
            <div className="container">
                <div className="emailButtonContainer">
                    {this.state.loggedIn ? <button className="emailButton" onClick={this.signOut}>Sign Out</button> : <button className="emailButton" onClick={this.signIn}>Sign In With G-mail</button>}
                </div>
                
                <Logo />
                <Buttons loggedIn={this.state.loggedIn} email={this.state.user.email || null}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

