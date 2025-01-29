import {classNames, isArray, isFunction, isObject} from "../../utils"
import {InputProps, InputRef} from "./type"
import type { CompositionEvent, ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import {forwardRef, useImperativeHandle, useRef, useState} from "react"
import {useMergeState} from "../../hooks/useMergeState";
import { useComposition } from "./hooks/useComposition";
import { InputWrapper } from "./InputWrapper";

export const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  // props
  const {
    allowClear = true,
    defaultValue,
    maxLength: propMaxLength,
    showWordLimit,
    suffix: propSuffix,
    normalize,
    normalizeTrigger,
    onPressEnter,
    prefix,
    addonBefore,
    addonAfter,
    status,
    ...rest
  } = props

  // props派生数据
  const inputClassNames = classNames('mini-input')
  const maxLength = isObject(propMaxLength)           // 绑定到input元素上的maxLength的值
      ? propMaxLength?.errorOnly
          ? undefined
          : propMaxLength.length
      : propMaxLength
  const realMaxLength = isObject(propMaxLength) ? propMaxLength.length : propMaxLength      // 计算是否超出长度的值


  // 元数据
  const inputRef = useRef<HTMLInputElement>(null) // input元素的ref实例
  const [focus, setFocus] = useState<boolean>(false)
  const [value, setValue] = useMergeState<string>(
      '',
      {
        defaultValue: defaultValue,
        value: props.value
      }
  ) // input组件值

  // 派生数据
  let suffix = propSuffix
  const isExceedWordLimit = realMaxLength && value?.length > realMaxLength
  if (showWordLimit) {
    const valueLength = value?.length
    suffix = (
        <span className=''>
          {`${valueLength} / ${realMaxLength}`}
        </span>
    )
  }
  // event 事件处理
  const handleChange = (value: string, event: ChangeEvent<HTMLInputElement> | CompositionEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
    if (!('value' in props)) { //TODO: 状态补全
      setValue(value)
    }

    props.onChange?.(value, event)
  }

  // 处理清除事件
  const handleClear = (event: MouseEvent<HTMLSpanElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange('', event as any)
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
    triggerChange,
    keydownHandler
  } = useComposition({
    value,
    onChange: handleChange,
    onKeyDown: props.onKeyDown,
    onPressEnter,
    normalizeTriggerHandler
  })


  // 向上层暴露ref
  useImperativeHandle(
      ref,
      () => {
        return {
          focus: () => {
            inputRef.current?.focus?.()
          },
          blur: () => {
            inputRef.current?.blur?.()
          },
          dom: inputRef.current
        }
      },
      []
  )

  return (
      <InputWrapper
        allowClear={allowClear}
        focus={focus}
        onFocus={() => {
          setFocus(true)
          inputRef.current?.focus()
        }}
        onClear={handleClear}
        suffix={suffix}
        prefix={prefix}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        status={isExceedWordLimit ? 'error' : status}
      >
        <input
            className={inputClassNames}
            ref={inputRef}
            {...rest}
            maxLength={maxLength}
            value={compositionValue || value}
            onChange={valueChangeHandler}
            onBlur={(event: FocusEvent<HTMLInputElement>) => {
              props?.onBlur?.(event)
              setFocus(false)

              const normalizeHandler = normalizeTriggerHandler("onBlur")
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
            onKeyDown={keydownHandler}
        />
      </InputWrapper>
  )
})
