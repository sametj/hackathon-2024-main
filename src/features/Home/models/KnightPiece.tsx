import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import Knight from "../assets/KnightPiece.glb";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Black: THREE.MeshStandardMaterial;
  };
};

export function KnightPiece(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(Knight) as GLTFResult;
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
        geometry={nodes.Cube.geometry}
        material={materials.Black}
        position={[3.984, 0.059, -0.035]}
        scale={0.314}
      />
    </group>
  );
}

useGLTF.preload(Knight);
