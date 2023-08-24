"use client";
import Image from "next/image";
import Link from "next/link";
import carouselData from "@data/carouselData";
import { useState } from "react";

const CarouselItem = ({ src, head, desc, btntext, btnlink }) => {
  return (
    <div className="  flex sm:flex-col-reverse flex-grow  gap-y-5 gap-x-5 justify-between max-w-7xl">
      <div className=" basis-1/2 py-5  flex flex-col place-content-center  justify-evenly">
        <h1 className="boxxy baslik">/{head}</h1>
        <p1 className=" text-2xl backdrop-blur-xs  rounded-lg border border-slate-700">
          {desc}
        </p1>
        <br />
        <Link href={btnlink} className="bg-slate-300 border rounded-md w-fit ">
          {btntext}
        </Link>
      </div>

      <Image
        src={src}
        width="400"
        height="400"
        className="rounded-lg flex-shrink border-slate-700 border basis-1/2 w-auto h-auto"
      />
    </div>
  );
};

const Carousel = () => {
  return <CarouselItem {...carouselData[0]} />;
};

export default Carousel;
