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
            // selectedSounds: "clip,clip1,clip2 "
            // array with all the sounds
            sounds: {
                ambient: false,
                forest: false
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
       
        // userProfile: {
        //     sound: {
        //         fire: true,
        //         drone: false,
        //         ...
        //     }
        // }
    
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

                {/* Forest Sounds */}
                {/* <button ref={ref => this.streetNoise = ref} className="active" type="submit" onClick={() => this.handleClick("clip2", this.streetNoise)}>Street Noise</button> */}

                {/* Waves */}
                <button 
                    ref={ref => this.waves = ref} type="submit" 
                    onClick={() => this.handleClick("clip3", this.waves)}>Waves
                </button>

                <audio id="clip3" loop>
                    <source src="./dev/audio/waves-lapping.mp3" type="audio/mpeg" />
                </audio>

                {/* Wind Chimes */}
                <button 
                    ref={ref => this.windchimes = ref} type="submit" 
                    onClick={() => this.handleClick("clip4", this.windchimes)}>Wind Chimes
                </button>

                <audio id="clip4" loop>
                    <source src="./dev/audio/wind-chimes.mp3" type="audio/mpeg" />
                </audio>

                {/* Rain */}
                <button
                    ref={ref => this.rain = ref} type="submit"
                    onClick={() => this.handleClick("clip5", this.rain)}>Rain
                </button>

                <audio id="clip5" loop>
                    <source src="./dev/audio/rain.mp3" type="audio/mpeg" />
                </audio>

                {/* Breeze */}
                <button
                    ref={ref => this.breeze = ref} type="submit" onClick={() => this.handleClick("clip6", this.breeze)}>Tropical Breeze
                </button>

                <audio id="clip6" loop>
                    <source src="./dev/audio/breeze.mp3" type="audio/mpeg" />
                </audio>

                {/* Drone */}
                <button 
                    ref={ref => this.drone = ref} type="submit" onClick={() => this.handleClick("clip7", this.drone)}>Drone
                </button>

                <audio id="clip7" loop>
                    <source src="./dev/audio/drone.mp3" type="audio/mpeg" />
                </audio>

                {/* Taiko Drums */}

                <button
                    ref={ref => this.drums = ref} type="submit" onClick={() => this.handleClick("clip8", this.drums)}>Taiko
                </button>

                <audio id="clip8" loop>
                    <source src="./dev/audio/taiko.mp3" type="audio/mpeg" />
                </audio>

                {/* Synthesizer */}
                <button
                    ref={ref => this.synth = ref} type="submit" onClick={() => this.handleClick("clip11", this.synth)}>Synthesizer
                </button>

                <audio id="clip11" loop>
                    <source src="./dev/audio/synthesizer.mp3" type="audio/mpeg" />
                </audio>

                {/* Crickets */}
                <button type="submit" onClick={this.handleClick}>Crickets</button>

                {/* Fire Crackling */}

                <button
                    ref={ref => this.fire = ref} type="submit" onClick={() => this.handleClick("clip12", this.fire)}>Fire Crackling
                </button>

                <audio id="clip12" loop>
                    <source src="./dev/audio/fire-crackle.mp3" type="audio/mpeg" />
                </audio>

                {/* Muffled Voices */}
                <button type="submit" onClick={this.handleClick}>Muffled voices</button>

                {/* Cat Purrs */}
                <button
                    ref={ref => this.catpurr = ref} type="submit" onClick={() => this.handleClick("clip14", this.catpurr)}>Cat Purring
                </button>

                <audio id="clip14" loop>
                    <source src="./dev/audio/animal_cat_purr.mp3" type="audio/mpeg" />
                </audio>

                {/* Shower */}
                <button
                    ref={ref => this.shower = ref} type="submit" onClick={() => this.handleClick("clip15", this.shower)}>Shower Running
                </button>

                <audio id="clip15" loop >
                    <source src="./dev/audio/shower.mp3" type="audio/mpeg" />
                </audio>

                {/* Ceiling Fan*/}
                <button
                    ref={ref => this.fan= ref} type="submit" onClick={() => this.handleClick("clip16", this.fan)}>Ceiling Fan
                </button>

                <audio id="clip16" loop>
                    <source src="./dev/audio/fan.mp3" type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}

export default Buttons;