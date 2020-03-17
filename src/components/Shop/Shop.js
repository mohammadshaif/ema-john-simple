import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products,setProducts]= useState(first10);
    const [cart,setCart]=useState([])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey =>{
            const products = fakeData.find(pd => pd.key === existingKey);
            products.quantity = savedCart[existingKey];
            return products;
        })
        setCart(previousCart);
    },[]);


    //ata aktu bujte hobe
    const handleAddProducts = (products) =>{
        const toBeAddedKey = products.key;
        // console.log("product add",products);
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
             count = sameProduct.quantity +1;
            sameProduct.quantity = count;
            const others = cart.filter(pd =>pd.key !==toBeAddedKey)
            newCart = [...others,sameProduct];
        }
        else{
            products.quantity = 1;
            newCart = [...cart, products];
        }
        
        setCart(newCart);
        
        addToDatabaseCart(products.key, count)

    }
    return (
        <div className="twin-container">
           <div className="product-container">
           
            {
                products.map(pd=><Product
                    key = {pd.key}
                    showAddToCart={true }
                    handleAddProducts = {handleAddProducts}
                    products={pd}> </Product>)
            }  
            
           </div>
           <div className="cart-container">
                <Cart cart={cart} >
                    <Link to='/review'>
                        <button className='main-button'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
      
    );
};

export default Shop;