import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import {DISHES} from './shared/dishes';
import Main from './components/MainComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }
  render(){
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
