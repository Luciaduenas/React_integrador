import { createSlice } from "@reduxjs/toolkit";
import { products2 } from "../../data/products/products";

const INITIAL_STATE = {
    products: products2,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        }
    }
})

export const {getProducts} = productsSlice.actions
export default productsSlice.reducer