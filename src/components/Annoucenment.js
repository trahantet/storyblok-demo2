import { storyblokEditable, renderRichText } from "@storyblok/react";
import Link from "next/link";
import {
  render,
  NODE_PARAGRAPH,
  NODE_BR,
} from "storyblok-rich-text-react-renderer";

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
        <div className=" mt-8 ml-[10%] w-[80%]">
          {" "}
          <h1 className="font-sailors text-6xl font-bold uppercase text-header leading-[1.6]">
            <span className="bg-sage">{blok.headline}</span>
          </h1>
        </div>
        {/* body text */}
        <div
          className={`bg-white px-[2%] py-[4%] w-[100%] text-left ${
            blok.border === "yes" ? "border-2 border-black" : "null"
          }`}
        >
          <div className="mb-4 text-lg font-inter leading-loose">
            {/* {blok.body.content.map((paragraph) => {
              paragraph.content ? render(paragraph) : <br />
            })} */}

            {render(blok.body, {
              nodeResolvers: {
                [NODE_PARAGRAPH]: (children) => 
                {
                  if (children) {
                    
                      return <p>{children}</p>
                  }

                  return <br/>
                
              }
            }})}
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
                  <Link href={`${unit.Link.url}`} target={`${unit.Link.target}`}>
                    {unit.button_text}
                  </Link>
                </button>
              );
            })}{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
}
