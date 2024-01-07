import React from "react";
import { ProductCardStyle, ProductImg, PriceContainer } from "./styles";
import { Button } from "../../button/button";
import { motion } from "framer-motion";
import { addToCart } from "../../../store/cart/cartSlice";
import { useDispatch } from "react-redux";

export const ProductCard = ( {img, name, price})=>{
    const dispatch = useDispatch();
    return (
        <motion.div whileHover={{scale:1.10}}>

        <ProductCardStyle>
              <ProductImg src={img} alt={name} />
            <h2>{name}</h2>
            <PriceContainer>
                <p>{price}usd</p>
                <Button
                onClick={() => dispatch(addToCart({img, name, price, id}))}
                >ADD TO CART</Button>
            </PriceContainer>
        </ProductCardStyle>
        </motion.div> 
        
    )
}