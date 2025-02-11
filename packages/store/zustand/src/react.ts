import { createStore } from "./vanilla"
import { TCreateStore } from "./type"
import { useSyncExternalStore } from "react"

const identity = <T>(arg: T): T => arg
/**
 * @desc 连接发布订阅、状态、react特性
 * - 通过useSyncExternalStore接入外部状态。
 * - 通过selector实现快照获取，达到细粒度更新的效果。
 * */ 
const useStore = <T, S>(
  api: ReturnType<typeof createStore<T>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selector: (state: T) => S = identity as any 
) => {
  const slice = useSyncExternalStore(
    api.subscribe,
    () => selector(api.getSnapShot())
  )

  return slice
}

const createImpl = <T,>(createStoreCb: TCreateStore<T>) => {
  const api = createStore(createStoreCb)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const store = (selector: (state: T) => any) => useStore(api, selector)

  return Object.assign(store, api)
}

export const create = <T,>(createStoreCb: TCreateStore<T>) => {
  return createImpl(createStoreCb)
}
