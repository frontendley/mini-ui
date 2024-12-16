import {isFunction, isObject} from "../../utils"
import {InputProps, InputRef} from "./type"
import {ChangeEvent, forwardRef, useImperativeHandle, useRef} from "react"
import {useMergeState} from "../../hooks/useMergeState";

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  // props
  const {
    defaultValue,
    maxLength: propMaxLength,
    showWordLimit,
    suffix: propSuffix,
    ...rest
  } = props

  // props派生数据
  const maxLength = isObject(propMaxLength)           // 绑定到input元素上的maxLength的值
      ? propMaxLength?.errorOnly
          ? undefined
          : propMaxLength.length
      : propMaxLength
  const realMaxLength = isObject(propMaxLength) ? propMaxLength.length : propMaxLength      // 计算是否超出长度的值


  // 元数据
  const inputRef = useRef<HTMLInputElement>(null) // input元素的ref实例
  const [value, setValue] = useMergeState<string>(
      '',
      {
        defaultValue: defaultValue,
        value: props.value
      }
  ) // input组件值

  // 派生数据
  let suffix = propSuffix
  if (showWordLimit) {
    const valueLength = value?.length
    suffix = (
        <span className=''>
          {`${valueLength} / ${realMaxLength}`}
        </span>
    )
  }
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
      <div>
        <input
            ref={inputRef}
            {...rest}
            maxLength={maxLength}
            value={value}
            onChange={handleChange}
        />
        {suffix}
      </div>
  )
})