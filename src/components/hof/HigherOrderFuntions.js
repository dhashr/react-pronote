import React from "react";
class Notepad extends React.Component
{
    constructor(props){
        super(props);
        this.handleChange =  this.handleChange.bind(this);
        this.state = {
            value :'Welcome to React tutorials, this would help you build a notepad'
        }

    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return <>
        <div className = "container">
            <div className="input">
                <h3 id="heading1">Input</h3>
                <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value} />
            </div>
            <div className="output">
                <h3 id="heading2">Pro Note</h3>
                <div className="output-text">{this.state.value}</div>
            </div>
        </div>
        </>
    }
}
export default Notepad;