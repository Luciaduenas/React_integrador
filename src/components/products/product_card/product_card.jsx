import React from "react";
import { ProductCardStyle, ProductImg, PriceContainer } from "./styles";
import { Button } from "../../button/button";
import { motion } from "framer-motion";

export const ProductCard = ( {img, name, price})=>{
    return (
        <motion.div whileHover={{scale:1.10}}>

        <ProductCardStyle>
              <ProductImg src={img} alt={name} />
            <h2>{name}</h2>
            <PriceContainer>
                <p>{price}usd</p>
                <Button>ADD TO CART</Button>
            </PriceContainer>
        </ProductCardStyle>
        </motion.div> 
        
    )
}