const Header = ({ blok }) => {
 
  const font = `${blok.font_size}rem`;
  return (
    <div
      className={`w-[100%] mx-4 mx-[1%] py-8 font-sailors font-${
        blok.bold === "true" ? "bold" : "normal"
      } uppercase flex items-center justify-${blok.align} text-center`}
      id={blok.anchor ? `${blok.anchor}` : ""}
    >
      <h1
        style={{
          color: blok.font_color ? blok.font_color.value : "",
          fontSize: font ? font : "2rem",
          backgroundColor: blok.background_color
            ? blok.background_color.value
            : "",
          width: "fit-content",
          paddingLeft: "2%",
          paddingRight: "2%",
        }}
      >
        {blok.header}
      </h1>
    </div>
  );
};

export default Header;
