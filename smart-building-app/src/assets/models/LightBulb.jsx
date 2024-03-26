import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  SelectiveBloom,
} from "@react-three/postprocessing";

export const LightBulb = ({ geometry, material, position }) => {
  const meshRef1 = useRef();
  const lightRef1 = useRef();

  return (
    <>
      <mesh
        ref={meshRef1}
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
        position={position}
        rotation={[Math.PI, 0, 0]}
        scale={[1.097, 1.05, 1.035]}
      />
      <pointLight ref={lightRef1} intensity={0.9} position={position} />
      <EffectComposer>
        <SelectiveBloom
          lights={[lightRef1]}
          selection={[meshRef1]}
          intensity={5.0}
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
        />
      </EffectComposer>
    </>
  );
};
