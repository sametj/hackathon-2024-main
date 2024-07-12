import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import King from "../assets/KingPiece.glb";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle005: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export function KingPiece(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(King) as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.z = Math.sin(clock.getElapsedTime()) * 0.3;
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.White}
        position={[2.327, 0, -0.035]}
      />
    </group>
  );
}

useGLTF.preload(King);
