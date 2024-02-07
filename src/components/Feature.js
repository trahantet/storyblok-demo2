import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Feature = ({ blok }) => {
  return(
  <div className={`column feature `} style={{border: blok.border === "true" ? "4px black solid" : ""}} {...storyblokEditable(blok)}>
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
  </div>
  )
      };

export default Feature;
