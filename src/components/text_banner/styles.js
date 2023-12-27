import styled from "styled-components";

export const TextBannerContainer = styled.div `
    
    width: 100%;
    background: ${({background}) =>`${background}`};;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 4rem;
    @media (max-width:768px) {
        padding: 1rem 2rem ;
    }
    p{
        font-family: 'Caveat', cursive;
        font-size: 40px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 80%;
        font-weight: 500;
        color: white;
        @media (max-width:768px) {
        font-size: 30px ;
        max-width: 100%;
    }}
    h3{
        font-family: 'Caveat', cursive;
        font-size: 24px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 60%;
        font-weight: 100;
        color: white;
        @media (max-width:768px) {
        font-size: 20px ;
        max-width: 100%;

    }
    }
`