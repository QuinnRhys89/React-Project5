// Has to be at the top of every JS file
import React from 'react';

// Component
class Logo extends React.Component {
    render() {
        return (
           <div className="logo-container">
                <h1>Baskify App</h1>
                <p className="tagline">Mix and Match the Sounds Below to Create A Customized Soundscape</p>
           </div>
        )
    }
}

export default Logo;