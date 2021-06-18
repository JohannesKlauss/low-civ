export const BOX_GEOMETRY_BLOCK: [width: number, height: number, depth: number] = [10, 2, 10]

export const SURFACE_COLORS = Object.freeze({
  dirt: 0x715532,
  sand: 0xfffdff,
  continentalLand: 0x85b03d,
  dryLand: 0x9ca63a,
  desertLand: 0xf9d24e,
  polarLand: 0xd1dffc,
  shore: 0x7fc9f1,
  sea: 0x4f81d8,
  mountain: 0x9a9a9a,
  mountainTop: 0xebfefd,
  undiscovered: 0xadbffa,
  undiscoveredHighlights: 0x464646
})

export enum BlockType {
  LAND,
  MOUNTAIN,
}