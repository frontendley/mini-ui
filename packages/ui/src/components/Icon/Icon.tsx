import {CSSProperties, SVGAttributes} from "react";
import { classNames as cs, getPrefix } from "../../utils";


export interface IconProps extends Omit<SVGAttributes<SVGElement>, "className"> {
  className?: string;
  style?: CSSProperties;
  spin?: boolean
}

export function Icon (props: IconProps): JSX.Element {
  const { className, spin, style, ...rest } = props

  const prefix = getPrefix("icon")
  const classNames = cs(
      {
        [`${prefix}-spin`]: spin
      },
      className
  )

  const defaultProps = {
    width: "1em",
    height: "1em",
    // fill: "currentColor",
  }
  return (
      <svg
        viewBox="0 0 48 48"
        className={classNames}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        { ...defaultProps }
        { ...rest }
      >
        <path d="M42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6" strokeLinecap="butt"></path>
      </svg>
  )
}