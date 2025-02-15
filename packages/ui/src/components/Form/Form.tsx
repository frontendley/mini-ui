import { FormEvent, PropsWithChildren, useEffect } from "react"
import { FormProps } from "./interface"
import { FromProvider } from "./context"
import { useForm } from "./useForm"

import "./styles/Form.less"
import { classNames as cls, getPrefix } from "../../utils"

const FormInner = <FormData, >(props: PropsWithChildren<FormProps<FormData>>) => {

  // props
  const {
    form,
    initialValue,
    layout = 'horizontal',
    labelAlign = 'left',
    labelCol = { span: 5 },
    wrapperCol = { span: 18, offset: 1},
    requiredSymbol = true,
    children
  } = props

  // status
  const formInstance = useForm(form)  // form 实例

  // effect 初始化form的初始值
  useEffect(() => {
    formInstance.innerSetInitialValues(initialValue)
  }, [])

  // 派生数据
  const formContext = { // form 组件的上下文
    form: formInstance,
    layout: layout,
    labelAlign,
    labelCol,
    wrapperCol,
    requiredSymbol
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
  }


  return (
    <FromProvider value={formContext}>
      <form className={classNames} onSubmit={handleSubmit}>
        {children}
      </form>
    </FromProvider>
  )
}


export default FormInner
