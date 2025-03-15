import { SchemaRuleType } from "b-validate"
import { ColProps } from "../Grid";
import { Store } from "./store";
import { ReactNode } from "react";

export type FormLayout = 'vertical' | 'horizontal' | 'inline'
export type FieldKeyType = string | number | symbol

export type ErrorType = {
  message: ReactNode;
  requiredError: boolean,
  type: string;
  value: string;
}

export type FieldErrorType = Partial<Record<FieldKeyType, ErrorType[]>> | null

export type RuleProps = SchemaRuleType & {
  validateTrigger?: string | string[];
  // 校验失败时候以 `error` 或 `warning` 形式展示错误信息。当设置为 `warning` 时不会阻塞表单提交
  validateLevel?: 'error' | 'warning';
}

/**
 * @desc 当 Store 被触发需要直接修改 Control 内部值时的 type 种类。
 * */
export type StoreChangeType = 'innerSetValue' | 'setFieldValue'

/**
 * @desc 当 Store 被触发需要直接修改 Control 内部值时的 info 类型。
 * */
export interface StoreChangeInfo<FormData> {
  field?: FieldKeyType;
  value?: FormData[keyof FormData];
  errors?: FieldErrorType;
}

/**
 * @desc 注册进入store的回调函数的协议
 * */
export type StoreSubscriberProtocol<FormData> = Record<
  FieldKeyType,
  {
    validate: (value?: FormData[keyof FormData]) => Promise<FieldErrorType>;
    onStoreChange: (type: StoreChangeType, info: StoreChangeInfo<FormData>) => void
  }
>

/**
 * @desc FormContext 和 FormItem 和 FormProps 共用的 API
 * */
export interface CommonProps {
  /**
   * @zh 标签的文本对齐方式
   * */
  labelAlign?: 'left' | 'right'

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

  /**
   * @zh 是否在 required 的时候显示加重的红色星号， 可通过设置 position 设定展示在 label 的位置（'start' | 'end'）
   * */
  requiredSymbol?: boolean | { position: "start" | "end" }

  /**
   * @zh 是否显示标签后的一个冒号
   * */
  colon?: boolean | ReactNode
}

export interface FormContextType extends CommonProps {
  /**
   * @zh form实例
   * */
  form?: Store
}

export interface FormItemProps extends CommonProps {
  /**
   * @zh 标签的文本
   * */
  label?: string;
  /**
   * @zh 受控组件的唯一标识
   * */
  field?: FieldKeyType;
  /**
   * @zh 字段的校验规则
   * */
  rules?: RuleProps[]
  /**
   * @zh 校验状态
   * */
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
}

export interface FormProps<FormData> extends CommonProps {
  /**
   * @zh 表单实例
   * */
  form?: Store<FormData>;
  /**
   * @zh 设置form表单的初始值
   * */
  initialValue?: Partial<FormData>
  /**
   * @zh 表单项值改变时触发， 和 onValuesChange 不同的是只会在用户操作表单项时触发。 
   * */
  onChange?: (value: Partial<FormData>, values: Partial<FormData>) => void;
  /**
   * @zh 任意表单项值改变时候触发。第一个参数是被改变表单项的值，第二个参数是所有的表单项值
   * */
  onValuesChange?: (value: Partial<FormData>, values: Partial<FormData>) => void;
  /**
   * @zh 数据验证成功后的回调事件
   * */
  onSubmit?: (values: FormData) => void;
  /**
   * @zh 数据验证失败后回调事件
   * */
  onSubmitFaild?: (errors: FieldErrorType[]) => void
}

export interface ControlProps {
  /**
   * @zh 受控组件的唯一标识
   * */
  field?: FieldKeyType;
  /**
   * @zh 字段的校验规则
   * */
  rules?: RuleProps[]
  /**
   * @zh 校验状态
   * */
  validateStatus?: 'success' | 'warning' | 'error' | 'validating';
  /**
   * @zh 发生错误时的调用函数
   * */
  onError?: (error: FieldErrorType) => void
}

export interface FormItemTipProps {
  /**
   * @zh 传递需要展示提醒的信息
   * */
  tips?: ErrorType[];

  /**
   * @zh form tip 的 className 前缀
   * */
  prefixCls: string;
  /**
   * @zh 传递信息的类型
   * */
  type?: "error" | "warning";
}
