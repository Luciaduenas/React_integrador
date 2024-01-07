import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, resetCartTotal } from "./cart-utils";

const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
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
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                cartTotal: resetCartTotal(state.cartItems, state.cartTotal)
            }

        },
        clearCart: (state) =>{
            return{
                ...state,
                cartItems:[],
                cartTotal: 0,
            }
        },
        toggleHiddenCart: (state , action) =>{
            return{
                ...state,
                hidden: !state.hidden,
            }
        },
    },
});

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart} = cartSlice.actions

export default cartSlice.reducer