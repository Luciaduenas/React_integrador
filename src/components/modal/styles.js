import styled from "styled-components";

export const ModalContainer = styled.div ` 
    width: 250px;
    height: 150px;
    background: var(--softpink);
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    box-shadow: white 0px 10px 20px 10px;
    z-index: 99;
    p{
        font-family: 'Fredoka', sans-serif;
        font-size: 25px;
        text-shadow: white 2px 2px 2px;
        text-overflow: ellipsis;
        text-align: center;
        font-weight: 500;
        color: var(--red);
    }
`