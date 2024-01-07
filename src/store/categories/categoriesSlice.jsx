import { createSlice } from "@reduxjs/toolkit";
import { CategoriesGroup } from "../../data/products/products";

const initialState = {
    categories: CategoriesGroup,
    selectedCategory: "",
}


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories: state => {
            return state;
        },
        setCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null 
            }
        },
    }
})

export const {getCategories, setCategory} = categoriesSlice.actions
export default categoriesSlice.reducer