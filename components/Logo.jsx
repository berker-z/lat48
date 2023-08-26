import React from "react";
import Image from "next/image";

function Logo({ size }) {
  return (
    <div>
      <Image
        src={"/assets/images/latsm.svg"}
        height={size}
        width={size}
        className=" object-cover mr-3"
      ></Image>
    </div>
  );
}

export default Logo;
