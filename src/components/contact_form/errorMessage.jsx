import React from "react";
import { StyledErrorMessage } from "./styles";

export const ErrorMessageText = ({children}) => {
    return (
        <StyledErrorMessage>
            {children}
        </StyledErrorMessage>
    )
}