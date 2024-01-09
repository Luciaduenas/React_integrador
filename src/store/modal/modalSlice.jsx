import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    isVisible: false,
    text:"Hola",
}

export const modalSlice = createSlice ({
    name: 'modal',
    initialState: INITIAL_STATE,
    reducers: {
        renderModal: (state , action) =>{
            return{
                ...state,
                isVisible: true,
                text: action.payload,
            }
        },
        eraseModal: (state , action) =>{
            return{
                ...state,
                isVisible: false,
                text: action.payload,
            }
        },
     
}})

export const {renderModal, eraseModal} = modalSlice.actions
export default modalSlice.reducer