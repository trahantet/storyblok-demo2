import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
 
  return (
    <div {...storyblokEditable(blok)}>
      <div className="flex">
        <div className={`w-30% bg-col text-left`} style={{backgroundColor:`${blok.background_color.value}`}}>
          <h1 className="font-sailors text-6xl font-bold text-header uppercase">global day to destigmatize abortions</h1>
          <h3>Abortions are a normal part of our reproductive journeys. </h3>
          <p>
            Together, we are building a world where everyone is free to access
            their fundamental right to abortion care with love, care, and
            support.
          </p>
        </div>
        <div className="w-30% -ml-300">
          <img src={blok.background_image.filename} />
        </div>
        <div className="w-60%">
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
