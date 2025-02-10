import { TextBlockType } from "../../types/blocks";

export const textDefault:TextBlockType = {
  title: "文本",
  type: "text",
  id: `text-${Date.now()}`,
  props: {
    size: {
      width: 10,
      height: 10,
      widthUnit: 'px',
      heightUnit: 'px'
    },
    text: "123" 
  }
}
