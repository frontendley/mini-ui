import { CSSProperties, PropsWithChildren } from "react"
import {ColProps} from "./interface"
import { getPrefix, classNames as cls, isNumber, isObject } from "../../utils"
import { useRowContext } from "./context"

  export const Col = (props: PropsWithChildren<ColProps>) => {
  // props 解构
  const {
    span = 24,
    offset = 0,
    order,
    className,
    style,
    sm,
    md,
    lg,
    xl, 
    xs,
    xxl,
    xxxl,
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
      [`${prefix}-span-${span}`]: span,
      [`${prefix}-offset-${offset}`]: offset,
      [`${prefix}-order-${order}`]: order,
    },
    getAddaptionClassName(prefix)
  )
  // style 根据context gutter计算
  const mergedStyle: CSSProperties = {
    padding: `${gutter[1] / 2}px ${gutter[0] / 2}px`,
    ...style
  }

  // 辅助函数，获取响应式数据下的className
  function getAddaptionClassName(prefix: string) {
    const screenList = { xs, sm, md, lg, xl ,xxl, xxxl }

    let mergedCls = {}
    Object.entries(screenList).forEach(([screenKey, screenValue]) => {
      if(isNumber(screenValue) && screenValue > 0) {
        mergedCls = {
          ...mergedCls, 
          [`${prefix}-${screenKey}-span-${screenValue}`]: screenValue
        }
      } else if(isObject(screenValue)) {
        mergedCls = {
          ...mergedCls,
          [`${prefix}-${screenKey}-span-${screenValue.span}`]: screenValue.span,
          [`${prefix}-${screenKey}-offset-${screenValue.offset}`]: screenValue.offset,
          [`${prefix}-${screenKey}-order-${screenValue.order}`]: screenValue.order
        }
      }
    })

    return mergedCls
  }
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
