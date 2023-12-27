import React from "react";
import { TextBanner } from "../../components/text_banner/text_banner";
import { AboutBanner } from "../../components/about_banner/about_banner";

export const AboutScreen = () => {
    return (
        <div>
                <AboutBanner background = "var(--pink)">
                    <h2>About</h2>
                     <img src="https://i.pinimg.com/564x/87/60/6f/87606fb661a83491750e06f6fc12fe7c.jpg" alt="about img" />
                     <div>
                         <p>At Happy Colors, we believe in the power of happiness and cuteness. Our store is a whimsical wonderland filled with joy-inducing treasures that are sure to bring a smile to your face. We are more than just a store; we're a celebration of all things happy and cute.</p>
                     </div>
                </AboutBanner>
                <AboutBanner background = "var(--tangerine)">
                    <h2>Our Mission</h2>
                     <img src="https://i.pinimg.com/564x/36/9d/6e/369d6e89f4e90844e3e8288e177f6ef8.jpg" alt="mission img" />
                     <div>
                         <p>Our mission is simple: to spread happiness one adorable item at a time. In a world that can sometimes feel hectic and overwhelming, we strive to be a sanctuary of joy. We curate a collection of items that are not only cute but also radiate positivity. From charming plush toys to cheerful home decor, each product is handpicked to uplift and inspire.</p>
                     </div>
                </AboutBanner>
                <AboutBanner background = "var(--fucsia)">
                    <h2>Our Commitment</h2>
                     <img src="https://i.pinimg.com/564x/ab/31/8e/ab318ee51fb43d39bb26836317f29ad0.jpg" alt="commitment img" />
                     <div>
                         <p>Quality and happiness go hand in hand at Happy Colors. We are committed to offering products that not only look and feel fantastic but also stand the test of time. Every item in our collection is chosen for its craftsmanship, attention to detail, and ability to bring joy into your life.</p>
                     </div>
                </AboutBanner>
            <TextBanner><p>We want to make your everyday life into a fantasy magical world. After all, happiness is in the details.</p></TextBanner>  
        </div>
    )
}