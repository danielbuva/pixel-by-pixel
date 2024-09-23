"use client";

import { tunnel } from "~/global";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      frameloop="demand"
      orthographic
      camera={{
        zoom: 50,
        position: [0, 0, 1],
        near: 0.1,
        far: 1000,
      }}
    >
      <tunnel.Out />
      <Preload all />
    </Canvas>
  );
}
