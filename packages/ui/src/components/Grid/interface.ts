import { CSSProperties, HTMLAttributes } from "react";

type GridResponsiveBreakPoint = 'sm' | 'md' | 'lg' | 'xs' | 'xl' | 'xxl' | 'xxxl'

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
  gutter?: number | Partial<Record<GridResponsiveBreakPoint, number>>
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
}