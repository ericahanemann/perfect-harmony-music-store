import { useEffect, useState } from "react";

import logo from "../assets/ph-icon.png";
import girlPlayingGuitar from "../assets/playing-guitar.jpg";
import manPlayingGuitar from "../assets/playing-guitar2.jpg";
import manPlayingBass from "../assets/playing-bass.jpg";
import manPlayingSaxophone from "../assets/playing-saxophone.jpg";
import girlPlayingSaxophone from "../assets/playing-saxophone2.jpg";
import girlPlayingDrums from "../assets/playing-drums.jpg";
import guitars from "../assets/guitars.jpg";
import drums from "../assets/drums.jpg";
import saxophone from "../assets/saxophone.jpg";
import keyboard from "../assets/keyboard.jpg";

import { Link } from "react-router-dom";
import {
  PiTruckLight,
  PiGuitarLight,
  PiWhatsappLogoLight,
  PiMedalLight,
} from "react-icons/pi";

import LoadingScreen from "../components/LoadingScreen";
import InstrumentsGallery from "../components/InstrumentsGallery";
import LogoSlider from "../components/LogoSlider";

import useProducts from "../hooks/useProducts";

function Home() {
  const { isLoading, specificProductsRequired } = useProducts();

  const homeBgCollection = [
    manPlayingGuitar,
    manPlayingBass,
    manPlayingSaxophone,
    girlPlayingGuitar,
    girlPlayingDrums,
    girlPlayingSaxophone,
  ];

  const [activeHomeBgIndex, setActiveHomeBgIndex] = useState(0);
  const homeImgBg = {
    backgroundImage: `url(${homeBgCollection[activeHomeBgIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const homeBgTimer = setTimeout(() => {
      if (activeHomeBgIndex === homeBgCollection.length - 1) {
        setActiveHomeBgIndex(0);
      } else {
        setActiveHomeBgIndex(activeHomeBgIndex + 1);
      }
    }, 8000);

    return () => clearTimeout(homeBgTimer);
  }, [activeHomeBgIndex, homeBgCollection.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeHomeBgIndex === homeBgCollection.length - 1) {
        setActiveHomeBgIndex(0);
      } else {
        setActiveHomeBgIndex(activeHomeBgIndex + 1);
      }
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="w-screen overflow-x-hidden">
        <section className="relative h-screen flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="absolute inset-0 z-20 flex flex-col justify-around items-center bg-primary opacity-70 lg:hidden"></div>
          <div className="absolute inset-x-0 top-36 bottom-0 z-20 flex flex-col justify-center items-center lg:static lg:mt-16 lg:w-2/6 lg:mx-auto">
            <img
              src={logo}
              alt="perfect harmony logo"
              className="h-60 lg:h-72"
            />

            <div className="h-3/5 flex flex-col justify-start items-center w-2/3 gap-6 md:justify-center">
              <h1 className="uppercase text-2xl text-secondary font-bold text-center md:text-4xl">
                Crafting Melodies, Creating{" "}
                <span className="font-extrabold text-5xl">Memories</span>
              </h1>
              <p className="md:text-lg text-center">
                Music is much more than just sounds. It&apos;s a form of
                expression, a way to share feelings, and build special moments.
                Our mission is to help you create unforgettable musical memories
                with <strong>the finest instruments in the market</strong>!
              </p>
            </div>
          </div>
          <div
            className="absolute z-10 inset-0 duration-300 lg:static lg:h-screen lg:w-3/6 xl:w-4/6"
            style={homeImgBg}
          ></div>
        </section>

        <section className="mt-32 w-screen">
          <LogoSlider />
        </section>

        <section className="h-screen mt-32 flex justify-center items-center">
          <InstrumentsGallery
            specificProductsRequired={specificProductsRequired}
          />
        </section>

        <section className="h-screen flex justify-center items-center">
          <div className="w-4/5 h-full py-24 flex flex-col items-center">
            <h3 className="text-lg uppercase font-semibold pb-12 md:text-2xl lg:text-3xl">
              categories
            </h3>

            <div className="flex flex-col justify-around w-screen px-20 mb-10 h-4/5 lg:flex-row lg:flex-wrap lg:w-full lg:px-0">
              <Link
                to="/products/percussion"
                className="relative w-full h-5/6 mb-6 flex justify-center items-center text-primary lg:w-2/5 lg:h-1/2 lg:mb-10"
                style={{
                  backgroundImage: `url(${drums})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70 flex justify-center items-center">
                  <p className="uppercase font-semibold">percussion</p>
                </div>
                <p className="uppercase font-semibold">percussion</p>
              </Link>
              <Link
                to="/products/stringed"
                className="relative w-full h-5/6 mb-6 flex justify-center items-center text-primary lg:w-2/5 lg:h-1/2 lg:mb-10"
                style={{
                  backgroundImage: `url(${guitars})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70 flex justify-center items-center">
                  <p className="uppercase font-semibold">stringed</p>
                </div>
                <p className="uppercase font-semibold">stringed</p>
              </Link>
              <Link
                to="/products/wind"
                className="relative w-full h-5/6 mb-6 flex justify-center items-center text-primary lg:w-2/5 lg:h-1/2 lg:mb-10"
                style={{
                  backgroundImage: `url(${saxophone})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70 flex justify-center items-center">
                  <p className="uppercase font-semibold">wind</p>
                </div>
                <p className="uppercase font-semibold">wind</p>
              </Link>
              <Link
                to="/products/keyboard"
                className="relative w-full h-5/6 mb-6 flex justify-center items-center text-primary lg:w-2/5 lg:h-1/2 lg:mb-10"
                style={{
                  backgroundImage: `url(${keyboard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70 flex justify-center items-center">
                  <p className="uppercase font-semibold">keyboard</p>
                </div>
                <p className="uppercase font-semibold">keyboard</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center bg-highlights pb-20">
          <div className="flex flex-col w-4/5 items-center">
            <h3 className="my-20 text-lg text-center uppercase font-semibold md:text-2xl lg:text-3xl">
              Perfect Harmony: Your Music Destination
            </h3>

            <div className="flex flex-wrap gap-12 items-start justify-center w-full md:gap-6">
              <div className="flex flex-col items-center justify-center w-screen md:flex-1">
                <PiTruckLight size={100}></PiTruckLight>
                <h4 className="uppercase text-center mb-2 px-8 md:px-0 lg:text-lg">
                  fast delivery
                </h4>
                <p className="text-center text-sm font-light px-8 md:px-0">
                  Fast delivery worldwide
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-screen md:flex-1">
                <PiGuitarLight size={100}></PiGuitarLight>
                <h4 className="uppercase text-center mb-2 px-8 md:px-0 lg:text-lg">
                  Wide Variety of Instruments
                </h4>
                <p className="text-center text-sm font-light px-8 md:px-0">
                  Explore a diverse range of musical instruments
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-screen md:flex-1">
                <PiWhatsappLogoLight size={100}></PiWhatsappLogoLight>
                <h4 className="uppercase text-center mb-2 px-8 md:px-0 lg:text-lg">
                  WhatsApp support
                </h4>
                <p className="text-center text-sm font-light px-8 md:px-0">
                  Get support through WhatsApp for all your musical needs.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center w-screen md:flex-1">
                <PiMedalLight size={100}></PiMedalLight>
                <h4 className="uppercase text-center mb-2 px-8 md:px-0 lg:text-lg">
                  Quality Guarantee
                </h4>
                <p className="text-center text-sm font-light px-8 md:px-0">
                  Quality assurance for all products
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
