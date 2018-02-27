// Has to be at the top of every JS file
import React from 'react';


class Form extends React.Component {
    render(){
        return(
            <form action="" className="saveSoundscape">
                <label htmlFor="">Name your soundscape:</label>
                <input type="text" placeholder="type name here" />
            </form>
        )
    }
}


export default Form;