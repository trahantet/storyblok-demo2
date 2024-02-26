import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Section = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}  className="pb-5 -mb-2" style={{
        backgroundImage: `url('${blok.background_image.filename}')`, backgroundSize: "cover"
      }}>
      {blok.items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Section;
