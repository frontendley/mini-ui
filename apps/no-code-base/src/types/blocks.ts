import { ButtonProps } from "@mini-ui/ui";


interface SizeType {
  width: number;
  height: number;
  widthUnit: '%' | 'px';
  heightUnit: '%' | 'px';
}

export interface BaseBlock {
  id: string;
  title: string;
  type: 'text' | 'button';
  props: {
    size: SizeType;
  }
}

export type TextBlockType= BaseBlock & {
  type: 'text',
  props: {
    text: string;
  }
}

export type ButtonBlockType = Omit<BaseBlock, 'props'> & {
  type: 'button',
  props: ButtonProps
}


export type BlockProtocol = TextBlockType
  | ButtonBlockType
