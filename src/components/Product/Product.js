import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img, name,seller,price,stock,key}=props.products
    return (
        <div className="product">
            <div>
                <img src= {img} alt=""/>
            </div>
            <div>
                <h4 className="product-name" > <Link to={'/product/'+key} >{name}</Link> </h4>
                <br/>
                <p><small>by: {seller} </small></p>
                <p>${price} </p>
                <p><small>Only {stock}left in stock-Order </small></p>

                {/* //problem */}
                {/* {props.ShowAddToCart  &&  */
                <button 
                    className='main-button'
                    onClick={ ()=> props.handleAddProducts(props.products)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to card</button>}
            </div>
        </div>
    );
};

export default Product;