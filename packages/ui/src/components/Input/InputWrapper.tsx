import { CSSProperties, MouseEvent, ReactNode, useRef } from "react"
import { classNames } from "../../utils"
import { InputRef, InputWrapperProps } from "./type";

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
    suffix,
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
      { children }
      { computedElement(suffix, `${baseCls}-suffix`)}
    </span>
  )
}