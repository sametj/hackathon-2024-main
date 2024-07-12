import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Queen from "../assets/QueenPiece.glb";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle003: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
  };
};

export function QueenPiece(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(Queen) as GLTFResult;
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
        geometry={nodes.Circle003.geometry}
        material={materials.Black}
        position={[0.653, 0, -0.035]}
      />
    </group>
  );
}

useGLTF.preload(Queen);
