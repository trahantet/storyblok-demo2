import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";

const Footer = ({ blok }) => {
console.log(blok)


  return (
    <div {...storyblokEditable(blok)}  className="pb-5 -mb-2" style={{
      // backgroundImage: `url('${blok.background_image.filename}')`, backgroundSize: "cover"
    }}>
    {/* {blok ? blok.items.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    )): ""} */}
  </div>
  // <>test</>
  );
};

export default Footer;
