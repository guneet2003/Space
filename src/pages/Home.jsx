 import { Canvas } from "@react-three/fiber";
 import { Suspense, useState } from "react";
import Loader from "../components/Loader";
// import Sky  from "../models/Sky";
import Space from "../models/Space";
import Ufo from '../models/Ufo'
import Astronaut from "../models/Astronaut";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating,setIsRotating]= useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustSpaceforscreensize =() =>{
    let screenScale = null;
    let screenPosition = null;
    let spaceRotation = [0,0,0]

    if(window.innerWidth< 768){
      screenScale = [5,5,5];
      screenPosition = [0, -9,-30];
    }else{
      screenScale = [5,5,5];
      screenPosition = [0, -9,-30];
    }

    return [screenScale,screenPosition, spaceRotation];
  }
  const adjustAstronautforscreensize =() =>{
    let screenScale , screenPosition;

    if(window.innerWidth< 768){
      screenScale = [0.007,0.007,0.007];
      screenPosition = [0.005,-2.5,0.005];
      
    }else{
      screenScale = [0.009,0.009,0.009];
      screenPosition =[0.005,-3,0.005];
    }

    return [screenScale,screenPosition];
  }

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceforscreensize();
  const [astronautScale, astronautPosition] = adjustAstronautforscreensize();

  return (
    <section className="w-full h-screen relative">

<div className="absolute top-8 left-0 right-0 z-10 flex items-center justify-center text-white">
  {currentStage && (
    <HomeInfo
      currentStage={currentStage}
      infoBoxClassName="bg-red-500 text-white py-2 px-6 sm:px-8 sm:py-3 rounded-lg shadow-lg"
      linkClassName="bg-white text-red-500"
    />
  )}
</div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
       camera={{near: 0.1, far:1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,4,3]} intensity={0} />
          <ambientLight />
          <spotLight position={[0,1,4]} intensity={50}  />
          
        
          <Space 
          position = {spacePosition}
          scale = {spaceScale}
          rotation = {spaceRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage ={setCurrentStage}
          />
          <Ufo />
           
          <Astronaut
         
          isRotating={isRotating}
          scale={astronautScale}
          position={astronautPosition}
          rotation={[-0.05,50,0]}
          />
           {/* <Sky isRotating={isRotating} /> */}
          
          </Suspense>



      </Canvas>

      
      
    </section>
  )
}

export default Home;


