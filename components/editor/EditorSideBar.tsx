"use client";
import React from "react";
import ComponentDisplayBlock from "./ComponentDisplayBlock";
import type { Block } from "@/lib/renderer";
function EditorSideBar({
  setLayout,
}: {
  setLayout: (layout: Block[]) => void;
}) {
  function handleClick() {
    return;
  }
  return (
    <div className="absolute top-0 left-0 min-h-full p-5 w-50 bg-white flex justify-between flex-col">
      <ComponentDisplayBlock setLayout={setLayout} componentName="Header" />
      <ComponentDisplayBlock setLayout={setLayout} componentName="Button" />
      <ComponentDisplayBlock setLayout={setLayout} componentName="Image" />
      <ComponentDisplayBlock setLayout={setLayout} componentName="Text" />
    </div>
  );
}

export default EditorSideBar;
