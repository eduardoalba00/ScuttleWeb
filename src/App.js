import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const gifBackgroundStyle = {
    backgroundImage: `url(${require("./assets/demo.gif")})`,
    backgroundSize: "cover", // or 'contain' depending on your needs
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    height: "100%", // Adjust as needed
    width: "100%", // Adjust as needed
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    console.log(screenSize);

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    <div className="bg-white font-sans">
      {/* content */}
      <div className="mx-auto px-3 py-2 sm:px-4 sm:py-4 max-w-[2000px]">
        {/* landing section */}
        <div className="flex">
          <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 xl:gap-x-3">
            {/* left side */}
            <div className="grid grid-rows-2 gap-3">
              {/* top bubble */}
              <div className="bg-green-300 rounded-xl p-6 row-span-3 flex flex-col h-fit">
                {/* heading */}``
                <div className="text-5xl sm:text-7xl lg:text-7xl xl:text-7xl font-bold">
                  Scuttle🪴
                </div>
                {/* subheading */}
                <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl flex-grow mt-3">
                  A League of Legends discord bot for fetching and displaying
                  match data.
                </div>
                {/* footnote */}
                <div className="grid grid-cols-2 gap-2 mt-24 flex items-end">
                  <div className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-base mb-0">
                    Scuttle periodically retrieves and stores League of Legends
                    match data to run detailed statistical comparisons. Each
                    server has its own summoners and its own data.
                  </div>
                  <img
                    className="h-36 md:h-44 mx-auto hover:scale-110 hover:cursor-pointer"
                    src={require("./assets/scuttle_cropped.png")}
                    alt="Scuttle Logo"
                  />
                </div>
              </div>
              {/* bottom bubble */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="col-span-1 sm:col-span-2 bg-gray-100 rounded-xl p-6">
                  <div>
                    <div className="text-2xl font-bold lg:text-4xl">
                      Resources
                    </div>
                    <div className="text-[12px] sm:text-b md:text-base lg:text-lg">
                      Scroll down this page to view commands, general info, and
                      contact info.
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-sm sm:text-base md:text-base lg:text-lg">
                    <div>
                      <ul>
                        <li key="about">
                          <a href="#about" className="hover:font-bold">
                            About
                          </a>
                        </li>
                        <li key="commands">
                          <a href="#commands" className="hover:font-bold">
                            Commands
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li key="Contact">
                          <a href="#contact" className="hover:font-bold">
                            Contact
                          </a>
                        </li>
                        <li key="add_bot">
                          <a href="#commands" className="hover:font-bold">
                            Add Bot
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-green-300 rounded-xl flex flex-col justify-center hover:cursor-pointer hover:scale-105">
                  <PlusIcon className="h-32 text-green-700 flex mx-auto" />
                </div>
              </div>
            </div>
            {/* right side */}
            {screenSize.width >= 1024 && (
              <div
                className="bg-gray-600 rounded-xl"
                style={gifBackgroundStyle}
              ></div>
            )}
          </div>
        </div>
        {/* About section */}
        <div className="flex flex-col bg-green-200 rounded-xl mt-4 p-6 gap-y-3">
          {/* title */}
          <div className="text-3xl font-bold">About</div>
          {/* Description */}
          <div className="text-base">
            Scuttle is a League of Legends discord bot for diplaying summoner
            match data. Some of the stats provided are Average Assists, Average
            Kill Participation, Average Gold per Minute, Average Damage to
            Champions, and many more.
          </div>

          {/* getting started and how it works */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-y-4 gap-x-4">
            {/* getting started */}
            <div>
              <div className="text-xl font-bold">Getting Started</div>
              <hr className="h-px my-1 w-[250px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="text-base flex flex-col gap-2">
                <p>1. Add Scuttle to your server.</p>

                <p>
                  2. Type <span className="font-bold">!enable</span> in the
                  channel you wish to receive automated reports.
                </p>

                <p>
                  3. Add summoners to your Guild using{" "}
                  <span className="font-bold">
                    !summoners add &#123;Name&#125; #&#123;Tag&#125;
                  </span>
                </p>

                <p>
                  4. Wait 1-2 hours before Scuttle has retreived and updated the
                  data for all the Summoners in your Guild.
                </p>
              </div>
            </div>
            {/* how it works */}
            <div>
              <div className="text-xl font-bold">How it Works</div>
              <hr className="h-px my-1 w-[250px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="text-base flex flex-col gap-2">
                <p>
                  1. Every hour, Scuttle updates the match info for every
                  summoner in your guild
                </p>

                <p>
                  2. When a new summoner is added, you will need to wait about
                  1-2 hours for their info.
                </p>

                <p>
                  3. After this wait period, you will never have to wait to get
                  that Summoner's stats again.
                </p>

                <p>
                  4. Scuttle can only get the stats for summoners in your Guild.
                </p>
              </div>
            </div>
          </div>

          {/* demo gif */}
          {screenSize.width < 1280 && (
            <div
              className="bg-gray-600 rounded-xl py-[200px] mt-4 md:py-[300px] lg:py-[350px]"
              style={gifBackgroundStyle}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
