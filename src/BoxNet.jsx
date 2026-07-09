import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function BoxNet({ fold }) {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group}>

      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Front Wall */}
      <mesh
        position={[0, 1, 1]}
        rotation={[fold ? Math.PI / 2 : 0, 0, 0]}
      >
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Back Wall */}
      <mesh
        position={[0, 1, -1]}
        rotation={[fold ? -Math.PI / 2 : 0, 0, 0]}
      >
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Left Wall */}
      <mesh
        position={[-1, 1, 0]}
        rotation={[0, fold ? Math.PI / 2 : 0, 0]}
      >
        <boxGeometry args={[0.1, 2, 2]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {/* Right Wall */}
      <mesh
        position={[1, 1, 0]}
        rotation={[0, fold ? -Math.PI / 2 : 0, 0]}
      >
        <boxGeometry args={[0.1, 2, 2]} />
        <meshStandardMaterial color="yellow" />
      </mesh>

    </group>
  );
}

export default BoxNet;