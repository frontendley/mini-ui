import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type SpaceSize = "mini" | "small" | "middle" | "large" | "default" | number;

export interface SpaceProps
   extends Omit<HTMLAttributes<HTMLDivElement>, 'align' | 'className' | 'style'> {
  /**
   * @zh 环绕类型的间距， 用于折行的场景
   * */ 
  wrap?: boolean;
  /**
   * @zh 对齐方式
   * */ 
  align?: "start" | "end" | "center" | "baseline";
  /**
   * @zh 间距方向
   * */
  direction?: "vertical" | "horizontal";
  /**
   * @zh 设置分隔符
   * */  
  split?: ReactNode;
  /**
   * @zh 节点类名
   * */ 
  className?: string | string[];
  /**
   * @zh 尺寸
   * */ 
  size?: SpaceSize | SpaceSize[];
  /**
   * @zh 节点样式
   * */ 
  style?: CSSProperties
}

export interface SpaceItemProps 
  extends HTMLAttributes<HTMLDivElement> {
}