import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function App() {
    const gifBackgroundStyle = {
        backgroundImage: `url(${require("./assets/demo.gif")})`,
        backgroundSize: "cover", // or 'contain' depending on your needs
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        height: "100%", // Adjust as needed
        width: "100%", // Adjust as needed
    };

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Media query for screens wider than 1280px
        const mediaQuery = window.matchMedia("(min-width: 1280px)");
        setIsLargeScreen(mediaQuery.matches);

        const handler = (event) => setIsLargeScreen(event.matches);
        // Use addEventListener for compatibility with newer standards
        mediaQuery.addEventListener("change", handler);

        // Cleanup function to remove the event listener
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return (
        <div className="bg-white font-sans">
            {/* landing section */}
            <div className="px-3 py-2 sm:px-4 sm:py-4 flex lg:h-screen">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 xl:grid-cols-2 xl:gap-x-3 w-screen">
                    {/* left side */}
                    <div className="grid grid-rows-4 gap-4">
                        {/* top bubble */}
                        <div className="bg-green-200 sm:bg-red-200 md:bg-blue-200 lg:bg-yellow-200 xl:bg-purple-200 rounded-xl p-6 row-span-3 flex flex-col">
                            {/* heading */}
                            <div className="text-5xl sm:text-7xl lg:text-5xl xl:text-7xl font-bold">
                                Scuttle🪴
                            </div>
                            {/* subheading */}
                            <div className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl flex-grow mt-3">
                                A League of Legends discord bot for fetching and
                                displaying match data.
                            </div>
                            {/* footnote */}
                            <div className="grid grid-cols-2 gap-2">
                                <div className="text-sm sm:text-md md:text-lg lg:text-sm xl:text-base">
                                    Scuttle periodically retrieves and stores
                                    League of Legends match data to run detailed
                                    statistical comparisons. Each server has its
                                    own summoners and its own data.
                                </div>
                                <img
                                    className="h-36 mx-auto hover:scale-110 hover:cursor-pointer"
                                    src={require("./assets/scuttle_cropped.png")}
                                    alt="Scuttle Logo"
                                />
                            </div>
                        </div>
                        {/* bottom bubble */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="col-span-1 sm:col-span-2 bg-gray-100 rounded-xl p-6">
                                <div>
                                    <div className="text-2xl font-bold">
                                        Resources
                                    </div>
                                    <div className="text-[10px] sm:text-sm">
                                        Scroll down this page to view commands,
                                        general info, and contact info.
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2 text-sm">
                                    <div>
                                        <ul>
                                            <li key="about">
                                                <a
                                                    href="#about"
                                                    className="hover:font-bold"
                                                >
                                                    About
                                                </a>
                                            </li>
                                            <li key="commands">
                                                <a
                                                    href="#commands"
                                                    className="hover:font-bold"
                                                >
                                                    Commands
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li key="Contact">
                                                <a
                                                    href="#contact"
                                                    className="hover:font-bold"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                            <li key="add_bot">
                                                <a
                                                    href="#commands"
                                                    className="hover:font-bold"
                                                >
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
                    {isLargeScreen && (
                        <div
                            className="bg-gray-600 rounded-xl"
                            style={gifBackgroundStyle}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}
