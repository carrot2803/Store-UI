import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { PRODUCTS } from "../../utils/products";
import { CartItem } from "./cart-item";
import './cart.css'


export const Cart = () => {
    const { cartItems, getTotal, checkout } = useContext(ShopContext);
    const total = getTotal(), navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1 class="txt"> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) return <CartItem data={product}/>
                })}
            </div>
            {total > 0 ? (
                <div className="checkout">
                    <p class="txt"> Subtotal: ${total} </p>
                    <button onClick={() => navigate("Store-UI/")}> Continue Shopping </button>
                    <button onClick={() => { checkout(); navigate("Store-UI/checkout"); }}>
                        {" "}Checkout{" "}
                    </button>
                </div>
            ) : (<h1 class="txt"> Your Shopping Cart is empty</h1>)}
        </div>
    );
};