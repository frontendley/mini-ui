import { ColProps } from "../Grid";
import { Store } from "./store";

export type FormLayout = 'vertical' | 'horizontal' | 'inline'

export interface FormContextType {
  /**
   * @zh form实例
   * */ 
  form?: Store

  /**
   * @zh 表单的布局
   * */ 
  layout?: FormLayout

  /**
   * @zh label 栅格布局的比例
   * */ 
  labelCol?: ColProps;
  
  /**
   * @zh value 容器的布局比例
   * */ 
  wrapperCol?: ColProps;
}

export interface ControlProps {
  /**
   * @zh 受控组件的唯一标识
   * */ 
  field?: string;
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
  /**
   * @zh 表单实例
   * */ 
  form?: Store;

  /**
   * @zh 表单的布局
   * */ 
  layout?: FormLayout;
  
  /**
   * @zh label 栅格布局的比例
   * */ 
  labelCol?: ColProps;

  /**
   * @zh value 容器的布局比例
   * */ 
  wrapperCol?: ColProps;
}
