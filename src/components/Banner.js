import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Banner = ({ blok }) => {
  return (
    <div className="w-[100vw] flex justify-center items-center" style={{backgroundColor:`${blok.background_color ? blok.background_color.value : ""}`}} {...storyblokEditable(blok)}>
    {blok.items.map((nestedBlok) => (<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />))}
      
 
</div>
  );
};
 
export default Banner;