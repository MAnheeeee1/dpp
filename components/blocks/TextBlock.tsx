import React from "react";

function TextBlock({ text }: { text: string }) {
  return (
    <div className="text-center rounded-xl">
      <p>{text}</p>
    </div>
  );
}

export default TextBlock;
