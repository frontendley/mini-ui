import { PropsWithChildren } from "react"
import { getPrefix, classNames as cls } from "../../utils"
import { RowProps } from "./interface"

export const Row = (props: PropsWithChildren<RowProps>) => {

  // props 解构
  const {
    className,
    gutter,
    justify,
    align,
    children,
    ...rest
  } = props

  // class name
  const prefix = getPrefix("row")
  const classNames = cls(
    className,
    prefix,
    {
      [`${prefix}-justify-${justify}`]: justify,
      [`${prefix}-align-${align}`]: align
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