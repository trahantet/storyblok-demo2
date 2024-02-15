import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";


const Feature = ({ blok }) => {

  return(
  <div className={`flex-row column content-around items-center feature h-auto`} style={{border: blok.border === "true" ? "4px black solid" : "", backgroundColor:`${blok.background_color ? blok.background_color.value : ""}` }} {...storyblokEditable(blok)}>
     <h1 className="font-sailors text-xl font-bold  text-header bg-sage w-[120%] -ml-4 mt-4">
        {blok.name}
      </h1>
    <div className="p-4">
      {blok.image.filename ? (
        <img
          className="object-center w-full mb-8 lg:h-50 md:h-50 rounded-xl"
          src={blok.image.filename}
          alt="feature"
        />
      ) : (
        ""
      )}
     
      <div className="mt-4 text-black">{render(blok.body)}</div>
   
    </div>
    {blok.button ?  
      <button
                  
                    className="bg-white border-2 border-black w-[50%] mt-auto"
                  >
                    <Link href={`${blok.button_link.cached_url}?page=${blok.button_link.anchor}`} >
                      {blok.button_text}
                    </Link>
                    
                  </button>
                  : ""}
   
  </div>
  )
      };

export default Feature;
