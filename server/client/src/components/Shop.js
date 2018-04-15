import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData, addToCart } from '../actions';
import ProductItem from './ProductItem';


class Shop extends Component {
    constructor() {
        super()
        this.state = {
            index: 10
            // recipes: [
            //     {recipeName: 'Pizza', ingredients: ['Dough', 'Cheese', 'Sauce']},
            //       {recipeName: 'Chicken', ingredients: ['Meat', 'Seasoning', 'other']},
            //         {recipeName: 'Other', ingredients: ['other1', 'other2', 'other3']}
            //   ]};
        }
    }
    

    componentDidMount() {
        this.props.getData();
    };

    getMoreProducts() {
        this.setState({index: this.state.index + 1});
    };

    addToCart(product, quantity, price) {
        const cart_item = [{
            product,
            quantity,
            price
        }];

        console.log("recieved addtoCart:", cart_item);
        this.props.addToCart({ cart_item });
    };
 
    render() {
        return (
            <div>
                <Link to={'/Cart'}>My Cart</Link>
                <div>
                    {this.props.data.map((product, i) => 
                    <ProductItem key={i} product={product} onClick={() => this.addToCart(product.name, 1, product.price )}/> )}
                </div>   

                {/* <h4 key={i}>{item.name}</h4> )} */}
                {/* pass in current object to productitem with {...obj} */}
                
                {/* <ProductItem onClick={() => this.addToCart("Product 1", 1, "19.99")}/>
                <ProductItem onClick={() => this.addToCart("Product 1", 1, "19.99")}/> */}

                <button onClick={this.getMoreProducts.bind(this)}>Show more {this.state.index}</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};



export default connect(mapStateToProps, { getData, addToCart })(Shop);

