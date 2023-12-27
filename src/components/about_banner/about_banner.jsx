import React from "react";
import { AboutBannerContainer } from "./styles";

export const AboutBanner = ({children,background = "var(--beige-bg)" }) =>{
    return(
        <>
        <AboutBannerContainer
        background = {background}>
            {children}
        </AboutBannerContainer>
        </> 
    )
}