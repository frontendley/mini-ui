import { CSSProperties, forwardRef, Fragment, ReactElement } from "react";
import { SpaceProps, SpaceSize } from "./interface";
import { classNames as cls, getPrefix, isArray, isNumber } from "../../utils";
import { toArray } from "./utils";
import { SpaceItem } from "./SpaceItem";

import "./styles/index.less"

const Space = forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    direction = "horizontal",
    size = 'small',
    wrap,
    align,
    split,
    className,
    style,
    children,
    ...rest
  } = props

  // 派生数据
  // 展开后的Children Nodes
  const childrenNodes = toArray(children)
  const lastChildIndex = childrenNodes?.length - 1
  // class name
  const prefix = getPrefix('space')
  const classNames = cls(
    className,
    prefix,
    {
      [`${prefix}-wrap`]: wrap,
      [`${prefix}-${align}`]: align,
      [`${prefix}-${direction}`]: direction,
    }
  )
  const itemClassNames = cls(`${prefix}-item`)

  function getGap(_size?: SpaceSize) {
    if(isNumber(_size)) {
      return _size
    }
    
    switch(_size) {
      case "mini":
        return 4;
      case "small":
        return 8;
      case "middle":
        return 16;
      case "large":
        return 24;
      default:
        return 8
    }

  }

  function getGapStyle (_size: SpaceSize | SpaceSize[]): CSSProperties {
    if(isArray(_size)) {
      return {
        rowGap: getGap(_size[0]),
        columnGap: getGap(_size[1])
      }
    }
    return {
      gap: getGap(_size)
    }
  }

  return (
    <div 
      className={classNames}
      ref={ref}
      {...rest}
      style={{
        ...getGapStyle(size),
        ...style
      }}
    >
      {
        childrenNodes.map((child, index) => {
          const key = (child as ReactElement)?.key || index
          return (
            <Fragment key={key}>
              <SpaceItem className={itemClassNames}>
                {child}
              </SpaceItem>
              {
                lastChildIndex !== index && split
                ? split
                : null
              }
            </Fragment>
          )
        })
      }
    </div>
  )
})

Space.displayName = "Space"

export default Space
