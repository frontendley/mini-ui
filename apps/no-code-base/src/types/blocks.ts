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
  type: string;
  props: {
    size: SizeType;
  }
}

export type TextBlockType= BaseBlock & {
  props: {
    text: string;
  }
}

export type ButtonBlockType = Omit<BaseBlock, 'props'> & {
  props: ButtonProps
}


export type BlockProtocol = TextBlockType
  | ButtonBlockType
