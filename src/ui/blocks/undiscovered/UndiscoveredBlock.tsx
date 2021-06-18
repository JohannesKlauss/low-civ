import React from 'react';
import { MeshProps } from '@react-three/fiber';
import UndiscoveredSpikes from './UndiscoveredSpikes';
import { BOX_GEOMETRY_BLOCK, SURFACE_COLORS } from '../../../const/blocks';
import Fog from '../../fx/Fog';

export interface UndiscoveredBlockProps extends MeshProps {
  showFog?: boolean;
}

const UndiscoveredBlock: React.FC<UndiscoveredBlockProps> = ({ showFog, children, ...props }) => {
  return (
    <mesh
      {...props}
    >
      <mesh scale={1}>
        <boxGeometry args={BOX_GEOMETRY_BLOCK} />
        <meshStandardMaterial color={SURFACE_COLORS.undiscoveredHighlights} />
      </mesh>

      <UndiscoveredSpikes scale={1} rotation={[0, 0, 0]} />
      <UndiscoveredSpikes scale={0.8} rotation={[0, Math.PI * 0.65, 0]} />
      <UndiscoveredSpikes scale={0.9} rotation={[0, - Math.PI * 0.55, 0]} />

      <Fog position={[0.8, 1.3, 0.8]} scale={1.3}/>
      {children}
    </mesh>
  );
};

export default UndiscoveredBlock;
