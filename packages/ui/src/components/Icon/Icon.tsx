import { CSSProperties, SVGAttributes } from "react";
import { classNames as cs, getPrefix, warning } from "../../utils";

// 类型声明， 重载className、style、spin的属性
export interface IconProps extends Omit<SVGAttributes<SVGElement>, "className"> {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function Icon(props: IconProps): JSX.Element {
  const {
    className,
    spin,
    style,
    viewBox,
    component: Component,
    children,
    ...rest
  } = props
  // 处理className
  const prefix = getPrefix("icon")
  const classNames = cs(
    {
      [`${prefix}-spin`]: spin
    },
    className
  )
  // 属性合并
  const defaultProps = {
    width: "1em",
    height: "1em",
    fill: "currenColor",
    className: classNames,
    viewBox,
    ...rest
  }
  // 处理Component
  if (Component) {
    return (
      <Component {...defaultProps} />
    )
  }

  // 处理Children
  warning(
    !Boolean(viewBox),
    "Make sure that you provide correct ViewBox"
  ) 
  return (
    <svg {...defaultProps}>
      {children}
    </svg>
  )
}