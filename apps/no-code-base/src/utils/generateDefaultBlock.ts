import { BlockProtocol } from "../types/blocks";
import defaults from "../blocks/defaults"

export function generateDefaultBlock(type: BlockProtocol['type']):BlockProtocol | null {
  switch(type){
    case "text":
      return defaults["textDefault"]
    
    case "button":
      return defaults["buttonDefault"]
      
    default:
      return null
  }
}
