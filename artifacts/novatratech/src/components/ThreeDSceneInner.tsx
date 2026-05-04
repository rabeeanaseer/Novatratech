import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const COLORS = ["#4F7CFF", "#7B61FF", "#00D4FF"];
const N = 22;

function NetworkScene() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useRef(
    Array.from({ length: N }, (_, i) => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 5.4,
        (Math.random() - 0.5) * 5.4,
        (Math.random() - 0.5) * 2.4
      ),
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * 0.007,
        (Math.random() - 0.5) * 0.007,
        (Math.random() - 0.5) * 0.004
      ),
      color: COLORS[i % COLORS.length],
    }))
  );

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(N * N * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const ns = nodes.current;

    for (let i = 0; i < N; i++) {
      const n = ns[i];
      n.pos.add(n.vel);
      if (Math.abs(n.pos.x) > 3.0) n.vel.x *= -1;
      if (Math.abs(n.pos.y) > 3.0) n.vel.y *= -1;
      if (Math.abs(n.pos.z) > 1.4) n.vel.z *= -1;
      const mesh = meshRefs.current[i];
      if (mesh) mesh.position.copy(n.pos);
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0022;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.11) * 0.09;
      groupRef.current.rotation.z = state.mouse.x * 0.07;
    }

    const arr = lineGeo.attributes.position.array as Float32Array;
    let idx = 0;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const d = ns[i].pos.distanceTo(ns[j].pos);
        if (d < 2.6) {
          arr[idx++] = ns[i].pos.x; arr[idx++] = ns[i].pos.y; arr[idx++] = ns[i].pos.z;
          arr[idx++] = ns[j].pos.x; arr[idx++] = ns[j].pos.y; arr[idx++] = ns[j].pos.z;
        }
      }
    }
    for (; idx < arr.length; idx++) arr[idx] = 0;
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.setDrawRange(0, idx / 3);
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#4F7CFF" transparent opacity={0.38} />
      </lineSegments>
      {nodes.current.map((n, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
            if (el) el.position.copy(n.pos);
          }}
        >
          <sphereGeometry args={[0.065, 8, 8]} />
          <meshBasicMaterial color={n.color} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeDSceneInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 48 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
    >
      <NetworkScene />
    </Canvas>
  );
}
