import { createStore } from "./vanilla"
import { TCreateStore } from "./type"
import { useSyncExternalStore } from "react"

/**
 * @desc 连接发布订阅、状态、react特性
 * - 通过useSyncExternalStore接入外部状态。
 * - 通过selector实现快照获取，达到细粒度更新的效果。
 * */ 
const useStore = <T,>(
  api: ReturnType<typeof createStore<T>>,
  selector: (state: T) => any
) => {
  const slice = useSyncExternalStore(
    api.subscribe,
    () => selector(api.getSnapShot())
  )

  return slice
}

const createImpl = <T,>(createStoreCb: TCreateStore<T>) => {
  const api = createStore(createStoreCb)

  const store = (selector: (state: T) => any) => useStore(api, selector)

  return Object.assign(store, api)
}

export const create = <T,>(createStoreCb: TCreateStore<T>) => {
  return createImpl(createStoreCb)
}