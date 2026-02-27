import React from "react";
import Image from "next/image";
type ImageProps = {
  imageUrl: string;
  height: number;
  width: number;
  position?: string;
};
const ProductImage = ({ imageUrl, height, width, position }: ImageProps) => {
  let divClassName = "flex justify-center items-center";
  if (position == "center") {
    divClassName = "flex justify-center items-center";
  } else if (position == "left") {
    divClassName = "flex justify-start items-center";
  } else if (position == "right") {
    divClassName = "flex justify-end items-center";
  }
  divClassName += " relative py-6";
  return (
    <div className={divClassName}>
      <Image
        alt={"Produkt Photo"}
        src={imageUrl}
        height={height}
        width={width}
      />
      <p className="absolute bottom-8 right-18">Art nr 89349018</p>
    </div>
  );
};

export default ProductImage;
