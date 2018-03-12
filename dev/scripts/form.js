import React from 'react';


class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            soundNameInput: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("THIS IS SUBMIT")
        this.props.handleSubmitParent(this.state.soundNameInput)
    }

    handleChange(e){
        console.log(e);
        this.setState({
            soundNameInput: e.target.value
        })
    }

    render(){
        return(
            <form action="" className="saveSoundscape"  onSubmit={this.handleSubmit}>
                <label htmlFor="">Name your soundscape</label>
                <input type="text" placeholder="Your Name Here" onChange={this.handleChange}/>
                <button className="sub" type="submit">Submit</button>
            </form>
        )
    }
}


export default Form;