import { FieldKeyType, StoreSubscriberProtocol } from "./interface"
import { cloneDeep, get, set } from "lodash-es"

export class Store<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FormData = any,
    FieldKey extends FieldKeyType = keyof FormData
> {
  store: Partial<FormData>;
  initialValues: Partial<FormData>;

  private subscribers: StoreSubscriberProtocol<FormData> = {}

  // private registerFieldChangeCallbacks: Partial<Record<FieldKey, ((value: unknown) => void)>>;  // 注册的回调函数，主要用于外界操作store。

  constructor() {
    this.store = {}
    this.initialValues = {}
    // this.registerFieldChangeCallbacks = {}
  }

  innerSetFieldValue(field?: FieldKey, value?: string) {
    if (!field) return
    this.store = {
      ...this.store,
      [field]: value
    }
  }

  /**
   * @desc 内部初始化
   * */
  innerSetInitialValues = (values?: Partial<FormData>) => {
    if (!values) return;
    this.initialValues = cloneDeep(values);

    Object.keys(values).forEach((field) => {
      set(this.store, field, values[field as keyof Partial<FormData>]);
    });
  };

  innerGetFieldValue(field?: FieldKey) {
    if (!field)
      return ''
    return get(this.store, field)
  }

  getFieldsValue() {
    return this.store
  }

  getFieldValue(field: string) {
    return get(this.store, field)
  }

  getFields() {
    return cloneDeep(this.store)
  }

  setInitialValues(values: Partial<FormData>) {
    this.initialValues = cloneDeep(values)
    this.store = {
      ...(this.store || {}),
      ...values
    }
  }


  /**
   * @desc store 发布订阅注册符合协议的订阅
   * */ 
  innerRegistFieldCallback(field: FieldKey, subscriber: StoreSubscriberProtocol<FormData>[FieldKey]) {

    this.subscribers = {
      ...this.subscribers,
      [field]: subscriber
    }
  }

  /**
   * @desc 手动触发组件内部的校验规则
   * */ 
  validate() {
    Object.keys(this.subscribers)?.forEach(key => this.subscribers?.[key]?.validate(this.getFieldValue(key)))
  }

  // /**
  //  * @description 组件内部的更新函数订阅store的状态变更
  //  * */
  // private registerField(field: FieldKey, func: (value: unknown) => void) {
  //   this.registerFieldChangeCallbacks[field] = func
  // }
  //
  // /**
  //  * @desc 发布Store内部的状态变更
  //  * */
  // private notifyStoreChange() {
  //   Object.keys(this.registerFieldChangeCallbacks).forEach((field) => {
  //     const func = this.registerFieldChangeCallbacks[field as FieldKey]
  //
  //     func?.()
  //   })
  // }
}
