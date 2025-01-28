import { PropsWithChildren } from "react"
import {ColProps} from "./interface"
import { getPrefix, classNames as cls } from "../../utils"

export const Col = (props: PropsWithChildren<ColProps>) => {
  // props 解构
  const {
    span = 24,
    offset = 0,
    className,
    children,
    ...rest 
  } = props

  // class names
  const prefix = getPrefix("col")
  const classNames = cls(
    prefix,
    className,
    {
      [`${prefix}-col-${span}`]: span,
      [`${prefix}-offset-${offset}`]: offset
    }
  )

  return (
    <div
    className={classNames}
    {...rest} 
    >
      { children }
    </div>
  )
}