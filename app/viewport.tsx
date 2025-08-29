"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Grid } from "@react-three/drei";
import { Suspense } from "react";

export default function Viewport(){
  return (
    <div className="canvas-container">
      <Suspense fallback={<div>Loading…</div>}>
        <Canvas camera={{position:[8,6,12],fov:45}} shadows>
          <color attach="background" args={["#0b0f14"]} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10,15,10]} intensity={1} />
          <mesh>
            <cylinderGeometry args={[1.2,1.2,3,32]} />
            <meshStandardMaterial color="steelblue"/>
          </mesh>
          <Environment preset="city" />
          <Grid args={[50,50]} />
          <OrbitControls makeDefault />
        </Canvas>
      </Suspense>
    </div>
  );
}
