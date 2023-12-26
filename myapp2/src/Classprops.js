import React, { Component } from 'react'


class Classprops extends Component {
  render() {
    return (
      <div><h1>Hello welcome to Class  {this.props.name} from {this.props.place}</h1>
      <h2>{this.props.children}</h2>
      </div>
    )
  }
}

export default Classprops