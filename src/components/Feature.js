import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const Feature = ({ blok }) => {
  return (
    <div
      className="p-2 flex flex-col gap-1 w-auto justify-center justify-items-center content-center"
      style={{
        border: blok.border === "true" ? "4px black solid" : "",
        backgroundColor: `${
          blok.background_color ? blok.background_color.value : ""
        }`,
      }}
      {...storyblokEditable(blok)}
    >
      {blok.name ? (
        <h1 className="font-sailors text-xl font-bold text-header bg-sage w-[120%] -ml-5 mt-1">
          {blok.name}
        </h1>
      ) : (
        ""
      )}

      {blok.image.filename ? (
        <img
          className="w-[25%] mx-[37%] h-auto sm:w-[50%] sm:mx-[25%]"
          src={blok.image.filename}
          alt="feature"
        />
      ) : (
        ""
      )}
      {blok.body ? (
        <div className="text-black ">{render(blok.body)}</div>
      ) : (
        ""
      )}

      {blok.button ? (
        <button className="bg-white border-2 border-black w-[50%] self-center m-2">
          <Link
            href={`${blok.button_link.cached_url}?page=${blok.button_link.anchor}`}
          >
            {blok.button_text}
          </Link>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Feature;
