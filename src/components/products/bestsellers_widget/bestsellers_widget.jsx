import React from "react";
import { BestSellersWrapper, CursiveTitle, ProducsContainer } from "./styles";
import { Button } from "../../button/button";
import { ProductCard } from "../product_card/product_card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const BestsellersWidget = () => {
    const recommended= useSelector(state=> state.recommended.recommended)
    return (
        <BestSellersWrapper>   
        <CursiveTitle>Check out this items</CursiveTitle>
        <ProducsContainer>
            {   

                recommended.map ((recommendedProduct) => <ProductCard key={recommendedProduct.id} {...recommendedProduct}/>)
            }

        </ProducsContainer>

        <div>
            <Button background = "var(--btn-gradient-secondary)" radius="0" >
                <Link to="/store" >Go to store</Link>
                </Button>
        </div>
        </BestSellersWrapper>
    )
}   