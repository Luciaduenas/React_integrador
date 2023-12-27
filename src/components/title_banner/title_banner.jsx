import React from "react";
import { TitleBannerContainer } from "./styles";

export const TitleBanner = ({children, background = "var(--beige-bg)"}) => {
    return (
        <TitleBannerContainer
        background = {background}>
            {children}
        </TitleBannerContainer>
    )
}