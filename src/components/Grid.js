import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {

  return (
    <div className={`grid auto-rows-min gap-x-[6%] gap-y-8 px-24 `} style={{gridTemplateColumns:`repeat(${blok.column_num}, 1fr)`}} {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
</div>

  );
};
 
export default Grid;