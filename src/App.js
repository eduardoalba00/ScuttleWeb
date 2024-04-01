export default function Example() {
    return (
        <div className="bg-white font-sans">
            {/* landing section */}
            <div className="mx-auto px-4 py-12 sm:px-6 flex h-screen">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8 w-screen">
                    {/* left side */}
                    <div className="grid grid-rows-4 gap-4">
                        {/* top bubble */}
                        <div className="bg-green-200 rounded-xl p-6 row-span-3 flex flex-col">
                            {/* heading */}
                            <div className="text-7xl">Scuttle 🪴</div>
                            {/* subheading */}
                            <div className="text-4xl flex-grow">
                                A League of Legends discord bot for fetching and
                                displaying match data.
                            </div>
                            {/* footnote */}
                            <div className="w-1/2">
                                Scuttle periodically retrieves and stores League
                                of Legends match data to run detailed
                                statistical comparisons. Each server has its own
                                summoners and its own data.
                            </div>
                        </div>
                        {/* bottom bubble */}
                        <div className="bg-gray-100 rounded-xl p-6">
                            bottom bubble
                        </div>
                    </div>
                    {/* right side */}
                    <div className="bg-gray-600 rounded-xl p-4">right side</div>
                </div>
            </div>
        </div>
    );
}
