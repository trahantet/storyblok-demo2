import { storyblokEditable, renderRichText } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

export default function Announcement({ blok }) {
  // const renderedRichText = renderRichText(blok.body);

  return (
    <div
      {...storyblokEditable(blok)}
      style={{
        backgroundImage: `url('${blok.background_image.filename}')`,
        backgroundSize: "cover",
      }}
      className="flex justify-center content-center py-12"
    >
      <div className="w-4/5 ml-500 h-[100%]">
        {/* header */}
        <div className="bg-sage mt-8 ml-[10%] w-[80%]">
          {" "}
          <h1 className="font-sailors text-6xl font-bold uppercase text-header leading-[64px]">
            {blok.headline}
          </h1>
        </div>
        {/* body text */}
        <div
          className={`bg-white px-4 py-4 w-[80%] ml-[10%] text-left ${
            blok.border === "yes" ? "border-2 border-black" : "null"
          }`}
        >
          <div className="mb-4 text-lg font-inter leading-loose">
            {render(blok.body)}
          </div>
        </div>
        {/* buttons */}
        {blok.buttons ? (
          <div className="flex justify-evenly content-center w-[70%] ml-[15%] mt-[4%]">
            {blok.buttons.map((unit) => {
              return (
                <button
                  key={unit.i}
                  className="bg-white border-2 border-black w-2/12 h-12"
                >
                  {unit.button_text}
                </button>
              );
            })}{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
}
