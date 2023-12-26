import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    

increment = () => {
    this.setState({count : this.state.count +1})

}

  render() {
    const {count} = this.state;
    return (
        
      <div>
        <button onMouseEnter={this.increment}> incremented to {count} times</button>
      </div>
    )
  }
}

export default Counter