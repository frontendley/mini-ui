import {ChangeEvent, InputHTMLAttributes, ReactNode, CompositionEvent} from "react";

export interface InputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'maxLength'
> {
  /**
   * @zh placehode, 输入框的提示文字
   * */
  placeholder?: string;
  /**
   * @zh input组件的默认值
   * */
  defaultValue?: string;
  /**
   * @zh input组件的值
   * */
  value?: string;
  /**
   * @zh input输入时的回调函数
   * */
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>) => void;
  /**
   * @zh input元素的类名
   * */
  className?: string;
  /**
   * @zh input外部包裹元素的类名
   * */
  wrapperClassName?: string;
  /**
   * @zh 允许清空输入框
   * */
  allowClear?: boolean;
  /**
   * @zh 设置输入框最大输入的长度；设置errorOnly为true后， 超过maxLength会展示error状态。并不限制用户输入
   * */
  maxLength?: number | {
    length: number;
    errorOnly?: boolean;
  };
  /**
   * @zh 是否在输入框的suffix组成部分展示字数统计
   * */
  showWordLimit?: boolean;
  /**
   * @zh Input组件中的后缀内容。
   * */ 
  suffix?: ReactNode;
  /**
   * @zh Input组件中格式化api
   * */ 
  normalize?: (value: string) => string;
  /**
   * @zh Input组件格式化时机
   * */ 
  normalizeTrigger?: ["onBlur" | "onPressEnter"];
}

export interface InputRef {
  focus: () => void;
  blur: () => void;
  dom: HTMLInputElement | null;
}