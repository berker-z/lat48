import Team2 from "@components/Team";
import React from "react";
import Image from "next/image";

const justify = () => {
  return (
    <div className="bg-sky-500 h-screen text-xl">
      <Team2 />
      <div className="flex place-content-center">
        <div className="bg-white w-6/12">
          <p>hebele</p>
          <div className=" border-4 border-orange-500 flex ">
            <Team2 />
            <Team2 />
            <Team2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default justify;
