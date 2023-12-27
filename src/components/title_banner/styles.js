import styled from "styled-components";

export const TitleBannerContainer = styled.div `
    
    width: 100%;
    background: ${({background}) =>`${background}`};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    p {
        font-family: 'Fredoka', sans-serif;
        text-shadow: 4px 4px 1px var(--softpink);
        font-size: 80px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 80%;
        font-weight: 500;
        color: white;
        @media (max-width:768px) {
        font-size: 60px ;
    }
    }
`