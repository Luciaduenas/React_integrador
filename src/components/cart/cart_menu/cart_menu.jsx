import React from "react";
import { CartMenuContainer, CartMenuTitle,  Divisor, CartMenuProductsContainer, CartButtonContainer, CartTotalContainer, CartTotal, Total } from "./styles";
import { CartProductCard } from "../cart_product_card/cart_product_card";
import { Button } from "../../button/button";

export const CartMenu = () => {
    return (
        <CartMenuContainer>
            <CartMenuTitle>Selected Products</CartMenuTitle>
            <Divisor></Divisor>
            <CartMenuProductsContainer>
            {/* {   
                popularProducts.map ((popularProduct) => <CartProductCard key={popularProduct.id} {...popularProduct}/>)
            } */}
            </CartMenuProductsContainer>
            <Divisor></Divisor>
            <CartTotalContainer>
                <CartTotal>Total</CartTotal>
                <Total>20usd</Total>
                </CartTotalContainer>
            <Divisor></Divisor>    
            <CartButtonContainer>
                <Button radius="30" background="var(--beige-bg)">Clear Cart</Button>
                <Button radius="30" background="var(--pinkred)">Buy</Button>
            </CartButtonContainer>

        </CartMenuContainer>

    )
    

}