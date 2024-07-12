import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Burger from "../assets/Burger.glb";

type GLTFResult = GLTF & {
  nodes: {
    Circle023: THREE.Mesh;
    Circle023_1: THREE.Mesh;
    Circle023_2: THREE.Mesh;
    Circle023_3: THREE.Mesh;
  };
  materials: {
    Bun: THREE.MeshStandardMaterial;
    cheese: THREE.MeshStandardMaterial;
    Seed: THREE.MeshStandardMaterial;
    ["Meat.001"]: THREE.MeshStandardMaterial;
  };
};

export function BurgerModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(Burger) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Circle022">
          <mesh
            name="Circle023"
            castShadow
            receiveShadow
            geometry={nodes.Circle023.geometry}
            material={materials.Bun}
          />
          <mesh
            name="Circle023_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle023_1.geometry}
            material={materials.cheese}
          />
          <mesh
            name="Circle023_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle023_2.geometry}
            material={materials.Seed}
          />
          <mesh
            name="Circle023_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle023_3.geometry}
            material={materials["Meat.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(Burger);
