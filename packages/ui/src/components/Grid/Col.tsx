import { PropsWithChildren } from "react"
import {ColProps} from "./interface"
import { getPrefix, classNames as cls } from "../../utils"

export const Col = (props: PropsWithChildren<ColProps>) => {
  const {
    span = 24,
    className,
    children,
    ...rest 
  } = props

  const prefix = getPrefix("col")
  const classNames = cls(
    prefix,
    className,
    {
      [`${prefix}-${span}`]: span
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