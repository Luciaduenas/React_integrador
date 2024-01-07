import React from "react";
import { CategoriesWidget, CategoriesContainer, StyledCategoryButton } from "./styles";
import { CategoryButton } from "./categoryButton";
import { useSelector } from "react-redux";
import { CategoriesList } from "../../../data/products/products";

export const CategoriesFilter = () => {
  let categories = useSelector (state => state.categories.categories)
  
    return ( 
        <CategoriesWidget>
            <h3>Search by category:</h3>
            <CategoriesContainer>
            {   
               categories.map ((category) => <CategoryButton category={category.category} key={category.id}/>)
            }
            </CategoriesContainer>
        </CategoriesWidget>
    )
}
