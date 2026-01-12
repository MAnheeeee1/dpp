import Link from "next/link";
import React from "react";

function Button({
  hrefButton = "#",
  text = "Click Me",
}: {
  hrefButton?: string;
  text: string;
}) {
  return (
    <div>
      <Link href={hrefButton}>{text}</Link>
    </div>
  );
}

export default Button;
