import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import ufoScene from '../assets/ufo.glb'
import { useFrame } from '@react-three/fiber'

const Ufo = () => {
    const { scene, animations } = useGLTF(ufoScene)
    const ufoRef = useRef();
    const { actions } = useAnimations(animations, ufoRef)

    useEffect(() => {
        actions['ArmatureAction.001'].play();
    }, [])

    useFrame(({ clock, viewport }) => {
        const { width } = viewport;

        // Make the UFO float near the top of the screen and across the screen
        ufoRef.current.position.x = Math.sin(clock.elapsedTime * 0.2) * 2; // Adjust the multiplier as needed
        ufoRef.current.position.y = Math.cos(clock.elapsedTime * 0.6) * 0.5;
        ufoRef.current.position.z = Math.sin(clock.elapsedTime * 0.4) * 1.2;
        
        // Set the UFO's x position closer to the origin if the viewport width is less than 768px
        if (width < 768) {
            ufoRef.current.position.x = -2; // Adjust the position as needed
        } else {
            ufoRef.current.position.x = -5; // Default position if the viewport width is greater than or equal to 768px
        }
    });

    return (
        <mesh position={[-5,40,-3]} scale={[0.3, 0.3, 0.23]} ref={ufoRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Ufo
