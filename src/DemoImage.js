function DemoImage({ screenSize }) {
  const backgroundStyle = {
    backgroundImage: `url(${require("./assets/demo.gif")})`,
    backgroundSize: "cover",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      {screenSize.width >= 1024 && (
        <div className="bg-gray-600 rounded-xl" style={backgroundStyle}></div>
      )}
    </>
  );
}

export default DemoImage;
