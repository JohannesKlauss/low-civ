import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

export default function useCameraZoom() {
  const [zoom, setZoom] = useState(40);

  const { camera } = useThree();

  useHotkeys('q', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setZoom(prevState => Math.max(10, prevState - 10));
  }, [camera, setZoom]);

  useHotkeys('w', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setZoom(prevState => Math.min(1000, prevState + 10));
  }, [camera, setZoom]);

  useEffect(() => {
    camera.zoom = zoom;
    camera.updateProjectionMatrix()
  }, [zoom, camera])
}