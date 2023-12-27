import styled from "styled-components";

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    align-items: center;
    justify-content: center;
    background-color: var(--softpink);
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
    min-width: 300px;
    max-width: 400px;
`

export const StyledInput = styled.input`
    border: 1px solid var(--fucsia);
    border-radius: 1rem;
    font-size: 18px;
    padding: 10px;
    color: var(--softpink);
    padding: 10px;
    font-size: 18px;
    font-family: 'Fredoka', sans-serif;
    ::placeholder{
        color: var(--fucsia);
        font-family: 'Fredoka', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding: 10px;
    }

`

export const StyledTextarea = styled.textarea`
    border: 1px solid var(--fucsia);
    font-family: 'Fredoka', sans-serif;
    border-radius: 1rem;
    font-size: 18px;
    padding: 10px;
    color: var(--softpink);
    padding: 10px;
    font-size: 18px;
    ::placeholder{
        color: aliceblue;
        font-family: 'Fredoka', sans-serif;
        font-size: 18px;
        font-weight: 400;
        padding: 10px;
    }

`


