import React from "react";
import { StyledQtyButton } from "./styles";

export const QuantityBtn = ( {children, onClick})=>{
    return (
        <StyledQtyButton 
        onClick={onClick}
        >
            {children}
        </StyledQtyButton >
    )
}