import React, { Component } from 'react';
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

class Checkout extends Component {
   
    removeFromCart(index) {
        this.props.removeFromCart(index);
    };

    getTotal() {
        let total = 0;
        this.props.cart.forEach((product) => {
            total += (Number(product.price) * product.quantity)
        })

        return `${this.props.currency} ${total}`;
    }


    render() {
        console.log(this.props.cart)
            return this.props.cart.length ?
                (
                    <div>
                    <div id="basket">
                        <ul style={{listStyleType: 'none'}}>
                            { this.props.cart.map((product, i) => 
                                (
                                    <li className="cart-item" key={i}>{product.name} - {product.currency} {product.price} &emsp; 
                                        {product.quantity} &emsp; &emsp; 
                                        <span style={{float: "right"}}><button className="btn-sm btn-danger" onClick={() => this.removeFromCart(product)}>x</button></span>
                                    </li>
                                    )
                                )
                            }
                        </ul>   
                    </div>
                    <div id="checkout">
                        <div id="total">
                            <span><h3>{this.getTotal()}</h3></span>
                        </div>
                    </div> 
                    <Link to={'/'}>
                        <button className="btn btn-primary" id="confirm-purchase">Confirm purchase</button>
                    </Link>
                </div>
                ) : (
                    <div>
                        <div id="basket">
                        <div>
                            No items in shopping cart
                        </div>   
                    </div>
                    <div id="checkout">
                        <div id="total">
                        </div>
                    </div> 
                </div>
                )
            }
        };

const mapStateToProps = state => {
    return {
        cart: state.cart.items,
        currency: state.cart.currency
    }
}

export default connect(mapStateToProps, { removeFromCart })(Checkout);

