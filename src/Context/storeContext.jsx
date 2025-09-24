import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import React from "react";


export const StoreContext = createContext(null);



const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const subtotal = food_list.reduce((acc, item) => acc + (cartItems[item._id] || 0) * item.price, 0)
    const deliveryCharges = subtotal > 0 ? 5 : 0  // Example fixed delivery charge
    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {

    //         if (cartItems[item] > 0) {
    //             let itemInfo = food_list.find((product) => product._id === item)
    //              totalAmount += itemInfo.price * cartItems[item]
    //         }


    //     }
    //     return totalAmount;
    // }

    const contextValue = {
        food_list, addToCart, removeFromCart, cartItems, setCartItems, subtotal,deliveryCharges

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;