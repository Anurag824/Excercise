import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Info from './Components/Info';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/Info' component={Info} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
