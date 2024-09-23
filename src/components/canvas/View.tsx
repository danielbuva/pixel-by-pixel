"use client";

import { tunnel } from "~/global";
import { PerspectiveCamera, View as ViewImpl } from "@react-three/drei";
import {
  forwardRef,
  type MutableRefObject,
  type ReactNode,
  type Ref,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";

export const Common = ({ color }: { color: string }) => (
  <Suspense fallback={null}>
    {/* {color && <color args={[color]} attach="background" />} */}
    <ambientLight intensity={0.5} />
    <pointLight intensity={1} position={[20, 30, 10]} />
    <pointLight color="blue" position={[-10, -10, -10]} />
    {/* <PerspectiveCamera fov={40} makeDefault position={[0, 0, 6]} /> */}
  </Suspense>
);

interface ViewProps {
  children?: ReactNode;
  className?: string;
}

const View = forwardRef<HTMLDivElement, ViewProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement | null>) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div className={className} ref={localRef} {...props} />
        <tunnel.In>
          <ViewImpl track={localRef as MutableRefObject<HTMLElement>}>
            {children}
          </ViewImpl>
        </tunnel.In>
      </>
    );
  },
);

View.displayName = "View";

export { View };
