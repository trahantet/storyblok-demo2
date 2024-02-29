import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const Hero = ({ blok }) => {
  const font = `${blok.font_size}vw`;
  return (
    <div {...storyblokEditable(blok)} className="mt-0">
      <div className="flex flex-col md:flex-row">
        <div
          className={`sm:w-[40vw] bg-col sm:text-left py-1 px-[2%]`}
          style={{ backgroundColor: `${blok.background_color.value}` }}
        >
          <h1 className="font-sailors font-bold text-header uppercase z-50 sm:align-left sm:pr-[20%] leading-[1.6] text-2xl" style={{ fontSize: font ? font : "4.5vw"}}>
            <span className="bg-sage">{blok.headline}</span>
          </h1>
          <h3 className="font-bold">{blok.subheadline}</h3>
          <h3 className="font-light">{blok.body_text}</h3>
          {blok.button ? (
            <div className="flex justify-evenly align-center content-start gap-4 w-[100%]">
              {blok.button.map((unit) => {
                return (
                  <button
                    key={unit._uid}
                    className="bg-white border-2 border-black w-[50%] h-12 "
                  >
                    <Link href={`${unit.Link.url}`} target="_blank">
                      {unit.button_text}
                    </Link>
                  </button>
                );
              })}{" "}
            </div>
          ) : null}
        </div>

        <div className="sm:w-[60vw] sm:px-[2%]">
          <img src={blok.hero_image.filename}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// className={`min-h-[500px]
// relative
// flex
// items-start
// p-9
// my-6
// mx-2
// rounded-[5px]
// overflow-hidden
// font-inter
// "bg-[url('/img/hero-pattern.svg')]"
// `}
//   style={{
//     backgroundColor:
//       blok.background === "color" ? `${blok.background_color.value}` : null,
//     width: `${blok.width}vw`,
//     float: blok.align === "center" ? "null" : `${blok.align}`,
//     alignItems: blok.align === "center" ? "center" : "null",
//   }}
// >
//   {console.log(blok)}
//   <div className="relative z-10 text-left">
//     <div className="text-6xl text-black font-semibold mb-3 font-sailors text-header uppercase bg-sage">
//       {" "}
//       <h1>{blok.headline}</h1>
//     </div>
//     <h2 className="text-2xl text-black font-bold mb-12 text-header">
//       {blok.subheadline}
//     </h2>
//     <p className="text-xl text-header">{blok.body_text}</p>
//   </div>
//   {/* {blok.background === "img" ? */}
//   <img
//     src={blok.background_image.filename}
//     alt={blok.background_image.alt}
//     className="absolute top-0 left-0 z-0 w-full h-full object-cover"
//   />
//   {/* : ""} */}
// </div
