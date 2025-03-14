import { FormEvent, PropsWithChildren } from "react"
import { FormProps } from "./interface"
import { FromProvider } from "./context"
import { useForm } from "./useForm"

import "./styles/Form.less"
import { classNames as cls, getPrefix } from "../../utils"
import { useCreate } from "../../hooks/useCreate"

const FormInner = <FormData, >(props: PropsWithChildren<FormProps<FormData>>) => {

  // props
  const {
    form,
    initialValue,
    layout = 'horizontal',
    labelAlign = 'right',
    labelCol = { span: 5 },
    wrapperCol = { span: 18, offset: 1},
    requiredSymbol = true,
    colon = false,
    children
  } = props

  // status
  const formInstance = useForm(form)  // form 实例

  // effect 初始化form的初始值
  useCreate(() => {
    formInstance?.innerSetInitialValues(initialValue)
  })

  // 派生数据
  const formContext = { // form 组件的上下文
    form: formInstance,
    layout: layout,
    labelAlign,
    labelCol,
    wrapperCol,
    requiredSymbol,
    colon
  }
  // class names
  const prefix = getPrefix("form")
  const classNames = cls(
    prefix,
    {
      [`${prefix}-${layout}`]: layout
    }
  )


  // 事件
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    formInstance?.submit()
    // props.
  }


  // 给 form store 注册事件
  formInstance?.innerRegisterEventCallbacks({
    onChange: props.onChange,
    onValuesChange: props.onValuesChange,
    onSubmit: props.onSubmit,
    onSubmitFaild: props.onSubmitFaild
  })

  return (
    <FromProvider value={formContext}>
      <form className={classNames} onSubmit={handleSubmit}>
        {children}
      </form>
    </FromProvider>
  )
}


export default FormInner
