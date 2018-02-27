import React from 'react';

const audio = new Audio("./public/audio/waves-lapping.mp3");


// Main Button Component | Initial State
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
            },
            volumes: {
                ambientVolume: 1,
                forestVolume: 1,
                wavesVolume: 1,
                windchimesVolume: 1,
                rainVolume: 1,
                breezeVolume: 1,
                droneVolume: 1,
                drumsVolume: 1,
                synthVolume: 1,
                fireVolume: 1,
                catpurrVolume: 1,
                showerVolume: 1,
                fanVolume: 1,
                singingBowlVolume: 1,
                bongosVolume: 1,
                birdsVolume: 1,

            }
        };
        // bind the method because we are using the "this" word on the buttons
        this.handleClick = this.handleClick.bind(this);
        this.setVolume = this.setVolume.bind(this);
    }

    // Component Did Mount | Log audio to Firebase
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


        let audio = document.getElementById(clipID);
        console.log("ClipId :" + clipID);
        console.log(`VolumeId : ${clipID}Volume`);
        console.log(this.state.volumes[`${clipID}Volume`]);
        console.log("Audio volume: " + audio.volume);
        sounds[clipID] === true ? audio.play() : audio.pause();
        console.log("Audio volume: " + audio.volume);
        
        refs.classList.toggle("active");
        var dbRef = firebase.database().ref(`soundclipSave/`);
        dbRef.set(sounds);
        audio.volume = parseFloat(this.state.volumes[`${clipID}Volume`]);
    }

    // Volume Function

    setVolume(e){
        // console.log(e.target.id);
        // console.log(e.target.value);
        let _volumes = this.state.volumes;
        _volumes[e.target.id] = e.target.value;
        // let audio = document.getElementById(clipID)
        console.log(_volumes)
        console.log(e.target.id,e.target.value)
        let audio = document.getElementById(e.target.id.replace('Volume',''));
        audio.volume = e.target.value;
        var dbRef = firebase.database().ref(`volumeSave/`);
        dbRef.set(Volumes);
        this.setState({
            volumes : _volumes
        })
    }

    render() {
        return (
            <div className="audioTriggers">

                {/* Ambient Sounds */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.ambient = ref} type="button"
                        onClick={() => this.handleClick("ambient", this.ambient)}>
                        Ambient Noise
                    </button>
                    {/* Volume Slider */}
                    <input id="ambientVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="ambient" loop>
                        <source src="./public/audio/ambient.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Forest Sounds */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.forest = ref} type="button"
                        onClick={() => this.handleClick("forest", this.forest)}>Forest
                    </button>
                    {/* Volume Slider */}
                    <input id="forestVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="forest" loop>
                        <source src="./public/audio/crickets.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Waves */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.waves = ref} type="submit"
                        onClick={() => this.handleClick("waves", this.waves)}>Waves
                    </button> 
                    {/* Volume Slider */}
                    <input id="wavesVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="waves" loop>
                        <source src="./public/audio/waves-lapping.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Wind Chimes */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.windchimes = ref} type="submit"
                        onClick={() => this.handleClick("windchimes", this.windchimes)}>Wind Chimes
                    </button>
                    {/* Volume Slider */}
                    <input id="windchimesVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="windchimes" loop>
                        <source src="./public/audio/wind-chimes.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Rain */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.rain = ref} type="submit"
                        onClick={() => this.handleClick("rain", this.rain)}>Rain
                    </button>
                    {/* Volume Slider */}
                    <input id="rainVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="rain" loop>
                        <source src="./public/audio/rain.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Breeze */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.breeze = ref} type="submit" onClick={() => this.handleClick("breeze", this.breeze)}>Breeze
                    </button>
                    {/* Volume Slider */}
                    <input id="breezeVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="breeze" loop>
                        <source src="./public/audio/breeze.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Drone */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.drone = ref} type="submit" onClick={() => this.handleClick("drone", this.drone)}>Drone
                    </button>
                    {/* Volume Slider */}
                    <input id="droneVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="drone" loop>
                        <source src="./public/audio/drone.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Taiko Drums */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.drums = ref} type="submit" onClick={() => this.handleClick("drums", this.drums)}>Taiko Drums
                    </button>
                    {/* Volume Slider */}
                    <input id="drumsVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="drums" loop>
                        <source src="./public/audio/taiko.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Synthesizer */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.synth = ref} type="submit" onClick={() => this.handleClick("synth", this.synth)}>Synthesizer
                    </button>
                    {/* Volume Slider */}
                    <input id="synthVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="synth" loop>
                        <source src="./public/audio/synthesizer.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Fire Crackling */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.fire = ref} type="submit" onClick={() => this.handleClick("fire", this.fire)}>Fire
                    </button>
                    {/* Volume Slider */}
                    <input id="fireVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="fire" loop>
                        <source src="./public/audio/fire-crackle.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Singing Bowl */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.singingBowl = ref} type="submit" onClick={() => this.handleClick("singingBowl", this.singingBowl)}>Singing Bowl
                    </button>
                    {/* Volume Slider */}
                    <input id="singingBowlVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="singingBowl" loop>
                        <source src="./public/audio/singingbowl.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Cat Purrs */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.catpurr = ref} type="submit" onClick={() => this.handleClick("catpurr", this.catpurr)}>Cat Purring
                    </button>
                    {/* Volume Slider */}
                    <input id="catpurrVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="catpurr" loop>
                        <source src="./public/audio/animal_cat_purr.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Shower */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.shower = ref} type="submit" onClick={() => this.handleClick("shower", this.shower)}>Shower
                    </button>
                    {/* Volume Slider */}
                    <input id="showerVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="shower" loop >
                        <source src="./public/audio/shower.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Ceiling Fan*/}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.fan = ref} type="submit" onClick={() => this.handleClick("fan", this.fan)}>Ceiling Fan
                    </button>
                    {/* Volume Slider */}
                    <input id="fanVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="fan" loop>
                        <source src="./public/audio/fan.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Bongos */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.bongos = ref} type="submit" onClick={() => this.handleClick("bongos", this.bongos)}>Bongos
                    </button>
                    {/* Volume Slider */}
                    <input id="bongosVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="bongos" loop>
                        <source src="./public/audio/bongos.mp3" type="audio/mpeg" />
                    </audio>
                </div>

                {/* Birds */}
                <div className="button-container">
                    {/* Button */}
                    <button
                        ref={ref => this.birds = ref} type="submit" onClick={() => this.handleClick("birds", this.birds)}>Spring Birds
                    </button>
                    {/* Volume Slider */}
                    <input id="birdsVolume" type="range" min="0" max="1" step="0.1" onChange={this.setVolume} />
                    {/* Audio Source */}
                    <audio id="birds" loop>
                        <source src="./public/audio/birds.mp3" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        )
    }
}

export default Buttons;