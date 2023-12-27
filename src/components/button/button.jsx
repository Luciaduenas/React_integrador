import React from "react";
import { StyledButton } from "./styled";

export const Button = ({children, disable, background = "var(--btn-gradient)" , radius = "32"}) => {
    return (
        <StyledButton 
        disabled = {disable}
        radius ={radius}
        background = {background}
        >
            {children}
        </StyledButton>
    )
}