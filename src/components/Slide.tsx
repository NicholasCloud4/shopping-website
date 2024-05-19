import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
}

const Slide: React.FC<propsType> = ({ img }) => {
  return (
    <div className="outline-none border-none relative">
      <Image
        className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt={"image"}
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
