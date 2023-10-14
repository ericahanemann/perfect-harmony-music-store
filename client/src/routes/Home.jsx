import { useEffect, useState } from "react";

import logo from "../assets/ph-logo.png";
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

import InstrumentsGallery from "../components/InstrumentsGallery";
import LogoSlider from "../components/LogoSlider";

import useProducts from "../hooks/useProducts";

function Home() {
  const { isLoading, specificProductsRequired } = useProducts();

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
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-primary text-secondary z-50">
        <img
          src={logo}
          alt="logo perfect harmony"
          className="motion-reduce:animate-spin"
          width={150}
        />
      </div>
    );
  } else {
    return (
      <div className="pt-6">
        <section className="h-screen flex items-center">
          <div className="w-2/6 flex flex-col justify-around items-center h-2/5">
            <img src={logo} alt="perfect harmony logo" className="h-full" />

            <div className="h-3/5 flex flex-col justify-start items-center w-2/3 gap-6">
              <h1 className="uppercase text-4xl text-secondary font-bold text-center">
                Crafting Melodies, Creating{" "}
                <span className="font-extrabold text-5xl">Memories</span>
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

        <section className="pt-24">
          <LogoSlider />
        </section>

        <section className="flex justify-center items-center">
          <InstrumentsGallery
            specificProductsRequired={specificProductsRequired}
          />
        </section>

        <section className="h-screen flex justify-center items-center">
          <div className="w-4/5 h-full py-24 flex flex-col items-center">
            <h3 className="text-3xl uppercase font-semibold pb-12">categories</h3>

            <div className="flex flex-wrap justify-around h-4/5 w-full mb-10">
              <Link
                to="/"
                className=" relative w-2/5 h-1/2 mb-10 flex justify-center items-center text-primary"
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
                to="/"
                className=" relative w-2/5 h-1/2 mb-10 flex justify-center items-center text-primary"
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
                to="/"
                className=" relative w-2/5 h-1/2 mb-10 flex justify-center items-center text-primary"
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
                to="/"
                className=" relative w-2/5 h-1/2 mb-10 flex justify-center items-center text-primary"
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
            <h3 className="my-20 text-3xl uppercase font-semibold">
              Perfect Harmony: Your Music Destination
            </h3>

            <div className="flex flex-wrap gap-6 items-start justify-center w-full">
              <div className="flex-1 flex flex-col items-center justify-center">
                <PiTruckLight size={100}></PiTruckLight>
                <h4 className="uppercase text-lg mb-2">fast delivery</h4>
                <p className="text-center font-light">
                  Fast delivery worldwide
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <PiGuitarLight size={100}></PiGuitarLight>
                <h4 className="uppercase text-lg mb-2">
                  Wide Variety of Instruments
                </h4>
                <p className="text-center font-light">
                  Explore a diverse range of musical instruments
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <PiWhatsappLogoLight size={100}></PiWhatsappLogoLight>
                <h4 className="uppercase text-lg mb-2">WhatsApp support</h4>
                <p className="text-center font-light">
                  Get support through WhatsApp for all your musical needs.
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <PiMedalLight size={100}></PiMedalLight>
                <h4 className="uppercase text-lg mb-2">Quality Guarantee</h4>
                <p className="text-center font-light">
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
