import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {
  
  const col_num = blok.column_num ? parseInt(blok.column_num) : 4
  return (
// column
    
    <div className={`grid auto-rows-min grid-cols-${col_num} gap-x-[6%] gap-y-8 px-24 `} {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
</div>

  );
};
 
export default Grid;