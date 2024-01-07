import React from "react";
import { motion } from "framer-motion";
import {StyledNavLink, NabvarLinksContainer } from "./styles";

import { useSelector } from "react-redux";


export const NavbarLinks= () => {
    const visibleMenu = useSelector(state => state.menu.visible);
   
    if (visibleMenu){

        return(

            <NabvarLinksContainer>
            <motion.div whileHover={{scale:0.97}}>  
            <StyledNavLink
            to= "/"
            style={({isActive}) => ({color: isActive ? `var(--fucsia)` : `white`})}
            >Home</StyledNavLink> 
            </motion.div>
            <motion.div whileHover={{scale:0.97}}>  
            <StyledNavLink
            to= "/about"
            style={({isActive}) => ({color: isActive ? `var(--fucsia)` : `white`})}
            >About</StyledNavLink> 
            </motion.div>
            <motion.div whileHover={{scale:0.97}}>  
            <StyledNavLink
            to= "/store"
            style={({isActive}) => ({color: isActive ? `var(--fucsia)` : `white`})}
            >Store</StyledNavLink> 
            </motion.div>
            <motion.div whileHover={{scale:0.97}}>
            <StyledNavLink 
            to="/contact"
            style={({isActive}) => ({color: isActive ? `var(--fucsia)` : `white`})}
            >Contact</StyledNavLink>
            </motion.div>
            </NabvarLinksContainer>
        )
}}