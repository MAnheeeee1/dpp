"use client";
import Image from "next/image";
import Hero from "@/components/blocks/Hero";
import TextBlock from "@/components/blocks/TextBlock";
import ImageBlock from "@/components/blocks/ImageBlock";
import Button from "@/components/blocks/Button";
import EditorSideBar from "@/components/editor/EditorSideBar";
import EditorCanvas from "@/components/editor/EditorCanvas";
import renderer from "@/lib/renderer";
import { useState } from "react";
export default function Home() {
  const [layout, setLayout] = useState([
    { id: "1", type: "hero" as const, props: { heading: "Welcome to DPP" } },
    {
      id: "2",
      type: "text" as const,
      props: { text: "This is a demo text block below the hero." },
    },
  ]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <EditorSideBar />
      <EditorCanvas>{renderer({ layout })}</EditorCanvas>
    </div>
  );
}
