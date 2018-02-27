// Has to be at the top of every JS file
import React from 'react';
import Buttons from './buttons.js';
import Logo from './logo.js';
import Form from './form.js';

class App extends React.Component {
    render() {
        return (
            // Must only have one parent element
            <div className="container">
                    <Logo />
                    <Buttons tagline="press me" />
                    <Form />
            </div>
        )
    }
}

export default App;