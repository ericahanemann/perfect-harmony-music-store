import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import charvel from "../assets/logo-charvel.png";
import dw from "../assets/logo-dw.png";
import encore from "../assets/logo-encore-by-remo.png";
import evh from "../assets/logo-evh.png";
import fender from "../assets/logo-fender.png";
import gibson from "../assets/logo-gibson.png";
import gretsch from "../assets/logo-gretsch.png";
import jackson from "../assets/logo-jackson.png";
import kala from "../assets/logo-kala.png";
import korg from "../assets/logo-korg.png";
import marshall from "../assets/logo-marshall.png";
import nutekt from "../assets/logo-nutekt.png";
import remo from "../assets/logo-remo.png";
import sabian from "../assets/logo-sabian.png";
import sakae from "../assets/logo-sakae.png";
import squier from "../assets/logo-squier.png";
import stagg from "../assets/logo-stagg.png";

function LogoSlider() {
  const logos = [
    charvel,
    dw,
    encore,
    evh,
    fender,
    gibson,
    gretsch,
    jackson,
    kala,
    korg,
    marshall,
    nutekt,
    remo,
    sabian,
    sakae,
    squier,
    stagg,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleLogos = logos.slice(currentIndex, currentIndex + 6);

  const nextSlide = () => {
    if (currentIndex < logos.length - visibleLogos.length) {
      setCurrentIndex((currentIndex + 1) % logos.length);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex - 1 + logos.length) % logos.length);
    }
  };

  return (
    <div className="flex justify-around items-center w-4/5 m-auto">
      <button onClick={prevSlide}>
        <BsChevronLeft size={35} className="text-highlights font-extrabold" />
      </button>
      <div className="flex justify-between overflow-x-hidden w-11/12">
        {visibleLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`brand logo`}
            className="w-auto h-20"
          />
        ))}
      </div>
      <button onClick={nextSlide}>
        <BsChevronRight size={35} className="text-highlights font-extrabold" />
      </button>
    </div>
  );
}

export default LogoSlider;
