"use client";
import React from "react";
import type { Block } from "@/lib/renderer";
function ComponentDisplayBlock({
  componentName,
  setLayout,
}: {
  componentName: string;
  setLayout: (layout: Block[]) => void;
}) {
  function handleClick() {
    
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
