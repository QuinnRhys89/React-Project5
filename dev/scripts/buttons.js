/// Has to be at the top of every JS file
import React from 'react';

const audio = new Audio("./dev/audio/waves-lapping.mp3");
// const volumeSlider = document.getElementById("volumeslider");


// Component
class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            play: false,
            sounds: {
                ambient: false,
                forest: false,
                waves: false,
                windchimes: false,
                rain: false,
                breeze: false,
                drone: false,
                drums: false,
                synth: false,
                fire: false,
                catpurr: false, 
                shower: false,
                fan: false


            }
        };
        // bind the method because we are using the "this" word on the buttons
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var dbRef = firebase.database().ref(`soundclipSave/`);
        dbRef.on('value',(snapshot) => {
            const val = snapshot.val();
            this.setState({
                sounds: val
            })
            for(let audio in val) {
                if(val[audio] === true) {
                    document.getElementById(audio).play()
                    this[audio].classList.add('active');
                }

            }
        });
    }
    // Click event
    handleClick(clipID, refs) {
        const sounds = Object.assign({},this.state.sounds);
        sounds[clipID] = this.state.sounds[clipID] ? false : true;
        this.setState({
            // ! just means the opposite of the initial state
            play: !this.state.play,
            sounds: sounds
        });
        const audio = document.getElementById(clipID);
        sounds[clipID] === true ? audio.play() : audio.pause();
        refs.classList.toggle("active");
        var dbRef = firebase.database().ref(`soundclipSave/`);
        dbRef.set(sounds);
    }

    render() {
        return (
            <div className="audioTriggers">

                {/* Ambient Sounds */}
             
                <button
                    ref={ref => this.ambient = ref} type="button"
                    onClick={() => this.handleClick("ambient", this.ambient)}>
                    Ambient Noise
                </button>
                {/* <input id="volumeslider" type="range" min="0" max="100" value="100" step="1"/> */}
                <audio id="ambient" loop>
                    <source src="./dev/audio/ambient.mp3" type="audio/mpeg" />
                </audio>

                {/* Forest Sounds */}
                <button
                    ref={ref => this.forest = ref} type="button"
                    onClick={() => this.handleClick("forest", this.forest)}>
                    {/* {this.props.tagline} */}Forest
                </button>
                <audio id="forest" loop>
                    <source src="./dev/audio/crickets.mp3" type="audio/mpeg" />
                </audio>

                {/* Waves */}
                <button 
                    ref={ref => this.waves = ref} type="submit" 
                    onClick={() => this.handleClick("waves", this.waves)}>Waves
                </button>

                <audio id="waves" loop>
                    <source src="./dev/audio/waves-lapping.mp3" type="audio/mpeg" />
                </audio>

                {/* Wind Chimes */}
                <button 
                    ref={ref => this.windchimes = ref} type="submit" 
                    onClick={() => this.handleClick("windchimes", this.windchimes)}>Wind Chimes
                </button>

                <audio id="windchimes" loop>
                    <source src="./dev/audio/wind-chimes.mp3" type="audio/mpeg" />
                </audio>

                {/* Rain */}
                <button
                    ref={ref => this.rain = ref} type="submit"
                    onClick={() => this.handleClick("rain", this.rain)}>Rain
                </button>

                <audio id="rain" loop>
                    <source src="./dev/audio/rain.mp3" type="audio/mpeg" />
                </audio>

                {/* Breeze */}
                <button
                    ref={ref => this.breeze = ref} type="submit" onClick={() => this.handleClick("breeze", this.breeze)}>Tropical Breeze
                </button>

                <audio id="breeze" loop>
                    <source src="./dev/audio/breeze.mp3" type="audio/mpeg" />
                </audio>

                {/* Drone */}
                <button 
                    ref={ref => this.drone = ref} type="submit" onClick={() => this.handleClick("drone", this.drone)}>Drone
                </button>

                <audio id="drone" loop>
                    <source src="./dev/audio/drone.mp3" type="audio/mpeg" />
                </audio>

                {/* Taiko Drums */}

                <button
                    ref={ref => this.drums = ref} type="submit" onClick={() => this.handleClick("drums", this.drums)}>Taiko
                </button>

                <audio id="drums" loop>
                    <source src="./dev/audio/taiko.mp3" type="audio/mpeg" />
                </audio>

                {/* Synthesizer */}
                <button
                    ref={ref => this.synth = ref} type="submit" onClick={() => this.handleClick("synth", this.synth)}>Synthesizer
                </button>

                <audio id="synth" loop>
                    <source src="./dev/audio/synthesizer.mp3" type="audio/mpeg" />
                </audio>

                {/* Crickets */}
                <button type="submit" onClick={this.handleClick}>Crickets</button>

                {/* Fire Crackling */}

                <button
                    ref={ref => this.fire = ref} type="submit" onClick={() => this.handleClick("fire", this.fire)}>Fire Crackling
                </button>

                <audio id="fire" loop>
                    <source src="./dev/audio/fire-crackle.mp3" type="audio/mpeg" />
                </audio>

                {/* Muffled Voices */}
                <button type="submit" onClick={this.handleClick}>Muffled voices</button>

                {/* Cat Purrs */}
                <button
                    ref={ref => this.catpurr = ref} type="submit" onClick={() => this.handleClick("catpurr", this.catpurr)}>Cat Purring
                </button>

                <audio id="catpurr" loop>
                    <source src="./dev/audio/animal_cat_purr.mp3" type="audio/mpeg" />
                </audio>

                {/* Shower */}
                <button
                    ref={ref => this.shower = ref} type="submit" onClick={() => this.handleClick("shower", this.shower)}>Shower Running
                </button>

                <audio id="shower" loop >
                    <source src="./dev/audio/shower.mp3" type="audio/mpeg" />
                </audio>

                {/* Ceiling Fan*/}
                <button
                    ref={ref => this.fan= ref} type="submit" onClick={() => this.handleClick("fan", this.fan)}>Ceiling Fan
                </button>

                <audio id="fan" loop>
                    <source src="./dev/audio/fan.mp3" type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}

export default Buttons;