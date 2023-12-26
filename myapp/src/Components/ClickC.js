import React, { Component } from 'react'

 export class ClickC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        c:0
      }
    }
    cCount=() =>{
        this.setState({c:this.state.c +1000});
    }



  render() {
    const {c}=this.state;
    return (
      <div>
        <button onClick={this.cCount} >this count {c}</button>
      </div>
    )
  }
}

export default ClickC;