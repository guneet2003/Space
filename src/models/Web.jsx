import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import webScene from '../assets/girl.glb';

const Web = () => {
    const { scene, animations } = useGLTF(webScene);
    const webRef = useRef();
    const { actions } = useAnimations(animations, webRef);
    const [currentAnimation, setCurrentAnimation] = useState('true'); // Set the default animation to play

    const adjustForScreenSize = () => {
        let screenScale = null;
        let screenPosition = null;

        if (window.innerWidth < 480) {
            screenScale = [1, 1, 1];
            screenPosition = [0.7, 1.1, 1.5];
        } else if (window.innerWidth < 768) {
            screenScale = [1, 1, 1];
            screenPosition = [1, 1, 1.7];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [1.5, 1, 1.7];
        }

        return [screenScale, screenPosition];
    }
    
    const [screenScale, screenPosition] = adjustForScreenSize();

    useEffect(() => {
        // Set the current animation to play as soon as the component mounts
        setCurrentAnimation('Animation');
    }, []);

    useEffect(() => {
        if (currentAnimation && actions[currentAnimation]) {
            actions[currentAnimation].play();
        }
    }, [currentAnimation, actions]);

    // Adjust rotation to tilt the model slightly
    const tiltAngle = Math.PI / -2.7;
    // const tiltAngle2 = Math.PI / -0.001; // Adjust the tilt angle as needed
    const rotation = [0, tiltAngle, 0]; // Tilt along the x-axis

    return (
        <mesh position={screenPosition} scale={screenScale} ref={webRef} rotation={rotation}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Web;
