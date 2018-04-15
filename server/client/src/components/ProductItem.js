import React, { Component } from 'react';

const ProductItem = ({ product, onClick }) => {
        return (
        <div className="product-item">
            <img className="product-img" src={product.picture} alt="product image" />
            <div className="product-discription">
                <h4 className="margin">{product.name}</h4>
                <p className="padding">{product.about.slice(1, 80)} ...more</p>
                <button className="margin" onClick={onClick}>Add to cart</button>
                <button className="margin">+</button>
                    <span className="margin">1</span>
                <button className="margin">-</button>
                    <h5 className="padding">{product.price}</h5>
            </div>
        </div>
        )
};

export { ProductItem };



