import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import coffeeCup from "../assets/CoffeeCup.glb";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001_1: THREE.Mesh;
    Cylinder001_2: THREE.Mesh;
    Cylinder001_3: THREE.Mesh;
  };
  materials: {
    Brown: THREE.MeshStandardMaterial;
    DarkBrown: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
  };
};

export function CoffeeCup(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(coffeeCup) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Cylinder001">
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Brown}
          />
          <mesh
            name="Cylinder001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.DarkBrown}
          />
          <mesh
            name="Cylinder001_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_3.geometry}
            material={materials.Black}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(coffeeCup);
