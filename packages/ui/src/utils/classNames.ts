import {isArray, isNumber, isObject, isString} from "./is";
import {warning} from "./warning";

type ClassNamesParams = string | number | Record<string, unknown> | Array<ClassNamesParams> | null | undefined

export function classNames (...params: Array<ClassNamesParams>) {
  const result: Array<string | number> = []
  for (const cls of params) {
    if(!cls) {
      // 非真值，直接跳过处理
      continue
    }
    if(isString(cls) || isNumber(cls)) {
      // string 或者number直接使用
      result.push(cls)
    }else if(isArray(cls)) {
      // 递归处理数组中的每一项
      result.push(classNames(...cls))
    } else if (isObject(cls)) {
      // 遍历object中的每一项，判断value的值，来决定是否跳过key值
      for (const key in cls) {
        if(cls[key]){
          result.push(key)
        }
      }
    } else {
      warning(true, 'classname must be string | array | object')
    }
  }

  // 利用Set去重
  return [...new Set(result)].join(' ')
}