import styled from "styled-components";

export const StyledButton = styled.div`
    padding: 0.8rem 1.5rem; 
    outline: none;
    border: none;
    background: ${({background}) =>`${background}`};
    color:white;
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    width: fit-content;
    border-radius: ${({radius}) => `${radius}px`};
    cursor: pointer;
    &:hover{
        opacity:60%;
    }
    &:disabled{
        cursor: not-allowed;
        opacity: 0.5%;
    }
`