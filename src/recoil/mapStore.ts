import { atom, selectorFamily } from 'recoil';
import { BlockType } from '../const/blocks';
import { Vector3 } from 'three';
import { ClimateZone } from '../const/world';

export type Block = {
  id: string;
  type: BlockType;
  isDiscovered?: boolean;
  climateZone?: ClimateZone;
  position: Vector3;
}

const blocks = atom<Block[]>({
  key: 'mapStore/blocks',
  default: []
});

const block = selectorFamily<Block | undefined, string>({
  key: 'mapStore/block',
  get: blockId => ({get}) => get(blocks).find(b => b.id === blockId)
})

export const mapStore = {
  blocks,
  block
};