import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.scuttle.gg"
    : "http://localhost:4000";

function HeroCard() {
  const [numGuilds, setNumGuilds] = useState(0);
  const [numCommands, setNumCommands] = useState(0);

  useEffect(() => {
    async function getAnalytics() {
      const guildsResponse = await axios.get(`${apiUrl}/guilds`);
      const commandsResponse = await axios.get(`${apiUrl}/commands`);

      console.log(guildsResponse);

      setNumGuilds(guildsResponse.data.numGuilds);
      setNumCommands(commandsResponse.data.numCommandsSent);
    }
    getAnalytics();
  }, []);

  return (
    <div className="bg-green-300 rounded-xl p-6 row-span-3 flex flex-col h-fit">
      {/* heading */}
      <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-7xl font-bold">
        Scuttle🪴
      </h1>
      {/* subheading */}
      <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-4xl flex-grow mt-3">
        A League of Legends discord bot for fetching and displaying match data.
      </h2>
      {/* Analytics */}
      <div className="flex gap-6 mt-6">
        <div className="rounded-xl bg-green-100 p-4 font-bold w-fit">
          <div>Guilds: {numGuilds}</div>
        </div>
        <div className="rounded-xl bg-green-100 p-4 font-bold w-fit">
          <div>Commands Sent: {numCommands}</div>
        </div>
      </div>
      {/* footnote */}
      <div className="grid grid-cols-2 gap-2 mt-24 flex items-end">
        <p className="text-sm sm:text-lg md:text-lg lg:text-xl xl:text-base mb-0">
          Scuttle periodically retrieves and stores League of Legends match data
          to run detailed statistical comparisons. Each server has its own
          summoners and its own data.
        </p>
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
