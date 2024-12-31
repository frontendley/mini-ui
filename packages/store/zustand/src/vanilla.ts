import { TCreateStore, TSubersciber, TSetStateParam } from "./type"
import { isFunction } from "./utils"

// 标准写法，增加一层Impl便于后续拓展
const createStoreImpl = <T,>(createStoreCb: TCreateStore<T>) => {

  let state: T  // 状态， 用户传入的回调的返回值
  let listener: TSubersciber[] = [] // 订阅者（回调）列表

  // 获取最新的状态
  function getSnapShot() {
    return state
  }

  /**
   * @desc 为create回调参数中传入的set值
   * - 实现状态的更新
   * - 调用发布事件，通知订阅者。
   * */ 
  function setState(partial: TSetStateParam<T>) {
    const nextState = isFunction(partial)
      ? partial(state)
      : partial

    if (!Object.is(state, nextState)) {
      state = Object.assign({}, state, nextState)

      publish()
    }

  }

  // 注册订阅信息，在react中被useSyncExternalStore调用，注册forceupdate的回调。
  function subscribe (cb: TSubersciber) {
    listener.push(cb)

    return () => {
      listener = listener?.filter(item => item !== cb)
    }
  }

  // 发布事件，如果在react中会触发组件render
  function publish() {
    listener?.forEach(i => i?.())
  }

  state = createStoreCb(setState)

  return {
    state,
    subscribe,
    setState,
    getSnapShot
  }
}

export function createStore<T>(createStoreCb: TCreateStore<T>) {
  return createStoreImpl(createStoreCb)
}