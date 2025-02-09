 // 本文件由 "@mini-ui/icons/scripts/build.ts" 生成， 禁止手动修改!
import type { IconProps } from "../../index.d.ts"
export function IconLoading (props: IconProps): JSX.Element {
  const {
    className = "",
    spin,
    style,
    ...rest
  } = props
  // 处理className
  const classNames = className + (spin ? "mini-icon-spin" : "")
  // 属性合并
  const defaultProps:IconProps = {
    width: "1em",
    height: "1em",
    className: classNames,
    style: style,
    ...rest
  }

  return (
    <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 48 48" {...defaultProps}><path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"/></svg>
  )
}
  