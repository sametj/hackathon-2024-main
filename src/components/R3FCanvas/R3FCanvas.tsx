import "./R3FCanvas.module.scss";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraSettingsProps } from "./R3FCanvas.types";
import { Center, Stage } from "@react-three/drei";

const cameraSettings: CameraSettingsProps = {
  fov: 45,
  near: 0.1,
  far: 1000,
  position: [0, 0, 5],
};

function R3FCanvas({
  children,
  ...props
}: {
  children: React.ReactNode;
  fov: number;
  position: [number, number, number];
}) {
  return (
    <Canvas
      camera={{
        fov: props.fov,
        near: cameraSettings.near,
        far: cameraSettings.far,
        position: [...props.position] as [number, number, number],
      }}
    >
      <Stage intensity={20} environment={"lobby"}>
        <Center>{children}</Center>{" "}
      </Stage>
    </Canvas>
  );
}

export default R3FCanvas;
