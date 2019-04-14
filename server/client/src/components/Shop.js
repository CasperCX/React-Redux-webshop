import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../actions';
import ProductItem from './ProductItem';


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
        this.setState({index: this.state.index + 10});
    };


    render() {
        return (
            <div className="store-wrapper">
                <div style={{float: 'left', width: '75%'}}>
                    {this.props.data.splice(1, this.state.index).map((product, i) => 
                    <ProductItem key={i} product={product} /> )}
                </div>
                {/* <button className="padding" onClick={this.getMoreProducts.bind(this)}>Show 10 more</button> */}
      
            <div style={{float: 'left', width: '25%', backgroundColor: 'red'}}>
                <div style={{width: '100%', height: '500px'}}>
                        cart here
                </div>
            </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};



export default connect(mapStateToProps, { getData })(Shop);

