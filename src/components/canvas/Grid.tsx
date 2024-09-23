"use client";

import { OrbitControls } from "@react-three/drei";
import { Common, View } from "./View";
import { Suspense } from "react";
import { MOUSE } from "three";

export default function Grid() {
  return (
    <Suspense fallback={null}>
      <View className="absolute top-0 min-h-screen sm:w-full">
        <Common color="black" />
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
        <OrbitControls
          enableRotate={false} // Disable rotation to keep it flat
          enablePan={true} // Enable panning
          // enableZoom={true} // Enable zooming in/out
          // zoomSpeed={0.5} // Control the speed of zoom
          // panSpeed={1} // Control the speed of panning
          // minZoom={0.1} // Minimum zoom (avoid infinite zoom in)
          // maxZoom={100} // Maximum zoom (avoid infinite zoom out)
          mouseButtons={{
            LEFT: MOUSE.PAN,
            // LEFT: THREE.MOUSE.PAN, // Remap left-click to pan
            // MIDDLE: THREE.MOUSE.DOLLY, // Middle-click to zoom
            // RIGHT: THREE.MOUSE.ROTATE, // Right-click to rotate (or disable rotation)
          }}
        />
      </View>
    </Suspense>
  );
}
