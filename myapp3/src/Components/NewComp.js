import React, { Component } from 'react'
import noBell from "./noBell.png";
import yesBell from "./yesBell.png";

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
         message:"You Havent clicked the below button nor the Bell Image",
         notice: "you Can clicked",
         bell:noBell

      }
    }
    clickChange=()=>
    {
        this.setState({
            message : "You Have Clicked the below button Bro",
            notice:"Hold on you have clicked it once",
            bell:noBell
            
    
    });
    }
    imageClick=()=>
    {
        this.setState(
            {message:"You have clicked on image",
            bell:yesBell
        
        }
        );
    }

    styles={
        fontStyle :'italic',
        color:'Purple'
    
      }

  render() {
    return (
      <div className='App'>
         
        <h1 style={this.styles}>  {this.state.message} </h1>
        <button onClick={this.clickChange}>{this.state.notice}</button>
        <p/>
        <img onClick={this.imageClick} style={{width:"30px",height:"30px"}}src={this.state.bell} alt=""></img>
        <p/>
        
        
        </div>
    )
  }
}

export default NewComp