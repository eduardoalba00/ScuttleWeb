import { PlusIcon } from "@heroicons/react/24/solid";

export default function App() {
    const gifBackgroundStyle = {
        backgroundImage: `url(${require("./assets/demo.gif")})`,
        backgroundSize: "cover", // or 'contain' depending on your needs
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        height: "100%", // Adjust as needed
        width: "100%", // Adjust as needed
    };

    return (
        <div className="bg-white font-sans">
            {/* landing section */}
            <div className="px-1 py-4 sm:px-4 flex h-screen">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-3 w-screen">
                    {/* left side */}
                    <div className="grid grid-rows-4 gap-4">
                        {/* top bubble */}
                        <div className="bg-green-200 rounded-xl p-6 row-span-3 flex flex-col">
                            {/* heading */}
                            <div className="text-7xl font-bold">Scuttle🪴</div>
                            {/* subheading */}
                            <div className="text-4xl flex-grow mt-3">
                                A League of Legends discord bot for fetching and
                                displaying match data.
                            </div>
                            {/* footnote */}
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <div>
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
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 bg-gray-100 rounded-xl p-6">
                                <div>
                                    <div className="text-2xl font-bold">
                                        Resources
                                    </div>
                                    <div className="text-sm">
                                        Scroll down this page to view commands,
                                        general info, and contact info.
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    <div>left</div>
                                    <div>right</div>
                                </div>
                            </div>
                            <div className="bg-green-300 rounded-xl flex flex-col justify-center hover:cursor-pointer hover:scale-105">
                                <PlusIcon className="h-32 text-green-700 flex mx-auto" />
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div
                        className="bg-gray-600 rounded-xl"
                        style={gifBackgroundStyle}
                    ></div>
                </div>
            </div>
        </div>
    );
}
