import React from "react";
import { CartMenuContainer, CartMenuTitle,  Divisor, CartMenuProductsContainer, CartButtonContainer, CartTotalContainer, CartTotal, Total } from "./styles";
import { CartProductCard } from "../cart_product_card/cart_product_card";
import { Button } from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/cart/cartSlice";
import { renderModal } from "../../../store/modal/modalSlice";
import { closeMenu } from "../../../store/menu/menuSlice";


  
export const CartMenu = () => {
    const hiddenCart = useSelector(state => state.cart.hidden)
    const cartItems = useSelector ( state => state.cart.cartItems)
    const cartTotal = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity);
      }, 0);

    const dispatch= useDispatch();

   if (!hiddenCart){
    return (
        <CartMenuContainer>

            <CartMenuTitle>Selected Products</CartMenuTitle>

            <Divisor></Divisor>
        
            <CartMenuProductsContainer>
                
            {cartItems.length ? (   
                cartItems.map ((cartProduct) => <CartProductCard key={cartProduct.id} {...cartProduct}/>) 
            ) : ( <p>Fill this cart with hapiness!</p>)
            }
            </CartMenuProductsContainer>

            <Divisor></Divisor>
            
            {cartItems.length ?(
            <CartTotalContainer>
                <CartTotal>Total</CartTotal>
                <Total>{cartTotal} usd</Total>
            </CartTotalContainer>
            ):null }

            <Divisor></Divisor>    

            {cartItems.length ?(
            <CartButtonContainer>
                <Button 
                    radius="30" 
                    onClick={() => dispatch(clearCart()) && dispatch(renderModal("All items have been deleted"))}
                    >Clear Cart
                </Button>
                <Button 
                    radius="30" 
                    background="var(--pinkred)"
                    onClick={() => dispatch(clearCart()) && dispatch(renderModal("Your purchase has been confirmed"))}
                    >Buy
                </Button>
            </CartButtonContainer>) 
            : null }

        </CartMenuContainer>

    )
}

}