import React from "react";
import { ProducsContainer } from "../bestsellers_widget/styles"
import { Button } from "../../button/button";
import { ProductCard } from "../product_card/product_card";
import { SellersWrapper } from "./styles";
import { CategoriesFilter } from "../categories/categories";
import { useSelector } from "react-redux";


export const StoreWidget = () => {

    let products = useSelector (state => state.products.products);

    return (
        <SellersWrapper>   
        <CategoriesFilter/>
        <ProducsContainer>
            {   
             products.map ((product) => <ProductCard key={product.id} {...product}/>)
            }


        </ProducsContainer>
        <div>
            <Button 
            background = "var(--btn-gradient-secondary)" radius="0">See More</Button>
        </div> 
        </SellersWrapper>
    )
}

