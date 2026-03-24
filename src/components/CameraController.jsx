import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function CameraController({ target }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!target) return;

    console.log("Camera moving to:", target);

    const startPos = camera.position.clone();

    // ✅ dynamic offset
    const direction = new THREE.Vector3(5, 2, -5).normalize();
    const distance = 600;

    const endPos = target.clone().add(direction.multiplyScalar(distance));

    const startTime = performance.now();
    const duration = 800;

    function animate(time) {
      let t = (time - startTime) / duration;
      if (t > 1) t = 1;

      camera.position.lerpVectors(startPos, endPos, t);
      camera.lookAt(target);

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target]);

  return null;
}