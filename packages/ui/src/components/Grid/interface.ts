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
  /**
   * @zh < 576px 响应式栅格
   */
  xs?: number | { [key: string]: unknown };
  /**
   * @zh >= 576px 响应式栅格
   */
  sm?: number | { [key: string]: unknown };
  /**
   * @zh >= 768px 响应式栅格
   */
  md?: number | { [key: string]: unknown };
  /**
   * @zh >= 992px 响应式栅格
   */
  lg?: number | { [key: string]: unknown };
  /**
   * @zh >= 1200px 响应式栅格
   */
  xl?: number | { [key: string]: unknown };
  /**
   * @zh >= 1600px 响应式栅格
   */
  xxl?: number | { [key: string]: unknown };
  /**
   * @zh >= 2000px 响应式栅格
   */
  xxxl?: number | { [key: string]: unknown };
}
