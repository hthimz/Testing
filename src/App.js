import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from "react-router-dom";
import Careers from './screens/Careers';      
import LandingPage from './screens/LandingPage';
import {setMessage} from './actions/message';


class App extends Component {
  
  _onChange = (value) => {
    this.props.dispatch(setMessage(value))
  }
route = () => {
  this.setState({
    screen: !this.state.screen
  })
}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/careers" component={Careers} />
          </div>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
