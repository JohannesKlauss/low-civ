import React from 'react';
import { Canvas } from '@react-three/fiber';
import useInitMap from './hooks/game/useInitMap';

function App() {
  useInitMap({
    numOfBlocks: 32,
  })

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}

export default App;
