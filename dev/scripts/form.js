import React from 'react';
import ReactDOM from "react-dom";
import SavedSound from "./savedSound";

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            soundNameInput: [],
        }
        this.nameSoundscape = this.nameSoundscape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    nameSoundscape(e){
        // method prevents form from default behaviour of refreshing
        e.preventDefault(); 
        const nameOfSounds = {
            name: this.myFormInput.value,
        }
        
        const savedSounds = Array.from(this.state.soundNameInput);
        savedSounds.push(nameOfSounds);


        this.setState({ 
            soundNameInput: savedSounds 
        });

        console.log(this.soundNameInput);

        this.myFormInput.value = "";
    }

    handleChange(e){
        console.log(e);   
    }

    render(){
        return (
            <div className="sounds-container">
                <form action="" className="saveSoundscape" onSubmit={this.nameSoundscape}>
                    <label htmlFor="">Name your soundscape</label>
                    <input type="text" ref={ref => this.myFormInput = ref} placeholder="Name Your Mix" onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
                <section className="saved-sounds">
                    {this.state.soundNameInput.map((soundName, i) => {
                        return(
                            <SavedSound className="submitted" sound={soundName} key={`sound-${i}`}/>
                        )
                    }).reverse()}
                </section>
            </div>
        )
    }
}


export default Form;