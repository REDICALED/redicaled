
import { Suspense, useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Model() {
    const { scene } = useGLTF('/models/untitled.gltf');
    const ref = useRef<THREE.Group>(null!);
  
    // 회전 애니메이션
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.01; // Y축을 기준으로 회전
      }
    });
  
    return <primitive ref={ref} object={scene} scale={[1,1,1]} position={[0, -2, -4]} />;
  }

const Krustykrab = () => {

    return (
        <div  className="w-full h-full">
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
            </Canvas>

        </div>
        
    );
}

export default Krustykrab;