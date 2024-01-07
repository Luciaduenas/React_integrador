import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    visible: true,
}

export const menuSlice = createSlice ({
    name: "menu",
    initialState: INITIAL_STATE,
    reducers: {
        toggleHiddenMenu: (state , action) =>{
            return{
                ...state,
                visible: !state.visible,
            }
        },
        closeMenu: (state, action) => {
            return{
                ...state,
                visible: false,
        }
        },
    }})

export const {toggleHiddenMenu, closeMenu} = menuSlice.actions

export default menuSlice.reducer

