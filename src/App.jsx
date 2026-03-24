import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import Model from "./components/Model";
import CameraController from "./components/CameraController";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [target, setTarget] = useState(null);

  // ✅ reset target after animation (prevents lock)
  useEffect(() => {
    if (!target) return;

    const timer = setTimeout(() => {
      setTarget(null);
    }, 900);

    return () => clearTimeout(timer);
  }, [target]);

  return (
    <>
      <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <Model setSelected={setSelected} setTarget={setTarget} />

        <CameraController target={target} />

        <OrbitControls />
      </Canvas>

      {selected && (
        <div style={styles.panel}>
          <h3>Selected</h3>
          <p>{selected}</p>
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
    padding: "10px 15px",
    borderRadius: "8px",
  },
};