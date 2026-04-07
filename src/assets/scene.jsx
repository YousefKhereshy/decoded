import React from "react";
import { Canvas, useThree } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import Blob from './blob';

export default function Scene(){
  return(
          <Canvas 
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100vw', 
              height: '100vh', 
              zIndex: -1, 
              pointerEvents: 'none',
              filter: 'blur(60px)',
              transform: 'scale(1.2)'
            }} 
            camera={{ position: [0, 0, 5], fov: 45 }}
          >

        {/* Ambient light to softly illuminate the blob */}
        <ambientLight intensity={0.5} />
        
        {/* A few point lights to create highlights */}
        <pointLight position={[2, 3, 4]} intensity={1.5} />
        <pointLight position={[-3, 1, 2]} intensity={1} />

        {/* Environment map with custom lightformers for better reflections */}
        <Environment preset="city" resolution={512}>
          {/* Optional: add extra light panels to shape reflections */}
          <Lightformer
            form="ring"
            color="white"
            intensity={2}
            position={[2, 2, -2]}
            scale={5}
          />
        </Environment>

        <ResponsiveBlobs />
      </Canvas>
  )
}

function ResponsiveBlobs() {
  const { viewport } = useThree();
  const scaleFactor = Math.min(1, viewport.width / 7);

  return (
    <>
      <Blob position={[-(viewport.width / 2) * 0.8, (viewport.height / 2) * 0.7, -1]} scale={[1.2 * scaleFactor, 1.2 * scaleFactor, 1.2 * scaleFactor]} />
      <Blob position={[(viewport.width / 2) * 0.8, (viewport.height / 2) * 0.4, -2]} scale={[1.5 * scaleFactor, 1.5 * scaleFactor, 1.5 * scaleFactor]} />
      <Blob position={[-(viewport.width / 2) * 0.7, -(viewport.height / 2) * 0.8, -3]} scale={[2 * scaleFactor, 2 * scaleFactor, 2 * scaleFactor]} />
      <Blob position={[(viewport.width / 2) * 0.7, -(viewport.height / 2) * 0.7, -1]} scale={[1 * scaleFactor, 1 * scaleFactor, 1 * scaleFactor]} />
    </>
  );
}