import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => <h2>Home page</h2>;
const Cart = () => <h2>My card</h2>;
const Surveys = () => <h2>Surveys</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/surveys" component={Surveys} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
