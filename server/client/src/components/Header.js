import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to={'/'}>
              <a className="navbar-brand" href="#">React-Redux-Node Webshop</a>
            </Link>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                  <Link to={'/'}>
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Shop <span className="sr-only">(current)</span></a>
                    </li>
                  </Link>
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <i className="fa fa-shopping-cart"></i>
                    </li>
                  <Link to={'/Cart'}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">My cart ( {this.props.items} ) </a>
                    </li>
                  </Link>
                  </ul>
              </div>
            </nav>
          </div>
      )
  }
};

const mapStateToProps = (state) => {
  return {  
    items: state.cart.items_count
  }  
  
};

export default connect(mapStateToProps, null)(Header);







