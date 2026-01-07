"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface CanvasProps {
  children?: React.ReactNode;
}

function Canvas({ children }: CanvasProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-amber-300 w-full">
      {children || "Start creating your dpp"}
    </div>
  );
}

export default Canvas;
