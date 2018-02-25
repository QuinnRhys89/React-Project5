/// Has to be at the top of every JS file
import React from 'react';

const audio = new Audio("./dev/audio/waves-lapping.mp3");


// Component
class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            play: false
        };
        // bind the method because we are using the "this" word on the buttons
        this.handleClick = this.handleClick.bind(this);
    }
    // Click event
    handleClick(e) {
        // prevent buttons from refreshing the page
        e.preventDefault();
        this.setState({
            // ! just means the opposite of the initial state
            play: !this.state.play
        });
        this.forest.classList.toggle("active");
        this.state.play ? audio.pause() : audio.play();
    }

    // Here's a note
    render() {
        return (
            <div className="audioTriggers">
                <button ref={ref => this.forest = ref} className="active" type="submit" onClick={this.handleClick}>{this.props.tagline}<p>Ambient</p></button>
                <audio id="clip">
                    <source src="./dev/audio/journal.mp3" type="audio/mpeg" />
                </audio>
                <button ref={ref => this.forest = ref} className="active" type="submit" onClick={this.handleClick}>{this.props.tagline}<p>Forest</p></button>
                <button ref={ref => this.forest = ref} className="active" type="submit" onClick={this.handleClick}>Street Noise</button>
                <button className="active" type="submit" onClick={this.handleClick}>Waves</button>
                <button className="active" type="submit" onClick={this.handleClick}>Wind</button>
                <button className="active" type="submit" onClick={this.handleClick}>Rain</button>
                <button className="active" type="submit" onClick={this.handleClick}>Light Breeze</button>
                <button className="active" type="submit" onClick={this.handleClick}>Drone</button>
                <button className="active" type="submit" onClick={this.handleClick}>Bongo drums</button>
                <button className="active" type="submit" onClick={this.handleClick}>Pan flute</button>
                <button className="active" type="submit" onClick={this.handleClick}>Piano</button>
                <button className="active" type="submit" onClick={this.handleClick}>Crickets</button>
                <button className="active" type="submit" onClick={this.handleClick}>Fire Crackling</button>
                <button className="active" type="submit" onClick={this.handleClick}>Muffled voices</button>
            </div>
        )
    }
}

export default Buttons;