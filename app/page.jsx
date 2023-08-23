import RootLayout from "./layout";
import Linktr from "@components/Linktr";
import Team from "@components/Team";
import Hero from "@components/Hero";
import AltHero from "components/AltHero";
import Todo from "@components/Todo";
import Image from "next/image";
import Navbar from "@components/Navbar";

const Home = () => {
  return (
    <section className=" text-xl font-ubuntu">
      <AltHero />

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
