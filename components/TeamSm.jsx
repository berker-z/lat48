"use client";
import { useState } from "react";
import { personData } from "@data/personData";
import Image from "next/image";

export const Person = ({ src, name, desc }) => {
  return (
    <div className="boxxy basis-1/3 group relative h-auto px-5 py-7 mx-3">
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

const TeamSm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % personData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + personData.length) % personData.length);
  };

  return (
    <div className=" overflow-hidden mx-auto max-w-md h-auto">
      <div
        className="top-0 left-0 w-full h-auto flex  transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {personData.map((person, index) => (
          <div key={index} className="w-full flex-none">
            <Person {...person}  />
          </div>
        ))}
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default TeamSm;
