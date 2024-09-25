import {ButtonProps} from "./interface";
import {
  getPrefix,
  classNames as cls
} from "../../utils/";

export const Button = ({
    disabled = false,
    loading = false,
    status = 'default',
    type = 'default',
    size = 'default',
    className,
    children,
    ...rest
}: ButtonProps) => {
  const prefix = getPrefix("btn")
  const classNames = cls(
      prefix,
      `${prefix}-${type}`,
      `${prefix}-status-${status}`,
      `${prefix}-size-${size}`,
      className
  )

  return <button
      className={classNames}
      {...rest}
  >
    {children}
  </button>
}
