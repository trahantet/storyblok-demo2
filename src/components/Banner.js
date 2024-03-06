import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Banner = ({ blok }) => {
  return (
    <div className=" banner w-[100vw]  justify-center items-center" style={{backgroundColor:`${blok.background_color ? blok.background_color.value : ""}`}} {...storyblokEditable(blok)}>
    {blok.items.map((nestedBlok) => (<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />))}
      
    <style jsx>{`
        .banner {
          display: flex
        }
        @media (max-width: 768px) {
          .banner {
            display: ${blok.desktop_only ? "none" : "flex"};
            
          }
        }
      `}</style>
</div>
  );
};
 
export default Banner;