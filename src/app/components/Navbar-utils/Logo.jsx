import Image from "next/image";
import React from "react";
import { Logos } from "../../../../public/images/index"


const Logo = ({ x, y }) => {
  return (
    <>
      <Image src={Logos} alt="hero image" className={`w-${x} h-${y}`} />
      <span className="w-1 mx-5 bg-themeblue h-10 "></span>
      <h1 className="text-darkblues">Alpha</h1>
    </>
  );
};

export default Logo;
