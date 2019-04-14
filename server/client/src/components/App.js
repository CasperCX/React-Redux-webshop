import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Shop from './Shop';
import Checkout from './Checkout';


class App extends Component {
  render() {
    return (
      <body>
        <div className="shop-container">
          <BrowserRouter>
            <div>
              <Header/>
              <Route exact path="/" component={Shop} />
              <Route path="/cart" component={Checkout} />
            </div>
          </BrowserRouter>
        </div>
      </body>
    );
  }
}

export default App;
