import { create } from "zustand";
import { BlockProtocol } from "../types/blocks";
import { generateDefaultBlock } from "../utils";

export type BlocksTree = Pick<BlockProtocol, 'id' | 'type'> & {
  children?: BlocksTree[]
}

export interface BlockStore {
  blocksTree: BlocksTree[];
  blocks: Record<string, BlockProtocol>;
  activeBlock: null | BlockProtocol;
  initialBlocks: (block: BlockStore['blocks']) => void;
  initialBlocksTree: (blocksTree: BlockStore['blocksTree']) => void;
  insertBlock: (block: BlockProtocol['type']) => void;
  setActiveBlock: (id: string) => void;
  updateBlocks: (block: BlockProtocol) => void
}

export const useBlockStore = create<BlockStore>((set, get) => {
  return {
    blocksTree: [],
    blocks: {},
    activeBlock: null,
    initialBlocks: (blocks: BlockStore['blocks']) => {
      set((state) => {
        return {
          ...state,
          blocks
        }
      })
    },
    initialBlocksTree: (blocksTree: BlockStore['blocksTree']) => {
      set((state) => {
        return {
          ...state,
          blocksTree
        }
      })
    },
    insertBlock: (type: BlockProtocol['type']) => {
      const block = generateDefaultBlock(type)
      if(!block){
        return
      }

      set(state => {
        return {
          ...state,
          blocksTree: [...state.blocksTree, {
            id: block.id,
            type: block.type
          }],
          blocks: {
            ...state.blocks,
            [block.id]: block
          }
        }
      })
    },
    setActiveBlock: (id: string) => {
      set(() => {
        return {
          activeBlock: get().blocks[id]
        }
      })
    },
    updateBlocks: (block: BlockProtocol) => {
      set(state => {
        return {
          blocks: {
            ...state.blocks,
            [block.id]: block
          }
        }
      })
    }
  }
})
