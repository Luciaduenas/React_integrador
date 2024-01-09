import React, { useReducer } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { NavbarContainer } from "./styles";
import { NavbarLogo, NavbarLinksCartContainer, MenuContainer, CartContainer, DisplayDiv, NabvarLinksContainer, StyledNavLink} from "./styles";
import { CartMenu } from "../cart/cart_menu/cart_menu";
import { toggleHiddenCart } from "../../store/cart/cartSlice";
import { toggleHiddenMenu, closeMenu } from "../../store/menu/menuSlice";
import { useDispatch } from "react-redux";
import { NavbarLinks } from "./navbarLinks";

export const Navbar = () => {
    const dispatch = useDispatch();

return (
    <NavbarContainer>
        <NavbarLogo src="/LOGO HAPPY COLORS.png" alt="Happy Colors Logo" />
        <NavbarLinksCartContainer>
            <NavbarLinks></NavbarLinks>
        
            <MenuContainer onClick={() => dispatch(toggleHiddenMenu())}>
                <motion.div whileHover={{scale:0.97}}>  
                    <IoMenu />
                </motion.div>
            </MenuContainer>
            <CartContainer >
                <motion.div whileHover={{scale:0.97}}>  
                    <FaShoppingCart onClick={() => dispatch(toggleHiddenCart(), closeMenu())}/>
                </motion.div>
                <DisplayDiv>
                <CartMenu/>
                </DisplayDiv>
            </CartContainer>


        </NavbarLinksCartContainer>
    </NavbarContainer>
)}


