import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxNet from "./BoxNet";
 
function Viewer3D({ fold, image}) {
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
      <Canvas dpr={[1, 2]}
  camera={{ position: [4, 4, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <BoxNet fold={fold} image={image} />

        <OrbitControls />
      </Canvas>
    </div> 
  );
}

export default Viewer3D;