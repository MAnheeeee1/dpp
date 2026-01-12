import React from "react";

function EditorCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start">
      {children}
    </div>
  );
}

export default EditorCanvas;
