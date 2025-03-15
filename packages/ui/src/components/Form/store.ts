import { isArray } from "../../utils";
import { FieldErrorType, FieldKeyType, FormProps, StoreSubscriberProtocol, StoreChangeInfo, StoreChangeType } from "./interface"
import { cloneDeep, get, set } from "lodash-es"

type StoreCallbacks<FormData> = Pick<
  FormProps<FormData>,
  'onValuesChange' | 'onChange' | 'onSubmit' | 'onSubmitFaild'
>

export class Store<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FormData = any,
  FieldKey extends FieldKeyType = keyof FormData
> {
  store: Partial<FormData>; // 存放 form 数据
  initialValues: Partial<FormData>; // form 表单的初始值

  subscribers: StoreSubscriberProtocol<FormData> = {} // Control 组件中注册的 FormItem 相关操作
  callbacks: StoreCallbacks<FormData> = {} // 存放 form 组件通过 props 传入的回调函数

  constructor() {
    this.store = {}
    this.initialValues = {}
    // this.registerFieldChangeCallbacks = {}
  }

  /**
   * @desc 任何变更引发 store 变更的事件， 都会通知 form 的 onValuesChange
   * */
  private triggerValueChange(changeValues: Partial<FormData>) {
    if (changeValues && Object.keys(changeValues).length) {
      this.callbacks?.onValuesChange?.(changeValues, this.getFields())
    }
  }

  /**
   * @desc Control 触发内部 store 发生变更后通知 form 中的 onChange
   * */
  private triggerTouchChange(changeValues: Partial<FormData>) {
    if (changeValues && Object.keys(changeValues).length) {
      this.callbacks?.onChange?.(changeValues, this.getFields())
    }
  }

  /**
   * @desc Control 中触发改变事件后， 同步 store 中的状态。
   * */
  innerSetFieldValue(field?: FieldKey, value?: string) {
    if (!field) return
    this.store = {
      ...this.store,
      [field]: value
    }

    this.triggerTouchChange({ [field]: value } as Partial<FormData>)
    this.triggerValueChange({ [field]: value } as Partial<FormData>)

    this.notifyStoreChange(
      'innerSetValue',
      {
        field,
        value: value as FormData[keyof FormData]
      }
    )
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

    // 触发内部 store 的变更
    this.triggerValueChange(values)
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
   * @desc 注册 Form props 中的事件 onChange、onValuesChange、onSubmit、 onSubmitFailed
   * */
  innerRegisterEventCallbacks(callbacks: StoreCallbacks<FormData>) {
    this.callbacks = callbacks
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
   * -------------------------------- 外界调用方法 --------------------------------
   * */

  /**
   * @desc 手动触发组件内部的校验规则
   * */
  async validate(fields?: string[], callback?: (errors: FieldErrorType[], values: Partial<FormData>) => void) {
    fields = isArray(fields) ? fields : Object.keys(this.store)
    const promises = fields.map(field => {
      return this.subscribers?.[field]?.validate(this.getFieldValue(field))
    })

    return Promise
      .all(promises)
      .then((errors) => {
        callback?.(errors, this.store)
        return errors
      })
  }

  /**
   * @desc 外部设置单个 field 的值。
   * */
  setFieldValue(field: FieldKeyType, value: FormData[keyof FormData]) {

    this.setFields({
      [field]: {
        value
      }
    })
  }

  /**
   * @desc 外部设置 form 表单的值  
   * */
  setFields(obj: Record<FieldKeyType, Omit<StoreChangeInfo<FormData>, 'field'>>) {
    const keys = Object.keys(obj)
    const changeValues: Partial<FormData> = {}

    keys.forEach(field => {
      const item = obj[field]

      if ('value' in item) {
        set(this.store, field, item.value)
        set(changeValues, field, item.value)
      }

      this.notifyStoreChange(
        'setFieldValue',
        {
          ...item,
          field
        }
      )
    })

    this.triggerValueChange(changeValues)
  }

  /**
   * @desc 外部设置多个表单控件的值
   * */
  setFieldsValue(obj: Record<FieldKey, unknown>) {
    const changedValue = Object.keys(obj)
      .reduce((prev, cur) => {

        return {
          ...prev,
          [cur]: {
            value: obj[cur as keyof typeof obj]
          }
        }
      }, {})

    this.setFields(changedValue)
  }

  /**
   * @desc 重置表单控件的值为初始值
   * */
  resetFields(fields?: string[]) {
    fields = isArray(fields) ? fields : Object.keys(this.store)

    const changeValue = {} as Record<FieldKey, unknown>
    fields?.forEach(field => {
      const value = this.initialValues?.[field as keyof FormData]
      set(changeValue, field, value)
    })

    this.setFieldsValue(changeValue)
  }

  /**
   * @desc 提交表单
   * */
  async submit() {
    const errors = await this.validate()

    if (errors.length) {
      this.callbacks?.onSubmitFaild?.(errors)
      return
    }

    this.callbacks?.onSubmit?.(this.getFields() as FormData)
  }

  /**
   * @desc 发布Store内部的状态变更
   * */
  private notifyStoreChange(type: StoreChangeType, info: StoreChangeInfo<FormData>) {
    this.subscribers?.[info?.field as keyof StoreSubscriberProtocol<FormData>]?.onStoreChange?.(type, info)
  }
}
