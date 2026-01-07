"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface HeaderProps {
  children: React.ReactNode;
  id: string;
}
function Header(props: HeaderProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <h1 ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </h1>
  );
}

export default Header;
