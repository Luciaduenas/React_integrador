import styled from "styled-components";

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 250px;
    height: 380px;
    padding: 1rem;
    box-shadow: var(--fucsia) 0px 15px 15px;
    &:hover{
        box-shadow: 10px 10px 73px -8px rgba(255,255,255,1);;
    }
    h2 {
        font-family: 'Fredoka', sans-serif;
        font-size: 25px;  
        text-align: center;
        text-overflow: ellipsis;
        max-width: 90%;
        color: var(--pinkred);  
    }
`

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`
export const PriceContainer = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
        font-family: 'Fredoka', sans-serif;
        font-size: 24px;    
        color: var(--pink);  
    }

`