import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Cube({ image }) {
  const texture = image
    ? useLoader(THREE.TextureLoader, image)
    : null;

  return (
    <mesh>
      <boxGeometry args={[3, 2, 0.2]} />

      <meshStandardMaterial
        map={texture}
        color={texture ? "white" : "orange"}
      />
    </mesh>
  );
}

function Viewer3D({ image }) {
  return (
    <div
      style={{
        width: "65%",
        minHeight: "500px",
        border: "2px solid #3b82f6",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.8} />

        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Cube image={image} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Viewer3D;