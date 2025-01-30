import { PropsWithChildren, ReactElement, useState } from "react"
import { FormItemProps } from "./interface"
import { useFormContext } from "./context"
import React from "react"

export const FormItem = (props: PropsWithChildren<FormItemProps>) => {
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
    return React.cloneElement(
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
