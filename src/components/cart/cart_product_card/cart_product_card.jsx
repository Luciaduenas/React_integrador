import React from "react";
import { CartProductCardStyle, CartProductImg, CartPriceContainer } from "./styles";

export const CartProductCard = ( {img, name, price})=>{
    return (
        <CartProductCardStyle>
            <CartProductImg src={img} alt={name} />
            <h2>{name}</h2>
            <CartPriceContainer>
                <p>{price}usd</p>
                
            </CartPriceContainer>
        </CartProductCardStyle>
        
    )
}