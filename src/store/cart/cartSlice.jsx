import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

const INITIAL_STATE = {
    cartItems: [],
    hidden: true,
}

export const cartSlice = createSlice ({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers:{
        addToCart: (state , action) =>{
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        },
        removeFromCart: (state , action) =>{
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        },
        clearCart: (state) =>{
            return{
                ...state,
                cartItems:[],
            }
        },
        toggleHiddenCart: (state ) =>{
            return{
                ...state,
                hidden: !state.hidden,
            }
        },
        closeCart: (state, action) => {
            return{
                ...state,
                hidden: true,
        }
        },
    },
});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart, closeCart} = cartSlice.actions

export default cartSlice.reducer