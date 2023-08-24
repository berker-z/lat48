import Carousel from "@components/Carousel";
import Linktr from "@components/Linktr";
import Team from "@components/Team";
import Hero from "@components/Hero";
import AltHero from "components/AltHero";

import Image from "next/image";

const Home = () => {
  return (
    <section className=" text-xl font-ubuntu">
      <AltHero />
      <Carousel />
      <Team />
      <section className=" mt-20 w-1/3 pt-10 boxxy space-y-3 mx-auto flex-center flex-col ">
        <Image
          src="/assets/images/karım.jpg"
          alt="something"
          width={400}
          height={800}
          className="mr-2"
        />
      </section>
      <Linktr />
    </section>
  );
};

export default Home;
