import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products, setProducts]= useState(first10);
    const [cart,setCart]=useState([])

    //ata aktu bujte hobe
    const handleAddProducts = (products) =>{
        // console.log("product add",products);
        const newCart = [...cart,products];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
           <div className="product-container">
           
            {
                products.map(pd=><Product
                    handleAddProducts = {handleAddProducts}
                    products={pd}> </Product>)
            }
            
           </div>
           <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
      
    );
};

export default Shop;