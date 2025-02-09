import { MouseEvent } from "react"
import { classNames as cls, getPrefix } from "../../utils";

import { SwitchProps } from "./interface";
import { useMergeState } from "../../hooks/useMergeState";
import { IconLoading } from "../../../../icons/src";

function Switch (props: SwitchProps) {

  // props
  const {
    className,
    loading,
    disabled,
    type  = "circle",
    size = "default",
    checked,
    defaultChecked,
    checkedText,
    uncheckedText,
    checkedIcon,
    uncheckedIcon,
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
      [`${prefix}-${size}`]: size,
      [`${prefix}-loading`]: loading,
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
      disabled={disabled}
      role="switch"
      className={classNames}
      onClick={handleClick} 
    >
      <div className={`${prefix}-dot`}>
      {!loading && (checkedIcon || uncheckedIcon) && (
              <span className={`${prefix}-dot-icon`}>
                {mergedChecked ? checkedIcon : uncheckedIcon}
              </span>
        )}

        {loading && (
          <span className={`${prefix}-dot-icon`}>
            <IconLoading spin/>
          </span>
        )}
      </div>

      {size !== 'small' && type !== 'line' && (checkedText || uncheckedText) && (
        <>
          <div className={`${prefix}-text-holder`}>
            {checkedText && mergedChecked && checkedText}
            {uncheckedText && !mergedChecked && uncheckedText}
          </div>
            <div className={`${prefix}-text`}>
              {checkedText && mergedChecked && checkedText}
              {uncheckedText && !mergedChecked && uncheckedText}
            </div>
        </>
      )}
    </button>
  )
}

export default Switch
