import { cloneElement, PropsWithChildren, ReactElement, useEffect, useState } from "react"
import { useFormContext } from "./context"
import { ControlProps } from "./interface"
import { validate } from "./utils";

export const Control = (props: PropsWithChildren<ControlProps>) => {
  // props
  const {
    field,
    rules,
    validateStatus,
    onError,
    children
  } = props

  // context 
  const { form } = useFormContext()

  // status
  const [value, setValue] = useState(form?.innerGetFieldValue(field))

  function onValueChange(value: string) {
    setValue(value)
    form?.innerSetFieldValue(field, value)
  }

  function cloneChildElement() {
    return cloneElement(
        children as ReactElement,
        {
          value: value,
          onChange: onValueChange,
          status: validateStatus
        }
    )
  }

  async function onValidateValue(_value: FormData[keyof FormData]) {
    const errors = await validate(_value, field, rules)
    onError?.(errors)
  }

  // 副作用

  useEffect(() => {
    if(!field)
      return

    form?.innerRegistFieldCallback(field, {
      validate: onValidateValue
    })
  }, [form])

  return (
      <div>
        {
          cloneChildElement()
        }
      </div>
  )
}
