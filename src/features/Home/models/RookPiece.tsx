import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Rook from "../assets/RookPiece.glb";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle002: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export function RookPiece(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(Rook) as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.White}
        position={[-1, 0, -0.035]}
      />
    </group>
  );
}

useGLTF.preload(Rook);
