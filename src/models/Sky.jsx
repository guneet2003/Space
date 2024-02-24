import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/sky.glb';
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();
  useFrame((_,delta) =>{
    if(isRotating){
      skyRef.current.rotation.y += 0.15 * delta
    }
  })


  // Adjust position and scale as needed
  const position = [0, 0, 0]; // Example position
  const scale = [0.5,0.5,0.5]; // Example scale

  return (
    <mesh position={position} scale={scale} ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;