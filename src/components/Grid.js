import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  const desktop = blok.desktop_only ? `hidden sm:grid sm:grid-cols-${blok.column_num}` : `grid sm:grid-cols-${blok.column_num}`

  return (
    <div
      className={`auto-rows-min gap-x-[4%] gap-y-4 px-${blok.px} sm:px-12 items-stretch ${desktop} `}
      // style={{ gridTemplateColumns: `repeat(${blok.column_num}, 1fr)` }}
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
// still working out some kinks
