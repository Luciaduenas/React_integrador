import styled from "styled-components";

export const FooterContainer = styled.div `
    height: auto;
    width: 100%;
    background-color: var(--softpink);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    gap: 0.5rem;
`

export const FooterLogo = styled.img `
    height: 80px;
`
export const SocialContainer = styled.div `
        h4{
        font-family: 'Caveat', cursive;
        font-size: 35px;
        color: var(--pinkred);
        text-align: center;
        @media (max-width:768px) {
         font-size: 30px ;
         text-align: center;
        }
    }
`
export const SocialLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    gap: 1rem;
    a{
        color: var(--pinkred);
        @media (max-width:768px) {
         font-size: 30px ;
        }
    }
`

export const Copyright = styled.div `
    p{
        font-family: 'Fredoka', sans-serif;
        font-style: italic;
        text-align: center;
        font-size: 15px;
        color: var(--pinkred);
        align-items: center;
    }
`