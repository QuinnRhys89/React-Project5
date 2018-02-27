// Has to be at the top of every JS file
import React from 'react';

// Component
class Logo extends React.Component {
    render() {
        return (
           <div className="logo-container">
                <h1>Soundscape</h1>
                <p>Click on any Combination of Sounds below to create your own soundscape</p>
           </div>
        )
    }
}


export default Logo;