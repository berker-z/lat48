import React from "react";
import Image from "next/image";
import { personData } from "@data/personData";

const Person = ({ src, name, desc }) => {
  return (
    <div className="boxxy basis-1/3 group relative h-auto px-5 py-7">
      <div className="flex-center  flex-col">
        <Image
          src={src}
          alt=""
          width={200}
          height={200}
          className="rounded-full border-2 border-gray-700 filter grayscale group-hover:shadow-lg"
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
    <div className="flex place-content-center pt-20">
      <div className="">
        <p className="boxxy baslik">{"/"}team</p>
        <div className="grid grid-cols-3 space-x-3">
          <Person {...personData[0]} />
          <Person {...personData[1]} />
          <Person {...personData[2]} />
        </div>
      </div>
    </div>
  );
};

export default Team;
