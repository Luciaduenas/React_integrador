import React from "react";
import { ModalContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence, usePresence } from "framer-motion"
import {eraseModal } from "../../store/modal/modalSlice"

export const DisplayModal = ()=>{
  const isVisible = useSelector(state => state.modal.isVisible);
  const text = useSelector(state => state.modal.text);
  const dispatch = useDispatch();


  if (isVisible){
    const timer = setTimeout(() => {
        dispatch(eraseModal());
      }, 1000);
    return (
<AnimatePresence>
    
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
             <ModalContainer>
                <p>{text}</p>
            </ModalContainer>

       </motion.div>
  </AnimatePresence>
    )
    {setTimeout(() => {
        dispatch => (eraseModal())
        
    }, 300)}
        
  
}
}