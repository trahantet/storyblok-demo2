import { storyblokEditable } from "@storyblok/react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";

const FtBanner = ({ blok }) => {

  return (
    <div
      className={`column feature border-4 border-black my-[2%] mx-12 `}
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
      <div className="flex flex-row align-center justify-between basis-auto">
        <div className="text-left w-[100%] px-8 py-4 grow">{render(blok.text, {
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
                return <a href={href}>{children}</a>;
            }
        },
        })}</div>
        
          {blok.images.map((image) =>
            image.filename ? (
              <div key={image._uid} className="flex flex-row w-[80%] justify-end gap-4 px-4 shrink ">
              <img
                
                className="w-[20%] h-[20%] object-fill h-auto grow align-middle"
                src={image.filename}
                alt="feature"
              /></div>
            ) : (
              ""
            )
          )}
        
      </div>
    </div>
  );
};

export default FtBanner;

