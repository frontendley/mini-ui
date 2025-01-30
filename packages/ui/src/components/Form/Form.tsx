import { PropsWithChildren } from "react"
import { FormProps } from "./interface"
import { FromProvider } from "./context"
import { useForm } from "./useForm"

const FormInner = (props: PropsWithChildren<FormProps>) => {

  // props
  const {
    form,
    children
  } = props

  // status
  const formInstance = useForm(form)  // form 实例

  // 派生数据
  const formContext = { // form 组件的上下文
    form: formInstance
  }


  return (
    <FromProvider value={formContext}>
      <form>
        {children}
      </form>
    </FromProvider>
  )
}


export default FormInner
