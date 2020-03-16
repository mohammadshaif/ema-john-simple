import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total,prd)=>total+prd.price,0)
    // let total = 0
    // for (let i = 0; i < cart.length; i++) {
    //     const products = cart[i];
    //     total = total+products.price;
    // }

    let shipping = 0;
    if (total>35) {
        shipping=0;
    }else if (total>15) {
        shipping = 4.99;
    }else if (total>0) {
        shipping = 12.99
    }

    const tax = total/10;
    const formatNum = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h3>Order Summary</h3>
                <h5>Item Ordered: {cart.length} </h5>
                <p>Product Price: {formatNum(total)} </p>
                <p><small>Shipping Cost:{shipping} </small></p>
                <p><small>Tax + VAT: {formatNum(tax)} </small></p>
                <p>Total Price: {formatNum(total + shipping +tax)} </p>
        </div>
    );
};

export default Cart;