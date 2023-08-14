import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className="flex place-content-center">
        <div className="w-1/2">
          <p className="boxxy baslik w-min px-2 mx-2">/team</p>
          <div className="flex">
            <div className="boxxy group relative w-1/3 h-auto m-3 p-3">
              <div className="flex-center flex-col">
                <Image
                  src="/assets/images/craig.jpg"
                  alt="something"
                  width={200}
                  height={200}
                  className="mr-2 rounded-full filter grayscale group-hover:shadow-lg"
                />
                <div>
                  <p className="font-bold text-center">craig</p>
                  <p className="text-center">
                    Craig has 15 years of experience being a trusted advisor
                    capable of delivering end-to-end solutions, operational
                    excellence, and go-to-market strategy for leading Microsoft
                    products and services. Expertise areas include
                    product-market-fit, brand, product, and compete strategy,
                    operations management, UX and market research, BI and
                    analytics reporting, financial budgeting, analysis, and
                    forecasting, and application and tool development.
                  </p>
                </div>
              </div>
            </div>

            <div className="boxxy w-1/3 group relative h-auto m-3 p-3">
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
                    Berker is a high impact product leader with a wealth of
                    experience in guiding business and product development. His
                    expertise encompasses formulating go-to-market strategies,
                    orchestrating cross-functional operations, and fostering
                    market entry and user expansion, particularly within the
                    dynamic realm of the blockchain ecosystem.
                  </p>
                </div>
              </div>
            </div>

            <div className="boxxy w-1/3 h-auto group relative m-3 p-3">
              <div className="flex-center flex-col">
                <Image
                  src="/assets/images/hannah.jpg"
                  alt="something"
                  width={200}
                  height={200}
                  className="mr-2 rounded-full filter grayscale group-hover:shadow-lg"
                />
                <div>
                  <p className="font-bold text-center">hannah</p>
                  <p className="text-center">
                    Hannah is an active angel investor with a keen focus on
                    assisting founders in product validation and go-to-market
                    strategies. She has cultivated a community of analysts and
                    investors dedicated to crafting research on startups and
                    facilitating their connections with potential investors.
                    With a foundation in financial advisory, her expertise is
                    further enriched by her background in academic research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
