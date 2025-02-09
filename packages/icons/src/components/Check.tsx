 // 本文件由 "@mini-ui/icons/scripts/build.ts" 生成， 禁止手动修改!
import type { IconProps } from "../../index.d.ts"
export function IconCheck (props: IconProps): JSX.Element {
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
    <svg fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 48 48" {...defaultProps}><path d="M41.678 11.05 19.05 33.678 6.322 20.95"/></svg>
  )
}
  