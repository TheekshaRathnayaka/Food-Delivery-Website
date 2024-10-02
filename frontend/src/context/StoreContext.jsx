import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
            setCartItems((prev) => {
                const currentCount = prev[itemId] || 0;
                return {...prev, [itemId]: currentCount + 1}; 
            });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const currentCount = prev[itemId] || 0;
            if (currentCount === 1) {
                const { [itemId]: _, ...rest } = prev; // Remove the item from the cart if its count reaches 0
                return rest;
            } else {
                return {...prev, [itemId]: currentCount - 1};
            }
        });
    }    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find( (product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];    
            }
        }
        return totalAmount;
    }
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
