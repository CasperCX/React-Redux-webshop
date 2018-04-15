import React, { Component } from 'react';

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

    render() {
        return (
        <div className="product-item">
            <img className="product-img" src={this.props.product.picture} alt="product" />
            <div className="product-discription">
                <h4 className="title">{this.props.product.name}</h4>
                <p className="padding">{this.props.product.about.slice(1,150)} ...more</p>
                <button className="padding" onClick={this.props.onClick}>Add to cart</button>
                <button className="margin" onClick={() => this.setState({quantity: this.state.quantity += 1})}>+</button>
                    <span className="margin">{this.state.quantity}</span>
                <button className="margin" onClick={() => this.quantityCheck()}>-</button>
                    <h5 className="padding">{this.props.product.price}</h5>
            </div>
        </div>
        )
    }
};

export default ProductItem;



