import { BlockProtocol } from "../types/blocks";
import { TEXT_DEFAULT, BUTTON_DEFAULT } from "../blocks";

export function generateDefaultBlock(type: BlockProtocol['type']):BlockProtocol | null {
  const blockId = `${type}-${Date.now()}`
  switch(type){
    case "text":
      return {
        ...TEXT_DEFAULT,
        id: blockId 
      }
    
    case "button":
      return {
        ...BUTTON_DEFAULT,
        id: blockId
      }
      
    default:
      return null
  }
}
