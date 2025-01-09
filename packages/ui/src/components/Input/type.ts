import {ChangeEvent, InputHTMLAttributes, ReactNode, CompositionEvent, KeyboardEvent, MouseEvent} from "react";

interface CommonProps {
  /**
   * @zh 允许清空输入框
   * */
  allowClear?: boolean;
  /**
   * @zh Input组件中的后缀内容。
   * */ 
  suffix?: ReactNode;
  /**
   * @zh Input组件中的前缀内容
   * */ 
  prefix?: ReactNode;
  /**
   * @zh Input组件中的前置标签
   * */ 
  addonBefore?: ReactNode;
  /**
   * @zh Input组件中的后置标签
   * */ 
  addonAfter?: ReactNode;
  /**
   * @zh Input组件中的后置标签
   * */ 
  status?: 'error' | 'warning';
}

export interface InputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement> & CommonProps,
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
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => void;
  /**
   * @zh input元素的类名
   * */
  className?: string;
  /**
   * @zh input外部包裹元素的类名
   * */
  wrapperClassName?: string;
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
   * @zh Input组件中格式化api
   * */ 
  normalize?: (value: string) => string;
  /**
   * @zh Input组件格式化时机
   * */ 
  normalizeTrigger?: ["onBlur" | "onPressEnter"];
  /**
   * @zh 按下回车键的回调
   * */ 
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export interface InputWrapperProps extends CommonProps {
  focus: boolean;
  onClear: (e: MouseEvent<HTMLSpanElement>) => void;
  onFocus: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode
}


export interface InputRef {
  focus: () => void;
  blur: () => void;
  dom: HTMLInputElement | null;
}