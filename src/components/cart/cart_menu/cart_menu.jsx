import React from "react";
import { CartMenuContainer, CartMenuTitle,  Divisor, CartMenuProductsContainer, CartButtonContainer, CartTotalContainer, CartTotal, Total } from "./styles";
import { CartProductCard } from "../cart_product_card/cart_product_card";
import { Button } from "../../button/button";
import { useSelector } from "react-redux";
  
export const CartMenu = () => {
    const hiddenCart = useSelector(state => state.cart.hidden)
    const cartItems = useSelector ( state => state.cart.cartItems)
    const cartTotal= useSelector (state => state.cart.carTtoal)

    
   if (!hiddenCart){
    return (
        <CartMenuContainer>
            <CartMenuTitle>Selected Products</CartMenuTitle>
            <Divisor></Divisor>
            <CartMenuProductsContainer>
            {   
                cartItems.map ((cartProduct) => <CartProductCard key={cartProduct.id} {...cartProduct}/>)
            }
            </CartMenuProductsContainer>
            <Divisor></Divisor>
            <CartTotalContainer>
                <CartTotal>Total</CartTotal>
                <Total>{cartTotal}</Total>
                </CartTotalContainer>
            <Divisor></Divisor>    
            <CartButtonContainer>
                <Button radius="30" background="var(--beige-bg)">Clear Cart</Button>
                <Button radius="30" background="var(--pinkred)">Buy</Button>
            </CartButtonContainer>

        </CartMenuContainer>

    )
}

}