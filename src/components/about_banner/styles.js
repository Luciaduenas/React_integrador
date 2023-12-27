import styled from "styled-components";

export const AboutBannerContainer = styled.div `
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({background}) =>`${background}`};
    @media (max-width:768px) {
        height: auto;
        flex-direction: column;
        };
    h2 {
        color: white;
        text-shadow: 4px 4px 1px var(--softpink);
        writing-mode: vertical-rl;
        transform: rotate(-180deg);
        font-family: 'Fredoka', sans-serif;
        font-size: 60px;
        font-weight: 500;
        text-align: center;
        justify-content: center;
        width: 10%;
        height: 500px;
        
        @media (max-width:768px) {
        font-size: 60px ;
        width: 100%;
        writing-mode:horizontal-tb ;
        transform:none;
        height: auto;
        padding: 1rem;
        };
    };
    img {
        width: 45%;
        height: 500px;
        object-fit: cover;
        @media (max-width:768px) {
        width: 100%;
        height: 300px;
        }
    };
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        width: 45%;
        height: 500px;
        padding: 3rem;
        @media (max-width:768px) {
        width: 100%;
        height: auto;
        }
            p{
            color: white;
            font-family: 'Fredoka', sans-serif;
            font-size: 24px;
            font-weight: 300;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            span{
                font-family: 'Fredoka', sans-serif;
                font-size: 20px;
                font-weight: 400;
            }
            @media (max-width:768px) {
            font-size: 20px ;
            };
            }

    };
`