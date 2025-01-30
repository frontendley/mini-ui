import {ButtonProps} from "./interface";
import {
  getPrefix,
  classNames as cls,
} from "../../utils/";
import { Icon } from "../Icon/Icon";
import { MouseEventHandler } from "react";

export const Button = ({
    disabled = false,
    loading = false,
    status = 'default',
    type = 'default',
    size = 'default',
    long = false,
    shape = "square",
    className,
    htmlType,
    children,
    onClick,
    ...rest
}: ButtonProps) => {
  const prefix = getPrefix("btn")
  const classNames = cls(
      prefix,
      `${prefix}-${type}`,
      `${prefix}-status-${status}`,
      `${prefix}-size-${size}`,
      `${prefix}-shape-${shape}`,
      {
        [`${prefix}-long`]: long,
        [`${prefix}-disabled`]: disabled
      },
      className
  )

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    if(loading || disabled) {
      e.preventDefault?.();
    }

    onClick?.(e)
  }
  return <button
      disabled={loading || disabled}
      className={classNames}
      onClick={handleClick}
      type={htmlType}
      {...rest}
  >
    {
      loading && <Icon spin />
    }
    {children}
  </button>
}
