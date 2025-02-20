import { cloneElement, PropsWithChildren, ReactElement, useEffect } from "react"
import { useFormContext } from "./context"
import { ControlProps, StoreChangeInfo } from "./interface"
import { validate } from "./utils";
import { isArray } from "lodash-es";

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
  // const [value, setValue] = useState(form?.innerGetFieldValue(field))

  function getValue () {
    return form?.innerGetFieldValue(field)
  }

  function onValueChange(value?: string) {
    // setValue(value)
    form?.innerSetFieldValue(field, value)
  }

  function cloneChildElement() {
    if (isArray(children)) {
      return children.map((com, i) => {
        return cloneElement (
          com,
          {
            key: com.key || i
          }
        )
      })
    }
    return cloneElement(
        children as ReactElement,
        {
          value: getValue(),
          onChange: onValueChange,
          status: validateStatus
        }
    )
  }

  async function onValidateValue(_value: FormData[keyof FormData]) {
    const errors = await validate(_value, field, rules)
    onError?.(errors)

    return errors
  }

  function handleStoreChange(info: StoreChangeInfo<FormData>) {
    onValueChange(info.value as unknown as string)

    if(info.errors)
      onError?.(info.errors)
  }

  // 副作用

  useEffect(() => {
    if(!field)
      return

    form?.innerRegistFieldCallback(field, {
      validate: onValidateValue,
      onStoreChange: handleStoreChange
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
