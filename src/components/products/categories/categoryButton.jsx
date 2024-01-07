import React from "react";
import { StyledCategoryButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../store/categories/categoriesSlice";

export const CategoryButton = ( {category})=>{
    const selectedCategory = useSelector ( state => state.categories.selectedCategory)
    const dispatch = useDispatch();
    return (
        <StyledCategoryButton 
          selected = {category === selectedCategory}
          onClick= {()=> dispatch (setCategory (category))}
        >{category.toUpperCase()}</StyledCategoryButton>    
        
    )
}
