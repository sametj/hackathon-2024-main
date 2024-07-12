import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import boba from "../assets/Boba.glb";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder007: THREE.Mesh;
    Cylinder007_1: THREE.Mesh;
    Cylinder007_2: THREE.Mesh;
    Cylinder007_3: THREE.Mesh;
    Cylinder007_4: THREE.Mesh;
  };
  materials: {
    BobaMaterial: THREE.MeshStandardMaterial;
    ["Transparent.001"]: THREE.MeshPhysicalMaterial;
    white: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    BubbleMaterial: THREE.MeshStandardMaterial;
  };
};

export function Boba(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(boba) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Cylinder006">
          <mesh
            name="Cylinder007"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.BobaMaterial}
          />
          <mesh
            name="Cylinder007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials["Transparent.001"]}
          />
          <mesh
            name="Cylinder007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_2.geometry}
            material={materials.white}
          />
          <mesh
            name="Cylinder007_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_3.geometry}
            material={materials.Black}
          />
          <mesh
            name="Cylinder007_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_4.geometry}
            material={materials.BubbleMaterial}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(boba);
