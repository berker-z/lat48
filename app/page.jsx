import Carousel from "@components/Carousel";
import Linktr from "@components/Linktr";
import Team from "@components/Team";
import Hero from "@components/Hero";
import AltHero from "components/AltHero";

import Image from "next/image";

const Home = () => {
  return (
    <section className=" text-xl font-ubuntu space-y-5">
      {/* <AltHero /> */}
      <Carousel />
      <Team />
      <div className=" mt-20 w-1/3 p-5 boxxy space-y-3 mx-auto flex-center flex-col ">
        <Image
          src="/assets/images/karım.jpg"
          alt="something"
          width={400}
          height={800}
          className="mr-2"
        />
      </div>
      <Linktr />
    </section>
  );
};

export default Home;
