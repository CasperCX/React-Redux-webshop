import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

class Cart extends Component {
    state = {
        cart_contents: []
    };

    componentWillMount() {
        this.setState({
            cart_contents : this.props.cart
        })
    };

    removeFromCart(index) {
        this.props.removeFromCart(index);
    };


    render() {
        console.log("cart contains", this.state.cart_contents);
        console.log("cart length", this.state.cart_contents.length);
            return this.state.cart_contents ?
                (
                    <div>
                    <div id="basket">
                        <div>
                            { this.state.cart_contents.map((product, i) => 
                                (
                                    <li className="cart-item" key={i}>{product.name} - {product.price} &emsp; {product.quantity}x &emsp; &emsp; 
                                        <span>(remove) <button onClick={() => removeFromCart(i)}>x</button></span></li>
                                    )
                                )
                            }
                        </div>   
                    </div>
                    <div id="checkout">
                        <div id="total"></div>
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

export default connect(mapStateToProps, { removeFromCart })(Cart);

