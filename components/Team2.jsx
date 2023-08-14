import React from "react";
import Image from "next/image";

const Team2 = () => {
  return (
    <div className="boxxy group relative h-auto m-3 p-3">
      <div className="flex-center flex-col">
        <Image
          src="/assets/images/berker.png"
          alt="something"
          width={200}
          height={200}
          className="mr-2 rounded-full filter grayscale group-hover:shadow-lg"
        />
        <div>
          <p className="font-bold text-center">berkerz</p>
          <p className="text-center">
            Berker is a high impact product leader with a wealth of experience
            in guiding business and product development. His expertise
            encompasses formulating go-to-market strategies, orchestrating
            cross-functional operations, and fostering market entry and user
            expansion, particularly within the dynamic realm of the blockchain
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team2;
