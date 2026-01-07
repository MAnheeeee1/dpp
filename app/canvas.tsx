"use client";
import React from "react";

function Canvas() {
  const firstTime = true;
  if (firstTime) {
    return (
      <div>
        <h1>Start creating your awesome dpp site</h1>
      </div>
    );
  } else return <div>Not first time</div>;
}

export default Canvas;
