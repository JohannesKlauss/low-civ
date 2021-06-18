import { ClimateZone } from '../../const/world';
import { useSetRecoilState } from 'recoil';
import { Block, mapStore } from '../../recoil/mapStore';
import { useEffect } from 'react';
import { BlockType } from '../../const/blocks';
import { Vector3 } from 'three';
import { getRandomFloat } from '../../utils/random';

export type MapConfig = {
  numOfBlocks: number;
  dominatingClimateZone?: ClimateZone;
}

export default function useInitMap(config: MapConfig) {
  const setBlocks = useSetRecoilState(mapStore.blocks);

  useEffect(() => {
    console.log('Math.sqrt(config.numOfBlocks)', Math.sqrt(config.numOfBlocks));

    if (!Number.isInteger(Math.sqrt(config.numOfBlocks))) {
      throw new Error('Map size has to be a squared integer');
    }

    const rowLength = Math.sqrt(config.numOfBlocks);
    const startingPosition = -((rowLength / 2) * 10) + 5;

    let posX = startingPosition;
    let posZ = startingPosition - 10;

    const blocks: Block[] = (Array.from(new Array(config.numOfBlocks).keys())).map(id => {
      posX += 10;

      if (id % rowLength === 0) {
        posX = startingPosition;
        posZ += 10;
      }

      const type = Math.random() < 0.8 ? BlockType.LAND : BlockType.MOUNTAIN

      return {
        type,
        isDiscovered: Math.random() > 0.3,
        id: `block-${id}`,
        position: new Vector3(posX, 0, posZ),
      }
    });

    setBlocks(blocks);
  }, [setBlocks, config.numOfBlocks]);
}