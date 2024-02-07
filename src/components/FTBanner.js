import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const FtBanner = ({ blok }) => {
  console.log(blok);
  return (
    <div
      className={`column feature border-4 border-black mb-8 mx-12`}
      style={{
        backgroundColor: `${
          blok.background_color ? blok.background_color.value : ""
        }`,
      }}
      {...storyblokEditable(blok)}
    >
      <h1 className="font-sailors text-xl font-bold text-header bg-sage w-[120%] ml-4 -mt-4 w-[fit-content]">
        {blok.header}
      </h1>
      {/* box contents  */}
      <div className="flex flex-row align-center">
        <div className="text-left px-8 py-4">{render(blok.text)}</div>
        <div className="flex flex-row h-[100%] justify-end gap-10 px-4">
          {blok.images.map((image) =>
            image.filename ? (
              <img
                key={image._uid}
                className="h-[20%] w-[20%]"
                src={image.filename}
                alt="feature"
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FtBanner;
