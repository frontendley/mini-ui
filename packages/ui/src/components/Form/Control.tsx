import { cloneElement, PropsWithChildren, ReactElement, useState } from "react"
import { useFormContext } from "./context"
import { ControlProps } from "./interface"

export const Control = (props: PropsWithChildren<ControlProps>) => {
    // props
    const {
      field,
      children
    } = props
  
    // context 
    const { form } = useFormContext()

    // status
    const [value, setValue] = useState(form?.innerGetFieldValue(field))
  
    function onValueChange (value: string) {
      setValue(value)
      form?.innerSetFieldValue(field, value)
    }
  
    function cloneChildElement() {
      return cloneElement(
        children as ReactElement,
        {
          value: value,
          onChange: onValueChange
        }  
      )
    }
  
  return (
    <div>
      { cloneChildElement() }
    </div>
  )
}
