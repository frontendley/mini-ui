 // 本文件由 "@mini-ui/icons/scripts/build.ts" 生成， 禁止手动修改!
import type { IconProps } from "../../index.d.ts"
export function IconAlert (props: IconProps): JSX.Element {
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
    <svg className="icon" viewBox="0 0 1024 1024" {...defaultProps}><path d="M512 244c176.18 0 319 142.82 319 319v233a32 32 0 0 1-32 32H225a32 32 0 0 1-32-32V563c0-176.18 142.82-319 319-319M484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8M177.25 191.66a8 8 0 0 1 11.32 0l67.88 67.88a8 8 0 0 1 0 11.31l-39.6 39.6a8 8 0 0 1-11.31 0l-67.88-67.88a8 8 0 0 1 0-11.31l39.6-39.6zm669.6 0 39.6 39.6a8 8 0 0 1 0 11.3l-67.88 67.9a8 8 0 0 1-11.32 0l-39.6-39.6a8 8 0 0 1 0-11.32l67.89-67.88a8 8 0 0 1 11.31 0M192 892h640a32 32 0 0 1 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24a32 32 0 0 1 32-32m148-317v253h64V575z"/></svg>
  )
}
  