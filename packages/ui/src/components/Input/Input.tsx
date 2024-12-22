import {isArray, isFunction, isObject} from "../../utils"
import {InputProps, InputRef} from "./type"
import type { CompositionEvent, ChangeEvent, FocusEvent } from "react";
import {forwardRef, useImperativeHandle, useRef} from "react"
import {useMergeState} from "../../hooks/useMergeState";
import { useComposition } from "./hooks/useComposition";

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  // props
  const {
    defaultValue,
    maxLength: propMaxLength,
    showWordLimit,
    suffix: propSuffix,
    normalize,
    normalizeTrigger,
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
  const handleChange = (value: string, event: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement>) => {
    if (!('value' in props)) { //TODO: 状态补全
      setValue(value)
    }

    isFunction(props.onChange) && props.onChange(value, event)
  }

  // 获取normalize
  const normalizeTriggerHandler = (type: "onPressEnter" | "onBlur") => {
    const triggers = normalizeTrigger || ['onBlur']
    if(
      isArray(triggers)
      && triggers.indexOf(type) > -1
      && isFunction(normalize)
    )
      return normalize
  }

  const {
    compositionValue,
    handleComposition,
    valueChangeHandler,
    triggerChange
  } = useComposition({
    value,
    onChange: handleChange
  })


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
            value={compositionValue || value}
            onChange={valueChangeHandler}
            onBlur={(event: FocusEvent<HTMLInputElement>) => {
              props?.onBlur?.(event)

              const normalizeHandler = normalizeTriggerHandler("onBlur")
              normalizeHandler && triggerChange(normalizeHandler(value), event)
            }}
            onCompositionStart={(event: CompositionEvent<HTMLInputElement>) => {
              props?.onCompositionStart?.(event)
              handleComposition(event)
            }}
            onCompositionUpdate={(event: CompositionEvent<HTMLInputElement>) => {
              props?.onCompositionUpdate?.(event)
              handleComposition(event)
            }}
            onCompositionEnd={(event: CompositionEvent<HTMLInputElement>) => {
              props?.onCompositionEnd?.(event)
              handleComposition(event)
            }}
        />
        {suffix}
      </div>
  )
})