import React from "react";
import { StyledButton } from "./styled";

export const Button = ({children, disabled, background = "var(--btn-gradient)" , radius = "32", onClick, type, onSubmit}) => {
    return (
        <StyledButton 
        disabled = {disabled}
        radius ={radius}
        background = {background}
        onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}