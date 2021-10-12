import React, {Component} from "react";
import Header from "./components/Header/Header";
import Developer from "./components/Developer/Developer";
class App extends Component {
  render(){
    return (
      <div className="font"> 
    
      <Header/>
      <Developer/>
      
</div>
    );
  }
}
export default App;
