import React from "react";
import homeBanner from "../../assets/banner.png";
import { TiTick } from "react-icons/ti";
const HomeBanner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 top-[20%] bg:bg-cover bg-no-repeat bg-center md:bg-cover bg-transparent"
        style={{
          backgroundImage: `url(${homeBanner})`,
        }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center bg-[#0D0735] text-white bg-opacity-50">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-4 md:text-4xl lg:text-5xl font-bold uppercase">
            Sell your Mobile Phone for <br className="hidden lg:block" />
            Instant Cash
          </h1>
          <h2 className="text-sm mb-4 md:text-xl lg:text-2xl font-bold uppercase">
            It's A Buyer And Seller Paradise
          </h2>
          <span className="md:space-x-2 space-x-0 text-center text-sm md:text-base">
            {" "}
            <TiTick className="inline text-2xl" />
            Maximum Value
            <TiTick className="inline text-2xl" /> Safe & Hassle-free
            <TiTick className="inline text-2xl" />
            Free Doorstep Pickup
          </span>{" "}
          <br />
          <a href="#brands" className="btn glass my-5 px-8">
            Buy Now
          </a>
        </div>
      </div>

      {/* Overlay for background dimming */}
      <div className="absolute inset-0 bg-[#0D0735] opacity-50 z-0" />
    </div>
  );
};

export default HomeBanner;
