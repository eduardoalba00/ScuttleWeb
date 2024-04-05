import { useState } from "react";

const commands = [
    {
        name: "✅enable",
        description:
            "Sets the main channel to where the bot will send automated messages",
        demoUrl: "./assets/enable_demo.gif",
    },
    {
        name: "📈stats daily {RIOT ID}",
        description: "Displays daily stats for Riot ID specified",
        example: "/stats Username NA1",
        demoUrl: "./assets/stats_demo.gif",
    },
    {
        name: "📈stats weekly {RIOT ID}",
        description: "Displays weekly stats for Riot ID specified",
        example: "/stats weekly Username NA1",
        demoUrl: "./assets/stats_weekly_demo.gif",
    },
    {
        name: "📈stats monthly {RIOT ID}",
        description: "Displays monthly stats for Riot ID specified",
        example: "/stats monthly Username NA1",
        demoUrl: "./assets/stats_monthly_demo.gif",
    },
    {
        name: "💼reports weekly",
        description:
            "Displays weekly stat comparison for all summoners in your Guild",
        demoUrl: "./assets/report_demo.gif",
    },
    {
        name: "💼reports monthly",
        description:
            "Displays monthly stat comparison for all summoners in your Guild",
        demoUrl: "./assets/report_monthly_demo.gif",
    },
    {
        name: "🎮summoners list",
        description: "Displays all summoners in your Guild",
        demoUrl: "./assets/summoners_demo.gif",
    },
    {
        name: "🎮summoners add {RIOT ID}",
        description: "Adds a summoner to your Guild",
        example: "/summoners add Username NA1",
        demoUrl: "./assets/summoners_add_demo.gif",
    },
    {
        name: "🎮summoners remove {RIOT ID}",
        description: "Removes a summoner to your Guild",
        example: "/summoners remove Username NA1",
        demoUrl: "./assets/summoners_remove.gif",
    },
];

function Commands({ screenSize }) {
    const [commandGif, setCommandGif] = useState("./assets/enable_demo.gif");
    const commandsList = (
        <ul className="divide-y divide-gray-800">
            {commands.map((command) => (
                <li key={command.name} className="flex justify-between gap-x-6">
                    <div
                        className="flex min-w-0 gap-x-4 bg-transparent hover:bg-green-200 hover:cursor-pointer rounded-xl p-4 my-4 hover:scale-105 ease-in duration-100"
                        onClick={() => setCommandGif(command.demoUrl)}
                    >
                        <div className="min-w-0 flex-auto">
                            <p className="text-lg font-semibold leading-6 text-gray-900">
                                {command.name}
                            </p>
                            <p
                                className="mt-1 text-base leading-5 text-black"
                                style={{ whiteSpace: "pre-wrap" }}
                            >
                                {command.description}
                            </p>
                            {command.example && (
                                <p className="text-base leading-5 text-black">
                                    <span className="font-bold">Example:</span>{" "}
                                    {command.example}
                                </p>
                            )}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );

    const backgroundStyle = {
        backgroundImage: `url(${require(`${commandGif}`)})`,
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    };

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-x-4"
            id="commands"
        >
            {/* examples */}
            {screenSize.width >= 1024 && (
                <div
                    className="bg-gray-600 rounded-xl"
                    style={backgroundStyle}
                ></div>
            )}
            {/* commands */}
            <div className="bg-green-300 rounded-xl p-6">
                {/* title */}
                <h1 className="text-3xl font-bold">Commands</h1>
                {/* commands list */}
                {commandsList}
            </div>
        </div>
    );
}

export default Commands;
