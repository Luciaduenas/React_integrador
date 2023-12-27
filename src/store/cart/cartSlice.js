import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartItems: [],
    cartTotal: 0,
    hidden: true,
}
export const cartSlice = createSlice ({
    name: "cart",
    inistialState: INITIAL_STATE,
    reducers:{
        addToCart: (state , action) =>{

        },
        removeFromCart: (state , action) =>{

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
    }
})

export const {addToCart, removeFromCart, clearCart, toggleHiddenCart} = cartSlice.actions

export default cartSlice.reducer