import React from "react";
import { Button } from "../button/button";
import { FormContainer, StyledForm, StyledInput, StyledTextarea } from "./styles";

export const ContactForm = () => {
    return(
    <FormContainer>
        <StyledForm action="contact">
            <StyledInput 
                type="text" 
                placeholder="Name"
                id="name" />
             <StyledInput 
                type="text" 
                placeholder="Last Name"
                id="lastname" />    
            <StyledInput 
                type="mail"
                placeholder="Please enter a valid email"
                id="mail" />
            <StyledTextarea 
                name="subject" 
                id="subject" 
                placeholder="Please leave us a message, we love to hear from you."
                cols="30" rows="10">
            </StyledTextarea>
            <Button type="submit" >Submit</Button>
        </StyledForm>
    </FormContainer>
    )
};