import React from "react";
import { TextBannerContainer } from "./styles";

export const TextBanner = ({children, background = "var(--red)"}) => {
    return (
        <TextBannerContainer background = {background}>
            {children}
        </TextBannerContainer>
    )
}