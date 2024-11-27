import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {isUndefined} from "../utils";
import {usePrevious} from "./usePrevious";

interface Option<T> {
  defaultValue?: T;
  value?: T;
}

/**
 * @desc 处理非受控组件与受控组件的value值的变化， 核心就是需要实现： 当存在value时， 返回value的值， 否则返回state的值
 * */
export function useMergeState<T>(
    defaultStateValue: T,
    options: Option<T>
): [T, Dispatch<SetStateAction<T>>, T] {
  // options
  const {value, defaultValue} = options

  // meta data
  const firstUpdateRef = useRef<boolean>(true)
  const [state, setState] = useState<T>(
      !isUndefined(value)
          ? value
          : (!isUndefined(defaultValue) ? defaultValue : defaultStateValue)
  )
  const prevState = usePrevious(state)

  // 派生数据
  const mergedState = isUndefined(value) ? state : value

  // 副作用
  /**
   * @desc 处理场景： 当value的值变更， 且为undefined， 要对返回值进行兜底操作
   * */
  useEffect(() => {
    // 初始化时已经处理过了， 此时目标主要是为了处理value值发生变更并且变为undefined
    if (firstUpdateRef.current) {
      firstUpdateRef.current = false
      return
    }

    /**
     *  prevPropsValue !== value: https://github.com/arco-design/arco-design/issues/1686
     *  需要进行边界处理，react18 严格模式下 useEffect 执行两次，触发未加相同判断时的逻辑，可能出现 defaultValue 不生效的问题。
     * */
    if (value === undefined && prevState !== value) {
      setState(value as T)
    }
  }, [value])
  return [mergedState, setState, state]
}