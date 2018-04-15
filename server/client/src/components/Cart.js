import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {
    
    render() {
        console.log("cart contains", this.props.cart);
        return (
            <div>
                <div id="basket">
                    <ul>
                        { this.props.cart.map((product, i) => 
                             <li key={i}><h2>{product}</h2></li> )}
                    </ul>
                </div>
                <div id="checkout">
                    <div id="total"></div>
                </div> 
                <Link to={'/'}>
                    <button className="btn btn-primary" id="confirm-purchase">Confirm purchase</button>
                </Link>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart.items_
    }
}

export default connect(mapStateToProps, null)(Cart);