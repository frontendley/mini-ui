import { CSSProperties, PropsWithChildren } from "react"
import {ColProps} from "./interface"
import { getPrefix, classNames as cls } from "../../utils"
import { useRowContext } from "./context"

export const Col = (props: PropsWithChildren<ColProps>) => {
  // props 解构
  const {
    span = 24,
    offset = 0,
    className,
    style,
    children,
    ...rest 
  } = props

  // context
  const { gutter } = useRowContext()

  // 派生数据
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
  // style 根据context gutter计算
  const mergedStyle: CSSProperties = {
    padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
    ...style
  }
  console.log(mergedStyle)

  return (
    <div
    className={classNames}
    style={mergedStyle}
    {...rest} 
    >
      { children }
    </div>
  )
}