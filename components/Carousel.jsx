"use client";
import Image from "next/image";
import Link from "next/link";
import carouselData from "@data/carouselData";
import { useState } from "react";
import Logo from "./Logo";

const CarouselItem = ({ src, head, desc, btntext, btnlink }) => {
  return (
    <>
      <div className="flex sm:flex-col-reverse sm:items-center h-auto sm:gap-y-5 notsm:gap-x-5 notsm:justify-between align-center py-5">
        {/* left side */}
        <div className="basis-1/2 grid grid-cols-1 justify-between">
          <h1 className="boxxy baslik h-fit">{head}</h1>
          <p1 className="text-2xl p-5 mb-5 boxxy-gray">{desc}</p1>

          <Link
            href={btnlink}
            className="bg-slate-300 border flex justify-self-end rounded-md w-fit h-fit active:border-2 active:border-cyan-300"
          >
            <Logo size={40} /> {btntext}
          </Link>
        </div>

        {/* right side */}
        <div className="">
          <Image
            src={src}
            height={400}
            width={400}
            className="object-cover aspect-square rounded-md border-2 border-gray-700"
          />
        </div>
      </div>
    </>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let nextIndex;
  const handleLeft = () => {
    currentIndex === 0
      ? (nextIndex = carouselData.length - 1)
      : (nextIndex = currentIndex - 1);
    setCurrentIndex(nextIndex);
  };

  const handleRight = () => {
    const nextIndex = (currentIndex + 1) % carouselData.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div>
      <CarouselItem {...carouselData[currentIndex]} />{" "}
      <button onClick={handleLeft}>"SOL"</button>
      <button onClick={handleRight}>"SAĞ"</button>
    </div>
  );
};

export default Carousel;
