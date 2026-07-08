import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#c89b6d" />
    </mesh>
  );
}

function Viewer3D() {
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
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <Cube />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Viewer3D;