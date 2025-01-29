import { PropsWithChildren, useEffect, useState } from "react"
import { getPrefix, classNames as cls, isArray, isObject } from "../../utils"
import { Gutter, RowProps } from "./interface"
import { RowProvider } from "./context"
import { responsiveArray, ScreenMap, useResponsiveObserver } from "../../hooks/useResponsiveObserver"

export const Row = (props: PropsWithChildren<RowProps>) => {

  // props 解构
  const {
    className,
    gutter = 0,
    justify,
    align,
    children,
    ...rest
  } = props

  // status
  const responsiveObserver = useResponsiveObserver()
  const [screenMap, setScreenMap] = useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  })

  // 派生数据
  // class name
  const prefix = getPrefix("row")
  const classNames = cls(
    className,
    prefix,
    {
      [`${prefix}-justify-${justify}`]: justify,
      [`${prefix}-align-${align}`]: align
    }
  )
  // context
  const rowContext = {
    gutter: [
      getGutter(isArray(gutter) ? gutter[0] : gutter),
      getGutter(isArray(gutter) ? gutter[1] : 0)
    ]
  }

  // effect
  useEffect(() => {
    const index = responsiveObserver.subscribe((_screenMap) => {
      setScreenMap(_screenMap)
    })

    return () => {
      responsiveObserver.unsubscribe(index)
    }
  }, [])

  function getGutter(_gutter: Gutter) {
    let result = 0;
    if(isObject(_gutter)) {
      for(const breakpoint of responsiveArray) {
        if(_gutter[breakpoint] && screenMap[breakpoint]) {
          result = _gutter[breakpoint]
          break
        }
      }
    } else {
      result = _gutter
    }

    return result
  }

  return (
    <RowProvider value={rowContext}>
      <div
        className={classNames}
        {...rest}
      >
        {children}
      </div>
    </RowProvider>

  )
}
