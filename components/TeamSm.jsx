"use client";
import { useState } from "react";
import { personData } from "@data/personData";
import Image from "next/image";

export const Person = ({ src, name, desc }) => {
  return (
    <div className="boxxy group relative h-auto px-5 py-7 mx-3">
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

const TeamSm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % personData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + personData.length) % personData.length);
  };

  return (
    <div className=" overflow-hidden relative mx-auto max-w-md h-auto notsm:hidden">
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
      <button onClick={handlePrev} className="absolute top-32 left-8 text-3xl px-3 py-1 rounded-lg bg-slate-600 bg-opacity-0 hover:bg-opacity-40">❮</button>
      <button onClick={handleNext} className="absolute top-32 right-8 text-3xl px-3 py-1 rounded-lg bg-slate-600 bg-opacity-0 hover:bg-opacity-30">❯</button>
    </div>
  );
};

export default TeamSm;
