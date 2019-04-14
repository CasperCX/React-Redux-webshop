import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };
    }

    quantityCheck() {
        if (this.state.quantity > 1) {
            this.setState({quantity: this.state.quantity -= 1})
        }
    }

    addToCart(name, quantity, price, currency) {
        const cart_item = {
            name,
            quantity,
            price,
            currency
        };

        this.props.addToCart({ cart_item });
    };
 

    render() {
        return (
        <div className="product-item">
            <img className="product-img" src={this.props.product.picture} alt="product" />
            <div className="product-description">
                <h4 className="title">{this.props.product.name}</h4>
                <hr />
                <p className="padding">{this.props.product.about.slice(1,100)} ...more</p>
            </div>
           <div className="product-actions">
            <button className="padding" onClick={() => this.addToCart(this.props.product.name, this.state.quantity, this.props.product.price, this.props.product.currency)}>Add to cart</button>
                <button className="margin" onClick={() => this.setState({quantity: this.state.quantity += 1})}>+</button>
                    <span className="margin">{this.state.quantity}</span>
                <button className="margin" onClick={() => this.quantityCheck()}>-</button>
                <div style={{float: 'right', margin: '10px'}}>
                    <h5 className="padding">{this.props.product.currency}{this.props.product.price} </h5>
                </div>
            </div>  
        </div>
        )
    }
};



export default connect(null, { addToCart })(ProductItem);




