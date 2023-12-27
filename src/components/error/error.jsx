import React from "react";
import { ErrorContainer } from "./styles";

export const Error = ({children, background = "white)"}) => {
    return (
        <ErrorContainer background = {background}>
            {children}
        </ErrorContainer>
    )
}