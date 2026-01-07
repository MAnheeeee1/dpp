"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Appsidebar from "./appsidebar";
import Canvas from "./canvas";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Header from "@/components/modularcomponents/header";

interface DroppedComponent {
  id: string;
  component: React.ReactNode;
}

export default function Home() {
  const [droppedItems, setDroppedItems] = useState<DroppedComponent[]>([]);
  const [iteamBeingDrag, setIteamBeingDrag] = useState<React.ReactNode>(null);
  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      const draggedItemId = event.active.id as string;
      const uniqueId = `${draggedItemId}-${Date.now()}`;

      const newDroppedItem: DroppedComponent = {
        id: uniqueId,
        component: (
          <Header key={uniqueId} id={uniqueId}>
            {draggedItemId}
          </Header>
        ),
      };

      setDroppedItems([...droppedItems, newDroppedItem]);
    }
  }

  return (
    <SidebarProvider>
      <main className="flex min-h-screen w-full static">
        <DndContext onDragEnd={handleDragEnd}>
          <Appsidebar setiteambeingdrag={setIteamBeingDrag} />
          <div className="p-6 w-full flex aling-center">
            <SidebarTrigger>Toggle Left</SidebarTrigger>
            <Canvas>
              <div>
                {droppedItems.map((item) => (
                  <div key={item.id}>{item.component}</div>
                ))}
              </div>
            </Canvas>
          </div>
        </DndContext>
      </main>
    </SidebarProvider>
  );
}
