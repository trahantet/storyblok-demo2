import { storyblokEditable } from "@storyblok/react";
import { Margarine } from "next/font/google";
import Marquee from "react-fast-marquee";


const Ticker = ({ blok }) => {
    
    console.log(blok.play)
    return(

    <div className="bg-sage text-white py-4" {...storyblokEditable(blok)} >
        <Marquee autoFill="true" play={blok.play} className="text-4xl tracking-widest font-quicksand">{blok.announcement}  -  </Marquee>

        </div>

    );
 
    };
 
export default Ticker;