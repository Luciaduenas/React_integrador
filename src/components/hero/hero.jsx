import React from "react";
import { motion } from "framer-motion";
import { HeroContainer, CoverImg, TextContainer } from "./styles";
import { Button } from "../button/button";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <HeroContainer>
                <CoverImg src="/cover.jpg" alt="cover image" />
            <TextContainer>
                <h1>ALL GOOD VIBES & COLOR.</h1>
                <p> We handpick the happiest items to bright up your life!</p>
                <Button radius= "0" >
                    <Link to="/store" >Shop Online</Link></Button>
            </TextContainer>
        </HeroContainer>
    )

}