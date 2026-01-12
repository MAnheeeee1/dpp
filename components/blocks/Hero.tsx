"use client";
import React from "react";

function Hero({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <div>
      <section className="text-center rounded-xl">
        <h1 className="text-4xl font-bold">{heading}</h1>
        {subheading ? <p>{subheading}</p> : null}
      </section>
    </div>
  );
}

export default Hero;
