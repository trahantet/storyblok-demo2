import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const Feature = ({ blok }) => {
  return (
    <div
      className={`p-2`}
      style={{
        border: blok.border === "true" ? "4px black solid" : "",
        backgroundColor: `${
          blok.background_color ? blok.background_color.value : ""
        }`,
      }}
      {...storyblokEditable(blok)}
    >
      {blok.name ? (
        <h1 className="font-sailors text-xl font-bold  text-header bg-sage w-[120%] -ml-4 mt-1">
          {blok.name}
        </h1>
      ) : (
        ""
      )}

      <div className="flex-column justify-start">
        {blok.image.filename ? (
          <img className="" src={blok.image.filename} alt="feature" />
        ) : (
          ""
        )}

        <div className="text-black">{render(blok.body)}</div>
      </div>
      {blok.button ? (
        <button className="bg-white border-2 border-black w-[50%] mt-auto">
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
