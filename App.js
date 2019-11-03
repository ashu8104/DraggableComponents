import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddList from './components/AddList';
//import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/addlist" component={AddList}/>
                </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;