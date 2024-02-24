import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import space from '../assets/space.glb'

const Space = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const SpaceRef = useRef();

  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      SpaceRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleTouchStart = (e) => {
    handlePointerDown(e);
  }

  const handleTouchMove = (e) => {
    handlePointerMove(e);
  }

  const handleTouchEnd = (e) => {
    handlePointerUp(e);
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      SpaceRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = SpaceRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 0 && normalizedRotation < Math.PI / 2:
          setCurrentStage(1);
          break;
        case normalizedRotation >= Math.PI / 2 && normalizedRotation < Math.PI:
          setCurrentStage(2);
          break;
        case normalizedRotation >= Math.PI && normalizedRotation < (3 * Math.PI) / 2:
          setCurrentStage(3);
          break;
        case normalizedRotation >= (3 * Math.PI) / 2 && normalizedRotation < 2 * Math.PI:
          setCurrentStage(4);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleTouchStart, handleTouchMove, handleTouchEnd]);

  const { nodes, materials } = useGLTF(space);
  return (
    <a.group {...props} ref={SpaceRef}>
      <group scale={0.01} >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-357.40441895, 392.64627075, 0.00005276]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.70642853}
        >
          <mesh
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[199.63354492, 566.88317871, -221.00091553]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.70642853}
        >
          <mesh
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.waves_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.89128518]}
        />
        <mesh
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.89128518]}
        />
        <mesh
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[92.46399689, 15.52906036, 2.11166263]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.89128518]}
        />
        <mesh
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69006348, 793.81091309, 355.29275513]}
          rotation={[-Math.PI / 2, 1.6e-7, -Math.PI / 2]}
          scale={[20.40795517, 20.40795517, 20.40795708]}
        />
        <mesh
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.46902466, 427.94793701, 0.0000575]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.40235138}
        />
        <mesh
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.46902466, 427.94793701, 0.0000575]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.32368469}
        />
        <mesh
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.46902466, 427.94793701, 0.0000575]}
          rotation={[-0.68836522, 0, 0]}
          scale={[104.12850189, 81.60891724, 0]}
        />
        <mesh
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-341.98809814, 460.19619751, -117.02835846]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.40235138}
        />
        <mesh
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.98809814, 460.19619751, -117.02835846]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.32368469}
        />
        <mesh
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.5223999, 667.59368896, -214.47546387]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.88089371}
        />
        <mesh
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.44165039, 585.79241943, -311.8571167]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.88089371}
        />
        <mesh
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.46166992, 331.07354736, -379.06704712]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.43720627}
        />
        <mesh
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, -101.67268372, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.01342773, 1120.01342773, 100]}
        />
        <mesh
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.40441895, 392.64627075, 0.00005276]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.07464981}
        />
        <mesh
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[199.63354492, 566.88317871, -221.00091553]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.07464981}
        />
      </group>
    </a.group>
  );
}

export default Space;
