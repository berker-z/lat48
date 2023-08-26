import Carousel from "@components/Carousel";
import Linktr from "@components/Linktr";
import Team from "@components/Team";
import Hero from "@components/Hero";
import AltHero from "components/AltHero";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className=" text-xl">
      <Carousel />
      <Team />
      <Linktr />
    </div>
  );
};

export default Home;
