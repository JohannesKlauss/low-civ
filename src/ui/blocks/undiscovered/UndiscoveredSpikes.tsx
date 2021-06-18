import React from 'react';
import { MeshProps } from '@react-three/fiber';
import { SURFACE_COLORS } from '../../../const/blocks';

export interface UndiscoveredSpikesProps extends MeshProps{
}

const UndiscoveredSpikes: React.FC<UndiscoveredSpikesProps> = (props) => {
  return (
    <mesh {...props}>
      <mesh scale={1} position={[0.4, 1, -0.8]} rotation={[Math.PI * 0.7, Math.PI * 0.2, Math.PI * 0.15]}>
        <tetrahedronGeometry args={[2]} />
        <meshStandardMaterial color={SURFACE_COLORS.undiscovered} />
      </mesh>

      <mesh scale={1.3} position={[-3, 0.7, -2.5]} rotation={[Math.PI * 0.7, Math.PI * 0.4, Math.PI * 0.15]}>
        <tetrahedronGeometry args={[2]} />
        <meshStandardMaterial color={SURFACE_COLORS.undiscovered} />
      </mesh>

      <mesh scale={1.1} position={[3, 0.7, 2.5]} rotation={[Math.PI * 0.2, Math.PI * 0.2, Math.PI * 0.5]}>
        <tetrahedronGeometry args={[2]} />
        <meshStandardMaterial color={SURFACE_COLORS.undiscovered} />
      </mesh>
    </mesh>
  );
};

export default UndiscoveredSpikes;
