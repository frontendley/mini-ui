import { CSSProperties, MouseEvent, ReactNode, useRef } from "react"
import { classNames } from "../../utils"
import { InputWrapperProps } from "./type";

function computedElement(
  element?: ReactNode,
  cls?: string,
  style?: CSSProperties
) {
  return element ? 
    (
      <span className={cls} style={style}>
        { element }
      </span>     
    )
    : null
}

export function InputWrapper(props: InputWrapperProps) {
  const {
    focus,
    onFocus,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    children,
  } = props


  // 派生数据
  const baseCls = 'mini-input'

  const inputWrapperCls = classNames(
    `${baseCls}-wrapper`,
    {
      [`${baseCls}-wrapper-focused`]: focus
    }
  )

  // event
  const handleInputWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    onFocus?.(e)
  }

  return (
    <span 
      className={inputWrapperCls}
      onClick={handleInputWrapperClick}
    >
      { computedElement(addonBefore, `${baseCls}-addon-before`)}
      { computedElement(prefix, `${baseCls}-suffix`)}
      { children }
      { computedElement(suffix, `${baseCls}-suffix`)}
      { computedElement(addonAfter, `${baseCls}-addon-after`)}
    </span>
  )
}