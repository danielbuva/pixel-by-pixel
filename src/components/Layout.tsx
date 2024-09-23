"use client";

import dynamic from "next/dynamic";
import { type ReactNode, useRef } from "react";
const Scene = dynamic(() => import("./canvas/Scene"), {
  ssr: false,
});

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={{
        height: "100%",
        overflow: "auto",
        position: "relative",
        touchAction: "auto",
        width: " 100%",
      }}
    >
      {children}
      <Scene
        eventPrefix="client"
        eventSource={ref}
        style={{
          height: "100vh",
          left: 0,
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          width: "100vw",
        }}
      />
    </div>
  );
};

export { Layout };
