import React from "react";
import { StyledImgBanner } from "./styles";

export const ImageBanner =({children}) =>{
    return(
        <StyledImgBanner>
            {children}
        </StyledImgBanner>
    )
}