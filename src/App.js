import './App.css';
import React from 'react';



class App extends React.Component{
  constructor(){
    super()
    this.state = {result : ""}
  }
  changehandler = (e) => {
    this.setState({result : this.state.result + e.target.name});
  }
  Clear = (e) =>{
    this.setState({result : ""});
  }
  Backspace = (e) => {
    this.setState({result : this.state.result.slice(0,-1)});

  }
  Calculate = (e) => {
    /* var foo = eval; 
    */
    this.setState({result : eval(this.state.result).toString()});

  }

  render(){
    return (
      <div className="App">
        <h1>Infinity Calculator</h1>
        <hr></hr>
        <div className="Calculator_screen">
          <form>
            <input type="text" value={this.state.result} readOnly></input>
          </form>
          <div className="KeyPad">
            <div className="row">
              <button name="CE" onClick={this.Clear} style={{backgroundColor: "rgb(247, 143, 143)", color: "white"}}>CE</button>
              <button name="C" onClick={this.Backspace} >C</button>
              <button name="%" onClick={this.changehandler} style={{backgroundColor: "#97def1"}}>%</button>
              <button name="/" onClick={this.changehandler} className="operator" >{'\u00f7'}</button>
            </div>
            <div className="row">
              <button name="7" onClick={this.changehandler}>7</button>
              <button name="8" onClick={this.changehandler}>8</button>
              <button name="9" onClick={this.changehandler}>9</button>
              <button name="*" onClick={this.changehandler} className="operator">&#xd7;</button>
            </div>
           
            <div className="row">
              <button name="4" onClick={this.changehandler}>4</button>
              <button name="5" onClick={this.changehandler}>5</button>
              <button name="6" onClick={this.changehandler}>6</button>
              <button name="-" onClick={this.changehandler} className="operator" >-</button>
            </div>
            <div className="row">
              <button name="1" onClick={this.changehandler}>1</button>
              <button name="2" onClick={this.changehandler}>2</button>
              <button name="3" onClick={this.changehandler}>3</button>
              <button name="+" onClick={this.changehandler} className="operator" >+</button>
            </div>
            <div className="row">
              <button name="-" onClick={this.changehandler}>+/-</button>
              <button name="0" onClick={this.changehandler}>0</button>
              <button name="." onClick={this.changehandler}>.</button>
              <button name="=" onClick={this.Calculate} className="operator" >=</button>
            </div>
          </div>
        </div>
       
      </div>
    );

  }
}
/*
function App() {

  return (
    <div className="App">
    <h1>Helo subas</h1>
    <form>
      <input type="text" ></input>
    </form>
     
    </div>
  );
}
*/

export default App;
