import React from "react";
import { ProducsContainer } from "../bestsellers_widget/styles"
import { Button } from "../../button/button";
import { ProductCard } from "../product_card/product_card";
import { SellersWrapper } from "./styles";
import { CategoriesFilter } from "../categories/categories";
import { useDispatch, useSelector } from "react-redux";
import { setProductLimit } from "../../../store/products/productsSlice";




export const StoreWidget = () => {

    const selectedCategory = useSelector (state => state.categories.selectedCategory);
    let products = useSelector (state => state.products.products);
    let limit = useSelector (state => state.products.limit);
       
    const dispatch = useDispatch();

    if (selectedCategory) {
          products =  products.filter ((product) => product.category === selectedCategory) 
         
        } ;


        

    return (
        <SellersWrapper>   

            <CategoriesFilter/>
            
            <ProducsContainer>
                {   
                products.slice(0, limit).map ((product) => <ProductCard key={product.id} {...product}/>)
                
                }
            </ProducsContainer>

            <div>
            {products.length >= limit ? (
                <Button 
                onClick= {()=> dispatch (setProductLimit())}
                background = "var(--btn-gradient-secondary)" radius="0"
                >
                    See More
                 </Button>   
            ) : <p>All products on display</p> }
            </div> 
        </SellersWrapper>
    )
};


