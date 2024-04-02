function HeroCard() {
  return (
    <div className="bg-green-300 rounded-xl p-6 row-span-3 flex flex-col h-fit">
      {/* heading */}
      <div className="text-5xl sm:text-7xl lg:text-7xl xl:text-7xl font-bold">
        Scuttle🪴
      </div>
      {/* subheading */}
      <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl flex-grow mt-3">
        A League of Legends discord bot for fetching and displaying match data.
      </div>
      {/* footnote */}
      <div className="grid grid-cols-2 gap-2 mt-24 flex items-end">
        <div className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-base mb-0">
          Scuttle periodically retrieves and stores League of Legends match data
          to run detailed statistical comparisons. Each server has its own
          summoners and its own data.
        </div>
        <img
          className="h-36 md:h-44 mx-auto hover:scale-110 hover:cursor-pointer"
          src={require("./assets/scuttle_cropped.png")}
          alt="Scuttle Logo"
        />
      </div>
    </div>
  );
}

export default HeroCard;
