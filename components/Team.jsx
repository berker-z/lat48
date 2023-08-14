import React from "react";
import Image from "next/image";
import { personData } from "@public/assets/data/personData";

const Person = ({ src, name, desc }) => {
  return (
    <div className="boxxy group relative w-1/3 h-auto m-3 p-3">
      <div className="flex-center flex-col">
        <Image
          src={src}
          alt=""
          width={200}
          height={200}
          className="mr-2 rounded-full border-2 border-gray-700 filter grayscale group-hover:shadow-lg"
        />
        <div>
          <p className="font-bold text-3xl my-3 text-center">{name}</p>
          <p className="text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className="flex place-content-center">
        <div className="w-1/2">
          <p className="boxxy baslik w-min px-2 mx-2">/team</p>
          <div className="flex">
            <Person {...personData[0]} />
            <Person {...personData[1]} />
            <Person {...personData[2]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
