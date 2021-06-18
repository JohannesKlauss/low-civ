import React from 'react';
import { useRecoilValue } from 'recoil';
import { mapStore } from '../../recoil/mapStore';
import { BlockType } from '../../const/blocks';
import UndiscoveredBlock from '../blocks/undiscovered/UndiscoveredBlock';
import LandBlock from '../blocks/LandBlock';
import { ClimateZone } from '../../const/world';
import MountainBlock from '../blocks/MountainBlock';

export interface MapProps {

}

const Map: React.FC<MapProps> = ({}) => {
  const blocks = useRecoilValue(mapStore.blocks);

  if (blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map(block => {
        if (!block.isDiscovered) {
          return <UndiscoveredBlock key={block.id} position={block.position}/>
        }

        switch (block.type) {
          case BlockType.LAND:
            return <LandBlock key={block.id} climateZone={ClimateZone.DRY} position={block.position} />
          case BlockType.MOUNTAIN:
            return <MountainBlock key={block.id} position={block.position} />
          default:
            return <UndiscoveredBlock key={block.id} position={block.position}/>
        }
      })}
    </>
  );
};

export default Map;
