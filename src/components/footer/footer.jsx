import React from "react";

import { FooterContainer, FooterLogo, SocialContainer, SocialLinksContainer, Copyright } from "./styles";
import { FaHeart } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

export const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterLogo src="/LOGO HAPPY COLORS.png" alt="Happy Colors Logo" />
            <SocialContainer>
                <h4>Follow us on social Media</h4>
                <SocialLinksContainer>
                    <a href="#" target="_blank"><FaFacebookSquare/>
                      </a>
                    <a href="#" target="_blank"><FaInstagramSquare/>    </a>   
                    <a href="#" target="_blank"><FaPinterestSquare/>    </a>           
               </SocialLinksContainer>
            </SocialContainer>
            <Copyright>
                <p>© 2023 Happy Colors. All rights reserved. Designed with <FaHeart/> by Lucía Dueñas</p>
            </Copyright>
        </FooterContainer>
    )
}
