import { Store } from "./store";

export interface FormContextType {
  /**
   * @zh form实例
   * */ 
  form?: Store
}

export interface FormItemProps {
  /**
   * @zh 标签的文本
   * */ 
  label?: string;
  /**
   * @zh 受控组件的唯一标识
   * */ 
  field?: string;
}

export interface FormProps {
  form: Store
}
