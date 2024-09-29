import {ButtonHTMLAttributes, CSSProperties, ReactNode} from "react";
export interface ButtonProps extends Omit<ButtonHTMLAttributes<any>, "className" | "type"> {
  /**
   * @desc 组件的几种变体形式
   * */  
  type?: "primary" | "default" | "secondary" | "dashed" | "outline" | "text";
  /**
   * @zh
   * 按钮的形状
   * */ 
  shape?: "circle" | "square" | "round";
  /**
   * @zh
   * 按钮的尺寸
   * */
  size?: "mini" | "small" | "default" | "large";
  /**
   * @zh
   * 按钮的状态
   * */
  status?: "success" | "warning" | "danger" | "default";
  /**
   * @zh
   * 是否禁用
   * */
  disabled?: boolean;
  /**
   * @zh
   * 按钮是否处于加载状态
   * */
  loading?: boolean;
  /**
   * @zh
   * 按钮的宽度随父容器进行变化
   * */
  long?: boolean;
  htmlType?: HTMLButtonElement["type"]
  className?: string;
  autoSize?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}