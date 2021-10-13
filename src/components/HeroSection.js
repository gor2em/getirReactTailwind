import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+15",
    FR: "+43",
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    speed:500,
    autoplaySpeed:3500,
    cssEase:"linear"
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent  before:absolute  before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
      </Slider>
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white">
            Dakikalar içinde
            <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-2">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                placeholder=""
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
              <label className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Telefon Numarası"
                  className="h-14 px-4 border-2 border-gray-200 rounded-lg w-full hover:border-primary-brand-color transition-colors focus:border-primary-brand-color"
                />
              </label>
            </div>
            <button className="mt-1 bg-brand-yellow text-sm font-semibold rounded-md text-primary-brand-color h-12 flex items-center justify-center w-full hover:bg-primary-brand-color hover:text-brand-yellow transition-colors">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2"/>
            <button className="bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 h-12 flex items-center justify-center w-full font-semibold">
              Facebook ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
