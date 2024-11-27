import {ChangeEvent, InputHTMLAttributes} from "react";

export interface InputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange'
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
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
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
  allowClear?: boolean
}

export interface InputRef {
  focus: () => void;
  blur: () => void;
  dom: HTMLInputElement | null;
}