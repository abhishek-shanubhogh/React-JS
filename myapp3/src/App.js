import React from "react";
import "./App.css"
import NewComp   from "./Components/NewComp";

class App extends React.Component{
  
  styles={
    fontStyle :'bold',
    color:'teal'

  }
  render()
  {
    
    return (
      <div className='App'>
    <h1 style={this.styles}>welcome to Props</h1>

    <NewComp name="abhi" />
    </div>);
  }


}

export default App;
