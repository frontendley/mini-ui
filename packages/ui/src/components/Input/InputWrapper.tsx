import { CSSProperties, MouseEvent, ReactNode } from "react"
import { classNames } from "../../utils"
import { InputWrapperProps } from "./type";
import { IconClose } from "../../../../icons/src";


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
    allowClear,
    focus,
    onFocus,
    onClear,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    status,
    children,
  } = props


  // 派生数据
  const baseCls = 'mini-input'

  const inputWrapperCls = classNames(
    `${baseCls}-wrapper`,
    {
      [`${baseCls}-wrapper-focused`]: focus,
      [`${baseCls}-wrapper-${status}`]: status
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
      { 
        allowClear 
        ? (
          <span className="mini-input-clear" onClick={onClear}>
            <IconClose className="mini-input-clear-icon"/>
          </span>
        )
        : null
      }
      { computedElement(suffix, `${baseCls}-suffix`)}
      { computedElement(addonAfter, `${baseCls}-addon-after`)}
    </span>
  )
}
