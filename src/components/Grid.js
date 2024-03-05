import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Genos } from "next/font/google";

const Grid = ({ blok }) => {
  return (
    <div
      className="grid"
  
   

      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(${blok.column_num}, 1fr);
          column-gap: 4%;
          row-gap: 1rem;
          padding: 0 ${blok.px}rem
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
            display: ${blok.desktop_only ? "none" : "grid"};
            
          }
        }
      `}</style>
    </div>
  );
};

export default Grid;
// still working out some kinks
