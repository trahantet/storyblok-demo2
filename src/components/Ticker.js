import { storyblokEditable } from "@storyblok/react";
import { Margarine } from "next/font/google";
import Marquee from "react-fast-marquee";

const Ticker = ({ blok }) => {
    console.log(blok)
    const mobile = blok.mobile_only ?'sm:hidden' :  " "
  return (
    <div className={`bg-sage text-white py-4 ${mobile}`}{...storyblokEditable(blok)}>
      
      {blok.image ? (
        <Marquee
          autoFill="true"
          play={blok.play}
          className="text-4xl tracking-widest font-quicksand"
        >
          {blok.image.map((image) =>
            
              <div key={image._uid} className="sm:w-[10vw] w-[30vw] mx-4">
                <img
                  key={image._uid}
                  className=""
                  src={image.filename}
                  alt="feature"
                />
               </div>
          
              
            
          )}
        </Marquee>
      ) : (
        <Marquee
        autoFill="true"
        play={blok.play}
        className="text-4xl tracking-widest font-quicksand"
      >
        {blok.announcement} - 
      </Marquee>
      )}
    </div>
  );
};

export default Ticker;
