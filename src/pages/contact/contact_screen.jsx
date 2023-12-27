import React from "react";
import { ContactForm } from "../../components/contact_form/contact_form";
import { TextBanner } from "../../components/text_banner/text_banner";
import { TitleBanner } from "../../components/title_banner/title_banner";
import { ImageBanner } from "../../components/image_banner/image_banner";
import { AboutBanner } from "../../components/about_banner/about_banner";
import { FaMapMarkerAlt } from "react-icons/fa";




export const ContactScreen = () => {
    return (
        <div>

                <ImageBanner><img src="https://i.pinimg.com/564x/bf/fe/fa/bffefa39328cc2f9edb4ce61eae3ebdb.jpg" alt="" /></ImageBanner>
                <TitleBanner background = "var(--pinkred)" ><p>Lets get in touch!</p></TitleBanner>
                <TextBanner background = "var(  --pink)"> <h3>Have a question or just want to share a burst of happiness? Reach out to us! We love hearing from our joyful community!</h3></TextBanner>
                <ContactForm/>
                <AboutBanner background = "var(--pinkred)">
                    <h2>Find a Store</h2>
                     {/* <img src="https://i.pinimg.com/564x/fe/e6/35/fee635c6d15239a4aa5b38ce388043fe.jpg" alt="mission img" /> */}
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26339.343770018477!2d-122.4988312281782!3d37.76908074127508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085876857369c5b%3A0xe894109bfda58342!2sSan%20Francisco%20Botanical%20Garden!5e0!3m2!1ses!2sar!4v1700578893822!5m2!1ses!2sar" width="100%" height="500" ></iframe>
                    <div>
                        <p> <FaMapMarkerAlt/>
                            <span>San Francisco Botanical Garden</span></p>
                    </div>
                </AboutBanner>
                <TextBanner background = "var(  --red)"> <p>We shall love to see you in San Francisco!</p></TextBanner>
                
            
        </div>
    )
};