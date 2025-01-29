import { CSSProperties, HTMLAttributes } from "react";
import { Breakpoint } from "../../hooks/useResponsiveObserver";

export interface IRowContext {
  gutter: [number, number]
}


export type Gutter = number | Partial<Record<Breakpoint, number>>

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @zh 竖直对齐方式
   * */ 
  align?: 'start' | 'center' | 'end';
  /**
   * @zh 水平对齐方式
   * */ 
  justify?: CSSProperties['justifyContent'];
  /**
   * @zh 栅格间距
   * */ 
  gutter?: Gutter | Gutter[]
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * @zh 栅格占位数
   * */ 
  span?: number;
  /**
   * @zh 栅格偏移量
   * */ 
  offset?: number;
  /**
   * @zh 控制元素的展示排序
   * */ 
  order?: number;
}