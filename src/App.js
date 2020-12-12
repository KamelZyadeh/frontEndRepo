import './App.css';
import {Component} from 'react';
import Dashboard from "./Components/Dashboard";
class App extends Component{
  render() {

    return(
        <div className={"appMainDiv"}>
          <Dashboard/>
        </div>
    )
  }
}

export default App;
