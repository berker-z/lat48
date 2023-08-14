import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="boxxy flex justify-between mx-auto mb-2 px-5 w-2/4 h-auto">
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-orange-300">Lat 48</h1>
        <p>
          Lat48 is a geographically distributed team of finance consultants and
          crypto vets skilled at building and scaling teams, transforming legacy
          processes/systems, and having the strategic vision needed to bring
          high revenue generating products to market.
        </p>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-end py-5 pr-5">
        <Image
          src="/assets/images/hyena.jpg"
          alt="something"
          width={650}
          height={500}
          className="rounded-lg border-2 border-gray-700"
        />
        <button className="bg-slate-200 rounded-md text-gray-900 border border-gray-900 font-semibold hover:border-1 my-2 px-1">
          contact us
        </button>
      </div>
    </div>
  );
};

export default Hero;
