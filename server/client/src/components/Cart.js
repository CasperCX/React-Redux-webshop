import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    
    render() {
        console.log("cart contains", this.props.cart);
        return (
            <div>
                <div id="basket">Basket
                    <ul>
                        { this.props.cart.map((product, i) => {
                            return (
                                <li key={i}>
                                    <h2>{product}</h2>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="checkout">
                    <div id="total"></div>
                </div> 
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