import { storyblokEditable, renderRichText } from "@storyblok/react";
import Link from "next/link";
import {
  render,
  NODE_PARAGRAPH,
  MARK_LINK,
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
        <div className="sm:mt-8 sm:ml-[10%] sm:w-[80%]">
          {" "}
          <h1 className="font-sailors text-3xl font-bold uppercase text-header leading-[1.6] sm:text-4xl sm:text-5xl ">
            <span className="bg-sage">{blok.headline}</span>
          </h1>
        </div>
        {/* body text */}
        <div
          className={`bg-white px-[2%] py-[4%] w-[100%] text-left ${
            blok.border === "yes" ? "border-2 border-black" : "null"
          }`}
        >
          <div className="mb-4 sm:text-lg font-inter leading-loose text-center sm:text-left">
            {/* {blok.body.content.map((paragraph) => {
              paragraph.content ? render(paragraph) : <br />
            })} */}

            {render(blok.body, {
              markResolvers: {
                [MARK_LINK]: (children, props) => {
                    const { linktype, href } = props;
                    if (linktype === 'email') {
                        // Email links: add `mailto:` scheme and map to <a>
                        return <a href={`mailto:${href}`}>{children}</a>;
                    }
                    if (linktype === 'url') {
                      // Email links: add `mailto:` scheme and map to <a>
                      return <a className="color:red"href={href} target="_blank">{children}</a>;
                  }
                    // if (href.match(/^(https?:)?\/\//)) {
                    //     // External links: map to <a>
                    //     return <a href={href} target="_blank">{children}</a>;
                    // }
                    // Internal links: map to <Link>
                    return <Link href={href}>{children}</Link>;
                }
            },
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
          <div className="flex flex-col sm:flex-row justify-evenly content-center w-[70%] ml-[15%] mt-[4%]">
            {blok.buttons.map((unit) => {
              console.log(unit)
              return (
                <button
                  key={unit._uid}
                  className="bg-white border-2 border-black my-2 sm:w-2/12 h-12"
                >
                  <Link href={unit.Link.url ? `${unit.Link.url}` : `${unit.Link.cached_url}`} target={unit.Link.target ? `${unit.Link.target}` : "_self"}>
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
