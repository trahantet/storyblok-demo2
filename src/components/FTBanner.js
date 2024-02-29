import { storyblokEditable } from "@storyblok/react";
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer";

const FtBanner = ({ blok }) => {
  return (
    <div
      className={`flex flex-col feature border-4 border-black my-[2%] mx-12 `}
      style={{
        backgroundColor: `${
          blok.background_color ? blok.background_color.value : ""
        }`,
      }}
      {...storyblokEditable(blok)}
    >
      <h1 className="font-sailors text-xl font-bold text-header bg-sage ml-4 -mt-4 w-[fit-content]">
        {blok.header}
      </h1>
      {/* box contents  */}
      <div className="flex flex-row justify-center gap-4 p-6">
        <div className="text-left m-auto">
          {render(blok.text, {
            markResolvers: {
              [MARK_LINK]: (children, props) => {
                const { linktype, href } = props;
                if (linktype === "email") {
                  // Email links: add `mailto:` scheme and map to <a>
                  return <a href={`mailto:${href}`}>{children}</a>;
                }
                if (linktype === "url") {
                  // Email links: add `mailto:` scheme and map to <a>
                 
                    // <a className="color:red" href={href} target="_blank">
                    //   {children}
                    // </a>
                    if (href.match(/^(https?:)?\/\//)) {
                      // External links: map to <a>
                      return <a href={href} target="_blank">{children}</a>;
                  
                  
                }
                return <a href={'http://'+ href} target="_blank">{children}</a>;

              }
                // Internal links: map to <Link>
                return <a href={href}>{children}</a>;
              },
            },
          })}
        </div>

        {blok.images.map((image) =>
          image.filename ? (
            <div key={image._uid} className="max-w-96">
              <img
                key={image._uid}
                className=""
                src={image.filename}
                alt="feature"
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default FtBanner;
