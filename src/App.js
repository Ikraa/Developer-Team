import React, {Component} from "react";
import Header from "./components/Header/Header";
import Devoloper from './components/Developer/Developer'



class App extends Component {
  render(){
    return (
      <div className="font"> 
    
      <Header/>
      
      <Devoloper />
      
</div>
    );
  }
}
export default App;
