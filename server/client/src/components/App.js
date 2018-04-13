import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
