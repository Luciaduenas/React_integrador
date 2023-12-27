import React from "react";
import { StoreWidget } from "../../components/products/store_widget/store_widget"
import { TitleBanner } from "../../components/title_banner/title_banner";
import { ImageBanner } from "../../components/image_banner/image_banner";
import { TextBanner } from "../../components/text_banner/text_banner";

export const StoreScreen = () => {
    return (
        <div>
                <ImageBanner> <img src="https://i.pinimg.com/564x/36/d3/e2/36d3e246f6ae85ecc332915b8e20924f.jpg" alt=""/></ImageBanner>
                <TitleBanner background = "var(--red)"><p>The Happy Store</p></TitleBanner>
                <TextBanner background = "var(--softpink)" ><h3>As you explore our store, we hope you find something that makes your heart skip a beat and brings a burst of happiness into your day.</h3></TextBanner>
                <StoreWidget/>
        </div>
    )
}