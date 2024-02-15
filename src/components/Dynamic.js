import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Dynamic({ blok }) {
  const router = useRouter();
  const page = router.query.page;
  // console.log(page);
  return (
    <div
      {...storyblokEditable(blok)}
      // style={{
      //   backgroundImage: `url('${blok.background_image.filename}')`,
      //   backgroundSize: "cover",
      // }}
      className="flex justify-center content-center py-12"
    >
      <div className="w-4/5 ml-500 h-[100%]">
        {/* header */}
        <div className=" mt-8 ml-[10%] w-[80%]">
          {" "}
          <h1 className="font-sailors text-6xl font-bold uppercase text-header leading-[1.6]">
            <span className="bg-sage">{blok.data[0]["data_collection"][0]["header"]}</span>
            {/* <span className="bg-sage">{page}</span> */}
          </h1>
        </div>
        {/*list */}

        <div
          className={`bg-white px-[2%] py-[4%] w-[100%] text-left ${
            blok.border === "yes" ? "border-2 border-black" : "null"
          }`}
        >
          <div className="mb-4 text-lg font-inter leading-loose">
            {/* <span className="bg-sage">
              {blok.data[0]["data_collection"][0]["header"]}
            </span> */}
            {blok.data.map((nestedBlok) =>
              nestedBlok.data_collection[0]["anchor"] === page ? (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                // <>true</>
                
              ) : (
                // console.log(nestedBlok.data_collection[0]["anchor"])
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
