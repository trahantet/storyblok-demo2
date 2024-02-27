const Header = ({ blok }) => {

  return (
    <div
      className={`mx-4 mx-[1%] py-8 font-sailors text-3xl font-${
        blok.bold === "true" ? "bold" : "normal"
      } uppercase flex flex-col justify-center text-${blok.align}`}

    id={blok.anchor ? `${blok.anchor}` : ""}
    >
      <h1
    //   className="text-right"
        style={{
          color: blok.font_color ? blok.font_color.value : "",
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
