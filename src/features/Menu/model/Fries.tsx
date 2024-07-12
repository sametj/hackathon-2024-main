import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import fries from "../assets/Fries.glb";
type GLTFResult = GLTF & {
  nodes: {
    Plane008_1: THREE.Mesh;
    Plane008_2: THREE.Mesh;
  };
  materials: {
    Red: THREE.MeshStandardMaterial;
    Fries: THREE.MeshStandardMaterial;
  };
};

export function Fries(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(fries) as GLTFResult;
  return (
    <group {...props} dispose={null} rotation-y={20}>
      <group name="Scene">
        <group name="Plane008">
          <mesh
            name="Plane008_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials.Red}
          />
          <mesh
            name="Plane008_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials.Fries}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(fries);
