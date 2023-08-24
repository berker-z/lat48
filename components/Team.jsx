import React from "react";
import Image from "next/image";
import { personData } from "@data/personData";

const Person = ({ src, name, desc }) => {
  return (
    <div className="boxxy group relative h-auto p-3">
      <div className="flex-center flex-col">
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
    <>
      <div className="flex place-content-center ">
        <div className="">
          <p className="boxxy baslik">{"/"}team</p>
          <div className="flex sm:flex-col space-x-3">
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
