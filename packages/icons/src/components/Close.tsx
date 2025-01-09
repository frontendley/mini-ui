 // 本文件由 "@mini-ui/icons/scripts/build.ts" 生成， 禁止手动修改!
import type { IconProps } from "../../index.d.ts"
export function IconClose (props: IconProps): JSX.Element {
  const {
    className = "",
    spin,
    style,
    component: Component,
    children,
    ...rest
  } = props
  // 处理className
  const classNames = className + (spin ? "mini-icon-spin" : "")
  // 属性合并
  const defaultProps:IconProps = {
    width: "1em",
    height: "1em",
    fill: "currenColor",
    className: classNames,
    ...rest
  }

  return (
    <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 48 48" {...defaultProps}><path d="M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"/></svg>
  )
}
  