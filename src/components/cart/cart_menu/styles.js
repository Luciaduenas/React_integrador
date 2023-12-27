import styled from "styled-components";

export const CartMenuContainer = styled.div`
        position: absolute;
        top: 100px;
        right: 0;
        padding: 20px;
        flex-direction: column;
        max-width: 80%;
        max-height: 100vh;
        background-color: white;
        z-index: 2;
        overflow-y: auto;
        max-height: 70vh;
`

export const CartMenuTitle = styled.h3`
        font-family: 'Caveat', cursive;


`
export const Divisor = styled.div `
        background-color: var(--pink);
        height: 2px;
        width:100%;
        margin-top: 10px;
        margin-bottom: 10px;
        `

export const CartMenuProductsContainer = styled.div `
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;
        padding-bottom: 10px;

`

export const CartTotalContainer = styled.div `
        display: flex;
        max-width: 100%;
        justify-content: space-between;
        align-items: center;
        
`
export const CartTotal = styled.h3`
        font-size: 22px;

`
export const Total = styled.h3 `
        font-size: 22px;

        `
export const CartButtonContainer = styled.div `
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
        font-size: 14px;
`