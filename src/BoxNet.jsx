import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber"; 
import * as THREE from "three";


function BoxNet({ fold, image }) { 
    const texture = image
  ? useLoader(THREE.TextureLoader, image)
  : null;
  if (texture) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
}

  const front = useRef();
  const back = useRef();
  const left = useRef();
  const right = useRef();
  const top = useRef();
  const bottom = useRef();

  const progress = useRef(0);

  useFrame(() => {

    const target = fold ? 1 : 0;

    progress.current = THREE.MathUtils.lerp(
      progress.current,
      target,
      0.08
    );

    const angle = (Math.PI / 2) * progress.current;


    // FRONT opens forward
    front.current.rotation.x = angle;

    // BACK opens backward
    back.current.rotation.x = -angle;

    // LEFT opens left side
    left.current.rotation.z = -angle;

    // RIGHT opens right side
    right.current.rotation.z = angle;

    // TOP opens upward
    top.current.rotation.x = -angle;

    // BOTTOM opens downward
    bottom.current.rotation.x = angle;

  });


  const material = new THREE.MeshStandardMaterial({
  map: texture,
  color: texture ? "white" : "#d97706",
  side: THREE.DoubleSide,
});


  return (
    <group>


      {/* FRONT PANEL */}
      <group ref={front} position={[0,0,1]}>
        <mesh position={[0,0,0]}>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


      {/* BACK PANEL */}
      <group ref={back} position={[0,0,-1]}>
        <mesh>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


      {/* LEFT PANEL */}
      <group ref={left} position={[-1,0,0]}>
        <mesh rotation={[0,Math.PI/2,0]}>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


      {/* RIGHT PANEL */}
      <group ref={right} position={[1,0,0]}>
        <mesh rotation={[0,Math.PI/2,0]}>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


      {/* TOP PANEL */}
      <group ref={top} position={[0,1,0]}>
        <mesh rotation={[Math.PI/2,0,0]}>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


      {/* BOTTOM PANEL */}
      <group ref={bottom} position={[0,-1,0]}>
        <mesh rotation={[Math.PI/2,0,0]}>
          <boxGeometry args={[2,2,0.08]} />
          <primitive object={material} attach="material"/>
        </mesh>
      </group>


    </group>
  );
}

export default BoxNet;