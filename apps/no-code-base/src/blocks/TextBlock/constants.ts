import { TextBlockType } from "../../types/blocks";

export const TEXT_DEFAULT: Omit<TextBlockType, 'id'> = {
  title: "文本",
  type: "text",
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
