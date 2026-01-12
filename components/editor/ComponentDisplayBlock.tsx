"use client";
import React from "react";

function ComponentDisplayBlock({ componentName }: { componentName: string }) {
  function handleClick() {
    console.log("WOrking");
  }
  return (
    <div
      className="p-6 bg-gray-200 hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <h1>{componentName}</h1>
    </div>
  );
}

export default ComponentDisplayBlock;
