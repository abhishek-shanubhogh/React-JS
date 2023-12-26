// import logo from './logo.svg';
import './App.css';
import Classprops from './Classprops';
import Funtionalcomp from './Functionalcomp';

function App() {
  return (
    <div >
      <Classprops name="Student 1" place="blore"><p>This is Child Property</p></Classprops>
      <Classprops name="Student 2" place="hyd"><button>click</button></Classprops>
      <Classprops name="Student 3" place="Pune"/>

      <Funtionalcomp name="Student 4"></Funtionalcomp>
      <Funtionalcomp name="Student 5 " place="Dehli">Hello props Childer</Funtionalcomp>
    </div>
  );
}

export default App;
