import React from "react";
import Image from "next/image";
function ImageBlock({
  imageUrl,
  altText,
  description,
}: {
  imageUrl: string;
  altText: string;
  description?: string;
}) {
  return (
    <div>
      <Image src={imageUrl} alt={altText} width={100} height={100} />
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default ImageBlock;
