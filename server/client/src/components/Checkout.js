import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart, confirmPurchase } from '../actions';
import {getTotal, getCartTotalVat} from './../lib/getTotal';

class Checkout extends Component {
   

    render() {
            return this.props.cart.length ?
                (
                    <div>
                    <div id="basket">
                        <ul style={{listStyleType: 'none'}}>
                            { this.props.cart.map((product, i) => 
                                (
                                    <li className="cart-item" key={i}>{product.name} - {product.currency} {product.price} &emsp; 
                                        {product.quantity} &emsp; &emsp; 
                                        <span style={{float: "right"}}><button className="btn-sm btn-danger" onClick={() => this.props.removeFromCart(product)}>x</button></span>
                                    </li>
                                    )
                                )
                            }
                        </ul>   
                    </div>
                    <div id="checkout">
                        <div style={{textAlign: 'center'}}>
                            <h3>Total VAT {this.props.currency} {(getTotal(this.props.cart) / 100 * 21).toFixed(2)}</h3>
                        </div>
                        <div id="total" style={{textAlign: 'center'}}>
                            <span>Total with VAT(21%)<h2>{this.props.currency}{getCartTotalVat(this.props.cart)}</h2></span>
                        </div>
                    </div> 
                    <Link to={'/'}>
                        <button className="btn btn-primary" id="confirm-purchase" onClick={() => this.props.confirmPurchase()}>Confirm purchase</button>
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

export default connect(mapStateToProps, { removeFromCart, confirmPurchase })(Checkout);

