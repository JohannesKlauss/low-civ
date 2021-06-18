import React from 'react'
import { BOX_GEOMETRY_BLOCK, SURFACE_COLORS } from '../../const/blocks';
import { MeshProps } from '@react-three/fiber';
import { ClimateZone } from '../../const/world';

export interface LandBlockProps extends MeshProps {
  climateZone: ClimateZone
}

const LandBlock: React.FC<LandBlockProps> = ({ climateZone, children, ...props }) => {
  return (
    <mesh
      {...props}
    >
      <mesh scale={1}>
        <boxGeometry args={BOX_GEOMETRY_BLOCK} />
        <meshStandardMaterial color={SURFACE_COLORS[climateZone]} />
      </mesh>

      {children}
    </mesh>
  )
}

export default LandBlock
