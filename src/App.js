import { useState, useEffect } from "react";
import Footer from "./Footer";
import DemoImage from "./DemoImage";
import HeroCard from "./HeroCard";
import ResourcesCard from "./ResourcesCard";
import AboutCard from "./AboutCard";
import Commands from "./Commands";

export default function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    // Page Container
    <div className="bg-white font-sans">
      {/* Content */}
      <div className="mx-auto px-3 py-2 sm:px-4 sm:py-4 max-w-[2000px]">
        {/* Hero Section */}
        <div className="flex">
          <div className="grid grid-cols-1 gap-x-6 xl:grid-cols-2 xl:gap-x-3">
            {/* Left Column */}
            <div className="grid grid-rows-2 gap-3">
              <HeroCard />
              <ResourcesCard open={open} setOpen={setOpen} />
            </div>
            {/* Right Column */}
            <DemoImage screenSize={screenSize} />
          </div>
        </div>
        <AboutCard />
        <Commands screenSize={screenSize} />
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
