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
    span{
        font-size: 12px;
        position: relative;
        left:-8px;
        top: -25px;
        background-color: white;
        border: 1px solid var(--fucsia);
        border-radius: 1000px;
        padding: 0.2rem 0.5rem;
    }
`

export const DisplayDiv = styled.div` 
    display:flex;
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
        display: flex;
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