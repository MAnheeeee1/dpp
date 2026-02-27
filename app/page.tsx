"use client";
import Image from "next/image";
import Hero from "@/components/blocks/Hero";
import TextBlock from "@/components/blocks/TextBlock";
import ImageBlock from "@/components/blocks/ImageBlock";
import Button from "@/components/blocks/Button";
import EditorSideBar from "@/components/editor/EditorSideBar";
import EditorCanvas from "@/components/editor/EditorCanvas";
import renderer from "@/lib/renderer";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href={"/automatedEditor"}>Generera med ai</Link>
    </div>
  );
}
