import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { parse } from "next/dist/build/swc";
 
const Grid = ({ blok }) => {

  return (
// column
    
    <div className={`grid auto-rows-min grid-cols-${parseInt(blok.column_num)} gap-x-[6%] gap-y-8 px-24 `} {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
</div>

  );
};
 
export default Grid;