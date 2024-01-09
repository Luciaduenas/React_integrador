import React from "react";
import { Button } from "../button/button";
import { FormContainer, StyledForm, StyledInput, StyledTextarea } from "./styles";
import { ErrorMessageText } from "./errorMessage";
import { useFormik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { renderModal } from "../../store/modal/modalSlice";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const {values, handleChange, handleSubmit, touched, errors, resetForm } = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            mail: "",
            subject: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Please enter your Name"
            }
            if (!values.lastname) {
                errors.lastname = 'Last name is requiered'
            }
            if (!values.mail) {
                errors.email = 'Email is requiered'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
              ) {
                errors.email = 'Invalid email address';
              }
            if (!values.subject) {
                errors.subject = 'Please leave a message'
            }

            return errors;
    },
    onSubmit: (values) =>{
        console.log(values);
        dispatch(renderModal("Your message was received"));
        resetForm ();
        
    },
    

    })


    return(
    <FormContainer>
        <StyledForm action="contact" >
            <StyledInput 
                type="text" 
                placeholder="Name"
                name="name"
                value={values.name}
                onChange= {handleChange}
                id="name" 
                />
            {errors.name && <ErrorMessageText>{errors.name}</ErrorMessageText>}

             <StyledInput 
                type="text" 
                placeholder="Last Name"
                id="lastname"
                value={values.lastname}
                onChange= {handleChange}
                 /> 
             {errors.lastname && <ErrorMessageText>{errors.lastname}</ErrorMessageText>}   
               
            <StyledInput 
                type="mail"
                placeholder="Please enter a valid email"
                id="mail" 
                value={values.mail}
                onChange= {handleChange} />

            {errors.email  && <ErrorMessageText>{errors.email}</ErrorMessageText>}   

            <StyledTextarea 
                name="subject" 
                id="subject" 
                placeholder="Please leave us a message, we love to hear from you."
                cols="30" rows="10"
                value={values.subject}
                onChange= {handleChange} >
            </StyledTextarea>
         {errors.subject && <ErrorMessageText>{errors.subject}</ErrorMessageText>}   


            <Button onClick={handleSubmit} >Submit</Button>
        </StyledForm>
    </FormContainer>
    )
};