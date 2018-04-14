import React, { Component } from 'react';

const ProductItem = ({ onClick }) => {
        return (
            <div className="product-item">
            <div className="product-img"></div>
            <div className="product-discription">
                <h4 className="margin">Product 3#</h4>
                <p className="margin">Consectetur ut non dolor sint eu eiusmod adipisicing eu exercitation nostrud irure ad... (more)</p> 
                <button className="margin" onClick={onClick}>Add to cart</button>
                <button className="margin">+</button>
                    <span className="margin">0</span>
                <button className="margin">-</button>
                <span className="margin">$19,99</span>
            </div>
        </div>
        )
};

export { ProductItem };



