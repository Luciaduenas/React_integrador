import styled from "styled-components";

export const ErrorContainer = styled.div `
    
    width: 100%;
    height: 200px;
    background: ${({background}) =>`${background}`};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 4rem;
    @media (max-width:768px) {
        padding: 1rem 2rem ;
    }
    p{
        font-family: 'Fredoka', sans-serif;
        font-size: 40px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 80%;
        font-weight: 500;
        color: var(--red);
        @media (max-width:768px) {
        font-size: 30px ;
        max-width: 100%;
    }}
    h3{
        font-family: 'Fredoka', sans-serif;
        font-size: 24px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 60%;
        font-weight: 100;
        color: var(--red);
        @media (max-width:768px) {
        font-size: 20px ;
        max-width: 100%;

    }
    }
`