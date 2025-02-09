import { CSSProperties, HTMLAttributes, MouseEvent } from "react";

export interface SwitchProps extends 
  Omit<HTMLAttributes<HTMLButtonElement>, 'className' | 'onChange'> {
  /**
   * @desc 开关是否打开
   * */
  checked?: boolean;
  /**
   * @desc 是否默认选中
   * */ 
  defaultChecked?: boolean;
  /**
   * @desc 是否禁用
   * */ 
  disabled?: boolean;
  /**
   * @desc 加载中状态
   * */ 
  loading?: boolean;
  /**
   * @desc 尺寸
   * */ 
  size?: 'small' | 'default';
  /**
   * @zh 三种样式类型
   * */ 
  type?: 'circle' | 'round' | 'line';
  /**
   * @zh 节点类名
   * */ 
  className?: string | string[];
  /**
   * @zh 节点样式
   * */ 
  style?: CSSProperties;
  /**
   * @zh 点击开关的回调函数
   * */ 
  onChange?: (value: boolean, event: MouseEvent) => void
}
