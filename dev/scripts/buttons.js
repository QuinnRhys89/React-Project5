// Has to be at the top of every JS file
import React from 'react';




// Component
class Buttons extends React.Component {
    constructor(){
        super();
        this.state = { play: false };
        // this.handleClick = this.handleClick.bind(this);
    }
    // Click event
    handleClick = () => {
        this.setState({play: !this.state.play});
    }

// Here's a note
    render() {
        return (
            <div className="audioTriggers">
                <button type="button" onClick={this.handleClick}>{this.props.tagline}<p>Ambient</p></button>
                <audio id="clip">
                    <source src="./dev/audio/journal.mp3" type="audio/mpeg" />
                </audio>
                <button type="submit" onClick={this.handleClick}>{this.props.tagline}<p>Forest</p></button>
                <button type="submit" onClick={this.handleClick}>Street Noise</button>
                <button type="submit" onClick={this.handleClick}>Waves</button>
                <button type="submit" onClick={this.handleClick}>Wind</button>
                <button type="submit" onClick={this.handleClick}>Rain</button>
                <button type="submit" onClick={this.handleClick}>Light Breeze</button>
                <button type="submit" onClick={this.handleClick}>Drone</button>
                <button type="submit" onClick={this.handleClick}>Bongo drums</button>
                <button type="submit" onClick={this.handleClick}>Pan flute</button>
                <button type="submit" onClick={this.handleClick}>Piano</button>
                <button type="submit" onClick={this.handleClick}>Crickets</button>
                <button type="submit" onClick={this.handleClick}>Fire Crackling</button>
                <button type="submit" onClick={this.handleClick}>Muffled voices</button>
            </div>
        )
    }
}

export default Buttons;