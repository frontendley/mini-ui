import { PropsWithChildren } from "react"
import { FormProps } from "./interface"
import { FromProvider } from "./context"
import { useForm } from "./useForm"

import "./styles/Form.less"
import { classNames as cls, getPrefix } from "../../utils"

const FormInner = (props: PropsWithChildren<FormProps>) => {

  // props
  const {
    form,
    layout = 'horizontal',
    labelCol = { span: 5 },
    wrapperCol = { span: 19 },
    children
  } = props

  // status
  const formInstance = useForm(form)  // form 实例

  // 派生数据
  const formContext = { // form 组件的上下文
    form: formInstance,
    layout: layout,
    labelCol,
    wrapperCol
  }
  // class names
  const prefix = getPrefix("form")
  const classNames = cls(
    prefix,
    {
      [`${prefix}-${layout}`]: layout
    }
  )


  return (
    <FromProvider value={formContext}>
      <form className={classNames}>
        {children}
      </form>
    </FromProvider>
  )
}


export default FormInner
