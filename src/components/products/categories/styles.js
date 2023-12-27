import styled from "styled-components";

export const CategoriesWidget = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    font-family: 'Fredoka', sans-serif;
    font-size: 20px;  
    font-style: italic;
    font-weight: 400;
    text-align: center;
    text-overflow: ellipsis;
    max-width: 90%;
    color:white;  

    @media (max-width:768px) {
        gap: 0.5rem;
    }
`

export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media (max-width:768px) {
        flex-direction: column ;
        gap: 0.5rem;
    }
`

export const StyledCategoryButton = styled.div`
    padding: 0.8rem;
    outline: none;
    border: none;
    background: var(--softpink);
    color:white;
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    font-size: 12px;
    width: 115px;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    &:hover{
        opacity:60%;
    }
    &:disabled{
        cursor: not-allowed;
        opacity: 0.5%;
    }
    &:active {
        border: 1px solid var(--red);
    }
    
`