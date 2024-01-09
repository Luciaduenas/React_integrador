import React from "react";
import { CartProductCardStyle, CartProductImg, CartPriceContainer, CartQuantityContainer } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/cart/cartSlice";
import { StyledQtyButton } from "./styles";

export const CartProductCard = ( {img, name, price, quantity, id})=>{
    const dispatch = useDispatch();

    return (
        <CartProductCardStyle>
            <CartProductImg src={img} alt={name} />
            <h2>{name}</h2>
            <CartQuantityContainer>
            <StyledQtyButton onClick={() => dispatch(removeFromCart({img, name, price, id}))}
                >-</StyledQtyButton>
                <p>{quantity}</p>
                <StyledQtyButton onClick={() => dispatch(addToCart({img, name, price, id}))}
                >+</StyledQtyButton>
                
            </CartQuantityContainer>
            <CartPriceContainer>
                <p>{price}usd</p>
                
            </CartPriceContainer>
        </CartProductCardStyle>
        
    )
}