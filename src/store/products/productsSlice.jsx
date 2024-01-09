import { createSlice } from "@reduxjs/toolkit";
import { products2 } from "../../data/products/products";

const INITIAL_STATE = {
    products: products2,
    limit: 3,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        },
        setProductLimit: (state, action) => {
            return {
                ...state,
                limit: state.limit+3,
            }
            }
        },
    }
)


export const {getProducts, setProductLimit} = productsSlice.actions
export default productsSlice.reducer