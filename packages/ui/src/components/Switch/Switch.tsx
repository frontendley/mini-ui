import { MouseEvent } from "react"
import { classNames as cls, getPrefix } from "../../utils";

import { SwitchProps } from "./interface";
import { useMergeState } from "../../hooks/useMergeState";

function Switch (props: SwitchProps) {

  // props
  const {
    className,
    loading,
    type  = "circle",
    size = "default",
    checked,
    defaultChecked,
    onChange
  } = props

  // status
  const [mergedChecked, setMergedChecked] = useMergeState<boolean>(
    false,
    {
      value: checked,
      defaultValue: defaultChecked
    }
  )

  // 派生数据
  // className
  const prefix = getPrefix('switch')
  const classNames = cls(
    prefix,
    {
      [`${prefix}-type-${type}`]: type,
      [`${prefix}-size-${size}`]: size,
      [`${prefix}-checked`]: mergedChecked
    },
    className
  )

  // 事件处理
  function handleClick(event: MouseEvent<HTMLButtonElement>) {

    // 如果加载中， 不响应事件
    if (loading)
      return

    // 响应 click 事件
    props?.onClick?.(event)
    // 是否更新内部的值
    if (!('value' in props)) {
      setMergedChecked(!mergedChecked)
    }
    // 响应 onChange 事件
    onChange?.(!mergedChecked, event)
  }

  return (
    <button
      role="switch"
      className={classNames}
      onClick={handleClick} 
    >
      <div className={`${prefix}-dot`}></div>
    </button>
  )
}

export default Switch
