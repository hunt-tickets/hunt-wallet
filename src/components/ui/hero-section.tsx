import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Box = ({ position, rotation }: BoxProps) => {
    const geometry = useMemo(() => {
        const shape = new Shape();
        const angleStep = Math.PI * 0.5;
        const radius = 1;

        shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
        shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
        shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
        shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

        const extrudeSettings = {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 10, // Reduced for performance
            curveSegments: 10  // Reduced for performance
        };

        const geom = new ExtrudeGeometry(shape, extrudeSettings);
        geom.center();
        return geom;
    }, []);

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial 
                color="#1a1a1a"
                metalness={1}
                roughness={0.4}
                reflectivity={0.3}
                ior={1.5}
                emissive="#000000"
                emissiveIntensity={0}
                transparent={true}
                opacity={0.6}
                transmission={0.0}
                thickness={0.5}
                clearcoat={0.0}
                clearcoatRoughness={0.0}
                sheen={0}
                sheenRoughness={1.0}
                sheenColor="#ffffff"
                specularIntensity={0.8}
                specularColor="#ffffff"
                iridescence={0.8}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[100, 400]}
                flatShading={false}
                side={0}
                alphaTest={0}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<any>();

    useFrame((state: any, delta: number) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.02; // Slower rotation for subtlety
            groupRef.current.rotation.y += delta * 0.01;
        }
    });

    const boxes = useMemo(() => 
        Array.from({ length: 20 }, (_, index) => ({ // Reduced from 30 to 20
            position: [(index - 10) * 1.5, Math.sin(index * 0.5) * 2, (index % 3) * -3] as [number, number, number],
            rotation: [
                (index - 10) * 0.08,
                Math.PI / 2,
                index * 0.1
            ] as [number, number, number],
            id: index
        })), []
    );

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

// Simple fallback component for testing
const SimpleScene = () => {
    return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-500/20 rounded-lg animate-pulse">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg"></div>
            </div>
        </div>
    )
}

export const Scene = () => {
    const [cameraPosition] = React.useState<[number, number, number]>([3, 3, 15]);
    const [use3D] = React.useState(true);

    // Fallback to simple scene if 3D fails
    if (!use3D) {
        return <SimpleScene />
    }

    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <Canvas 
                camera={{ position: cameraPosition, fov: 50 }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
                onError={() => setUse3D(false)}
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.0} />
                <pointLight position={[-10, -10, -5]} intensity={0.3} color="#3b82f6" />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};