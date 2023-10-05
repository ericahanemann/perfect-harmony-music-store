import girlPlayingGuitar from "../assets/playing-guitar.jpg";
import manPlayingGuitar from "../assets/playing-guitar2.jpg";
import manPlayingBass from "../assets/playing-bass.jpg";
import manPlayingSaxophone from "../assets/playing-saxophone.jpg";
import girlPlayingSaxophone from "../assets/playing-saxophone2.jpg";
import girlPlayingDrums from "../assets/playing-drums.jpg";
import logo from "../assets/ph-logo.png";
import { useEffect, useState } from "react";

function Home() {
  const homeBgCollection = [
    manPlayingBass,
    girlPlayingGuitar,
    manPlayingSaxophone,
    girlPlayingDrums,
    manPlayingGuitar,
    girlPlayingSaxophone,
  ];

  const [activeHomeBgIndex, setActiveHomeBgIndex] = useState(0);
  const homeImgBg = {
    backgroundImage: `url(${homeBgCollection[activeHomeBgIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    const homeBgTimer = setTimeout(() => {
      if (activeHomeBgIndex == homeBgCollection.length - 1) {
        setActiveHomeBgIndex(0);
      } else {
        setActiveHomeBgIndex(activeHomeBgIndex + 1);
      }
    }, 8000);

    return () => clearTimeout(homeBgTimer);
  }, [activeHomeBgIndex, homeBgCollection.length]);

  return (
    <div className="pt-6">
      <section className="h-screen flex items-center">
        <div className="w-2/6 flex flex-col justify-around items-center h-2/5">
          <img src={logo} alt="perfect harmony logo" className="h-full" />

          <div className="h-3/5 flex flex-col justify-start items-center w-2/3 gap-6">
            <h1 className="uppercase text-4xl text-secondary font-bold text-center">
              Crafting Melodies, Creating{" "}
              <spanc className="font-extrabold text-5xl">Memories</spanc>
            </h1>
            <p className="text-lg text-center">
              Music is much more than just sounds. It&apos;s a form of
              expression, a way to share feelings, and build special moments.
              Our mission is to help you create unforgettable musical memories
              with <strong>the finest instruments in the market</strong>!
            </p>
          </div>
        </div>
        <div className="w-4/6 h-screen duration-300" style={homeImgBg}></div>
      </section>
    </div>
  );
}

export default Home;
