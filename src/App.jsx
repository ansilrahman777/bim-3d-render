import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./components/Model";
import { useEffect, useState } from "react";
import CameraController from "./components/CameraController";
export default function App() {
  const [selected, setSelected] = useState(null);
  const [target, setTarget] = useState(null);

useEffect(() => {
  if (!target) return;

  const timer = setTimeout(() => {
    setTarget(null); // release control
  }, 900);

  return () => clearTimeout(timer);
}, [target]);

  return (
    <>
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <Model setSelected={setSelected} setTarget={setTarget} />
        <CameraController target={target} />

        <OrbitControls />
      </Canvas>

      {selected && (
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          {selected}
        </div>
      )}
    </>
  );
}

const styles = {
  panel: {
    position: "absolute",
    top: 20,
    left: 20,
    background: "white",
    padding: "10px",
  },
};
