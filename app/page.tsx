import Image from "next/image";
import Hero from "@/components/blocks/Hero";
import TextBlock from "@/components/blocks/TextBlock";
import ImageBlock from "@/components/blocks/ImageBlock";
import Button from "@/components/blocks/Button";
import EditorSideBar from "@/components/editor/EditorSideBar";
import EditorCanvas from "@/components/editor/EditorCanvas";
import { useState } from "react";
export default function Home() {
  const [layout, setLayout] = useState([]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <EditorSideBar />
      <EditorCanvas>
        <Hero heading="Clara" />
        <TextBlock text="En jacka" />
        <ImageBlock
          altText="en jacka"
          imageUrl="https://gokyo.in/cdn/shop/files/k2_downfill_jacket.jpg?v=1711966418"
          description="EN jacka"
        />
        <Button />
      </EditorCanvas>
    </div>
  );
}
