import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Genos } from "next/font/google";

const Grid = ({ blok }) => {
  const desktop = blok.desktop_only ? `hidden sm:grid` : `grid`;
  const columns = `!sm:grid-cols-${blok.column_num}`;

  function getNumofCols() {

    let numCols = blok.column_num;

    return (  "sm:grid-cols-" + numCols + "grid-cols-3"  );
  }

  return (
    <div
      className={`gap-x-[4%] gap-y-4 px-${blok.px}  ${desktop} grid-cols-${blok.column_num}`}
      // 
      // sm:px-12
      // sm:auto-rows-min }
      // items-stretch

      // style={{ gridTemplateColumns: `repeat(${blok.column_num}, 1fr)` }}
      style={{ gridTemplateColumns: `${getNumofCols()}` }}
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
