import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function Collect({ blok }) {
    // console.log(blok)
  return (
    <div {...storyblokEditable(blok)}>
      <ul>
        {blok.data_collection.map((data_point) => (
          <li key={data_point.id}>
            {data_point.component === "button" ? (
              <Link
                href={`${data_point.Link.url}`}
                target={`${data_point.Link.target}`}
              >
                {data_point.button_text}{" "}
              </Link>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
