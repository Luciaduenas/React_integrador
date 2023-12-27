import React from "react";
import { Hero } from "../../components/hero/hero";
import { TextBanner } from "../../components/text_banner/text_banner";
import { BestsellersWidget } from "../../components/products/bestsellers_widget/bestsellers_widget";


export const HomeScreen = () => {
    return (
        <div>
                <Hero/>
                <TextBanner><p>Welcome to the magical world of Happy Colors!</p></TextBanner>  
                <BestsellersWidget/>
        </div>
    )
}