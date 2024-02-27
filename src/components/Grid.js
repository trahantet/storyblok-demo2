import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {

  return (
    <div className={`grid auto-rows-min gap-x-[4%] gap-y-4 px-4 `} style={{gridTemplateColumns:`repeat(${blok.column_num}, 1fr)`}} {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
</div>

  );
};
 
export default Grid;