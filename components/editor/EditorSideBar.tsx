import React from "react";
import ComponentDisplayBlock from "./ComponentDisplayBlock";
function EditorSideBar() {
  return (
    <div className="absolute top-0 left-0 min-h-full p-5 w-50 bg-white flex justify-between flex-col">
      <ComponentDisplayBlock componentName="Header" />
      <ComponentDisplayBlock componentName="Button" />
      <ComponentDisplayBlock componentName="Image" />
      <ComponentDisplayBlock componentName="Text" />
    </div>
  );
}

export default EditorSideBar;
