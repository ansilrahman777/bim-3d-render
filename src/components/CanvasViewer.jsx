import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function CanvasViewer({ setSelected }) {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Model setSelected={setSelected} />

      <OrbitControls />
    </Canvas>
  );
}