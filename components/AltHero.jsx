import React from "react";
import Image from "next/image";
const AltHero = () => {
  return (
    <div className="flex justify-start space-x-5 mb-2  mx-auto  h-auto">
      <div className="boxxy justify-center h-min">
        <Image
          src="/assets/images/latlogo.png"
          alt="something"
          width={300}
          height={80}
          className=""
        />

        <p>
          Lat48 is a geographically distributed team of finance consultants and
          crypto vets skilled at building and scaling teams, transforming legacy
          processes/systems, and having the strategic vision needed to bring
          high revenue generating products to market.
        </p>
        <button className="bg-slate-200 rounded-md text-gray-900 border border-gray-900 font-semibold hover:border-1 my-2 px-1">
          contact us
        </button>
      </div>

      <div className="w-1/2 ">
        <Image
          src="/assets/images/hyena.jpg"
          alt="something"
          width={650}
          height={500}
          className="rounded-lg border-2 border-gray-700"
        />
      </div>
    </div>
  );
};

export default AltHero;
