function AboutCard() {
  return (
    <div
      className="flex flex-col bg-green-200 rounded-xl mt-4 p-6 gap-y-3"
      id="about"
    >
      {/* title */}
      <h2 className="text-3xl font-bold">About</h2>
      {/* Description */}
      <h3 className="text-base">
        Scuttle is a League of Legends discord bot for diplaying summoner match
        data. Some of the stats provided are Average Assists, Average Kill
        Participation, Average Gold per Minute, Average Damage to Champions, and
        many more.
      </h3>

      {/* getting started and how it works */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-y-4 gap-x-4">
        {/* getting started */}
        <div>
          <div className="text-xl font-bold">🚀 Getting Started</div>
          <hr className="h-px my-1 w-[250px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="text-base flex flex-col gap-2">
            <p>1. Add Scuttle to your server.</p>

            <p>
              2. Type <span className="font-bold">/enable</span> in the channel
              you wish to receive automated reports.
            </p>

            <p>
              3. Add summoners to your Guild using{" "}
              <span className="font-bold">
                /summoners add &#123;Name&#125; &#123;#Tag&#125;
              </span>
            </p>

            <p>
              4. Wait until the start of the next hour before Scuttle has
              retreived and updated the data for all the Summoners in your
              Guild.
            </p>
          </div>
        </div>
        {/* how it works */}
        <div>
          <div className="text-xl font-bold">ℹ️ How it Works</div>
          <hr className="h-px my-1 w-[250px] bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="text-base flex flex-col gap-2">
            <p>
              1. Every hour, Scuttle updates the match info for every summoner
              in your guild
            </p>

            <p>
              2. When a new summoner is added, you will need to wait until the
              start of the next hour for their info.
            </p>

            <p>
              3. After this wait period, you will never have to wait to get that
              Summoner's stats again.
            </p>

            <p>
              4. Scuttle can only get the stats for summoners in your Guild.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
