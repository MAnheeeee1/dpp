"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Appsidebar from "./appsidebar";
import Canvas from "./canvas";
import { Children } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SidebarProvider>
        <Appsidebar />
        <SidebarTrigger>Toggle Left</SidebarTrigger>
      </SidebarProvider>

      <div className="flex-1 p-6">
        <Canvas />
      </div>

      <SidebarProvider>
        <Appsidebar />
        <SidebarTrigger>Toggle Right</SidebarTrigger>
      </SidebarProvider>
    </main>
  );
}
