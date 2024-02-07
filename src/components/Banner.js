import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Banner = ({ blok }) => {
  return (
    <div className="w-[100vw] py-4" style={{backgroundColor:`${blok.background_color ? blok.background_color.value : ""}`}} {...storyblokEditable(blok)}>
    {blok.items.map((nestedBlok) => (<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />))}
      
 
</div>
  );
};
 
export default Banner;