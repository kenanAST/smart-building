import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("./assets/square.gltf");
  const [rotate, setRotation] = useState(0);

  useFrame(() => {
    setRotation(rotate + 50);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotateX={rotate}
        rotateY={rotate}
      />
    </group>
  );
}

useGLTF.preload("./assets/square.gltf");
