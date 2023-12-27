import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
    height: 100px;
    width: 100%;
    background-color: var(--softpink);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    position: fixed;
    z-index: 3;
    @media (max-width:768px) {
        padding: 1rem 2rem ;
    }
`

export const NavbarLogo = styled.img`
    height: 100%;
`
export const NavbarLinksCartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`
export const CartContainer = styled.div `
    color: var(--fucsia);
    font-size: 2rem;
    cursor: pointer;
`

export const DisplayDiv = styled.div` 
    display:none;
`

export const MenuContainer = styled.div `
    color: var(--fucsia);
    font-size: 2rem;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`
    
export const NabvarLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    @media (max-width: 768px) {
        display: none;
        position: absolute;
        top: 100px;
        right: 0;
        padding: 20px;
        flex-direction: column;
        background-color: var(--softpink);
    }
`

export const StyledNavLink  = styled(NavLink)`
   font-family: 'Caveat', cursive;
    font-size: 2rem;
    font-weight: 200;
`