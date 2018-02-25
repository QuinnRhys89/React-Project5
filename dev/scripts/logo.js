// Has to be at the top of every JS file
import React from 'react';

// Component
class Logo extends React.Component {
    render() {
        return (
           <div className="logo-container">
                <h1>White Noise Machine</h1>
           </div>
        )
    }
}


export default Logo;