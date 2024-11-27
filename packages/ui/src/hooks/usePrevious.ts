import {useEffect, useRef} from "react";

export function usePrevious<T>(value: T) {
  const previousValue = useRef<T>(value)

  /**
   * @desc 当useEffect中没有第二个参数时， 对应类组件中的三个生命周期: componentDidMount, componentDidUpdate, componentWillUnMount
   * 此时就是每当组件更新渲染完成后， 才会更新ref的值
   * */
  useEffect(() => {
    previousValue.current = value
  })
  return previousValue.current
}