import React from "react";
import { Body } from "./styles";
import { DisplayModal } from "../../components/modal/modal";

export const Layout = ({children}) => {
    return (
        <Body>
            <DisplayModal/>
            {children}
        </Body>
    )
}
