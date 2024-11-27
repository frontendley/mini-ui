import {isFunction} from "../../utils"
import {InputProps, InputRef} from "./type"
import {ChangeEvent, forwardRef, useImperativeHandle, useRef} from "react"
import {useMergeState} from "../../hooks/useMergeState";

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  // props
  const {
    defaultValue,
    ...rest
  } = props
  // 元数据
  const inputRef = useRef<HTMLInputElement>(null) // input元素的ref实例
  const [value, setValue] = useMergeState<string>(
      '',
      {
        defaultValue: defaultValue,
        value: props.value
      }
  ) // input组件值

  // event 事件处理
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!('value' in props)) { //TODO: 状态补全
      setValue(event.target.value)
    }

    isFunction(props.onChange) && props.onChange(event.target.value, event)
  }

  // 向上层暴露ref
  useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => {
            isFunction(inputRef.current?.focus) && inputRef.current?.focus()
          },
          blur: () => {
            isFunction(inputRef.current?.blur) && inputRef.current?.blur()
          },
          dom: inputRef.current
        }
      },
      []
  )

  return (
      <input
          ref={inputRef}
          {...rest}
          value={value}
          onChange={handleChange}
      />
  )
})