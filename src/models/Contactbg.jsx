import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import alienScene from '../assets/alien.glb';
import { useFrame } from '@react-three/fiber';


const Contactbg = () => {
    const { scene, animations } = useGLTF(alienScene);
    const alienRef = useRef();
    const { actions } = useAnimations(animations, alienRef);
    const [currentAnimation, setCurrentAnimation] = useState('ArmatureAction'); // Set the default animation to play

    useEffect(() => {
        // Set the current animation to play as soon as the component mounts
        setCurrentAnimation('ArmatureAction');
    }, []);

    useEffect(() => {
        if (currentAnimation && actions[currentAnimation]) {
            // Play the specified animation
            actions[currentAnimation].play();
        }
    }, [currentAnimation, actions]);

    useFrame(({ clock, viewport }) => {
        const { width } = viewport;

        // Make the UFO float near the top of the screen and across the screen
        alienRef.current.position.x = Math.sin(clock.elapsedTime * 0.2) * 2; // Adjust the multiplier as needed
        alienRef.current.position.y = Math.cos(clock.elapsedTime * 0.6) * 0.5;
        alienRef.current.position.z = Math.sin(clock.elapsedTime * 0.4) * 1.2;
        
        // Set the UFO's x position closer to the origin if the viewport width is less than 768px
        if (width < 768) {
            alienRef.current.position.x = 0;
            alienRef.current.position.y = -2; // Adjust the position as needed
        } else {
            alienRef.current.position.x = 0; // Default position if the viewport width is greater than or equal to 768px
        }
    });

    return (
        <mesh position={[-5,40,-3]} scale={[1, 1, 1]} ref={alienRef}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Contactbg;
