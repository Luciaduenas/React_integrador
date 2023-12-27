import React from "react";
import { Error } from "../../components/error/error";

export const Error404 = () => {
    return (
        <div>
               <Error>
                    <h3>Error 404</h3>
                    <p>Not found</p>
               </Error>  
        </div>
    )
}