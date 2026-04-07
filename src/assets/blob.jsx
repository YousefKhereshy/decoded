// Blob.jsx
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Environment, Lightformer } from '@react-three/drei'

export default function Blob(props) {
  const meshRef = useRef()

  // Simple animation – rotate the blob slowly
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <mesh ref={meshRef} {...props}>
      {/* A sphere with enough segments to make distortion smooth */}
      <sphereGeometry args={[1, 128, 128]} />
      
      {/* Distort material with glass‑like properties */}
      <MeshDistortMaterial
        color="#e7ff47"          // base tint
        emissive="#191d02ff"        // subtle glow from inside
        roughness={0.2}           // low roughness = glossy
        metalness={0.1}           // slight metallic reflection
        clearcoat={1}             // extra glossy layer
        clearcoatRoughness={0.1}
        transparent
        opacity={0.4}             // see‑through effect
        distort={0.4}             // strength of the blob distortion
        speed={3}                 // speed of the distortion animation
        envMapIntensity={2}       // boost environment reflections
      />
    </mesh>
  )
}