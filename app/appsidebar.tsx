import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Header from "@/components/modularcomponents/header";

interface AppsidebarProps {
  setiteambeingdrag: (item: React.ReactNode) => void;
}

function Appsidebar({ setiteambeingdrag }: AppsidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarGroup>
        <SidebarGroupLabel>Components</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <Header id="h">This is an header</Header>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  );
}

export default Appsidebar;
