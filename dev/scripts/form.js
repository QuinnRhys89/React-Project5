import React from 'react';


class Form extends React.Component {
    render(){
        return(
            <form action="" className="saveSoundscape">
                <label htmlFor="">Name your soundscape:</label>
                <input type="text" placeholder="Your Name Here" />
                <button className="sub" type="submit">Submit</button>
            </form>
        )
    }
}


export default Form;