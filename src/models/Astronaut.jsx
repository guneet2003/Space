import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import astronautScene from '../assets/astronaut.glb'

const Astronaut = ({ isRotating, astronautScale, astronautPosition, ...props }) => {

    const ref = useRef();
    const { scene, animations } = useGLTF(astronautScene);
    const {actions} = useAnimations(animations,ref);

    useEffect(() => {
        if(isRotating){
            actions['Take 001'].play();
        }else{
            actions['Take 001'].stop();
        }
    })

    return (
        <mesh scale={astronautScale} position={astronautPosition} {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Astronaut;
