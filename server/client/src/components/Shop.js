import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData, removeFromCart } from '../actions';
import ProductItem from './ProductItem';
import {getCartTotalVat, getTotalProduct} from './../lib/getTotal';


class Shop extends Component {
    constructor() {
        super()
        this.state = {
            index: 10
        }
    }

    componentDidMount() {
        this.props.getData();
    };

    getMoreProducts() {
        this.setState({index: this.state.index + 8});
    };


    render() {
        return (
            <div className="store-wrapper">
                <div style={{float: 'left', width: '75%'}}>
                <div>
                    {this.props.data.splice(1, this.state.index).map((product, i) => 
                        <ProductItem key={i} product={product} /> )}
                </div>
                <button className="padding" style={{float: 'left'}} onClick={this.getMoreProducts.bind(this)}>Show 8 more</button>
            </div>
      
            <div style={{float: 'left', width: '20%', border: '1px solid black', margin: '20px'}}>
                <div style={{width: '100%', height: '600px', position: 'relative'}}>
                    <div style={{height: '40px', width: '100%', backgroundColor: 'rgb(230, 230, 230)', textAlign: 'center'}}>Cart</div>
                        <ul style={{listStyleType: 'none', padding: '0px'}}>
                            {this.props.cart.map((product, i) => {
                                return (
                                    <li style={{padding: '10px'}}>
                                        {product.quantity}x {product.name}
                                        <span style={{float: "left", paddingRight: '20px'}}>
                                            {this.props.currency}{getTotalProduct(product)}
                                        </span>
                                        <span style={{float: 'right', padding: '0px'}}>
                                            <button className="btn-sm btn-danger" onClick={() => this.props.removeFromCart(product)}>x</button>
                                        </span>
                                        <hr />
                                    </li>
                                )
                            })}
                        </ul>
                    <div style={{position: 'absolute', bottom: '0px', right: '0px', width: '100%'}}>
                            <div style={{float: 'left', margin: '10px'}}>
                                <span>inc VAT: <h2>{this.props.currency}{getCartTotalVat(this.props.cart)}</h2></span>
                            </div>
                            <div style={{right: '0px', marginRight: '20px', float: 'right'}}>
                                <Link to={'/Cart'}>
                                    <button className="btn btn-primary">Checkout</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
        cart: state.cart.items,
        currency: state.cart.currency
    }
};



export default connect(mapStateToProps, { getData, removeFromCart })(Shop);

