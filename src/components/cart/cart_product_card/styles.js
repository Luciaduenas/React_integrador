import styled from "styled-components";

export const CartProductCardStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 100%;
    height: 80px;
    padding: 1rem;
    gap: 10px;
    box-shadow: var(--beige-bg) 0px 3px 10px;
    h2 {
        font-family: 'Fredoka', sans-serif;
        font-size: 15px;  
        text-align: left;
        text-overflow: clip;
        max-width: 60%;
        color: var(--pinkred);  
    }
`

export const CartProductImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  @media (max-width:768px) {
        display: none;
        };
`
export const CartPriceContainer = styled.div `
   display: flex;
   align-items: center;
   p {
        font-family: 'Fredoka', sans-serif;
        font-size: 16px;    
        color: var(--pink);  
    }

`