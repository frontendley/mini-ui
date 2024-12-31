import { Button } from "@mini-ui/ui"
import "@mini-ui/ui/dist/index.css"
import { useSyncExternalStore } from "react"
import { EventBus } from "../utils/subscribe"

// 外部状态，如果放在组件中，每次render都会重置。
const eventBus = new EventBus()

let store = {
  count: 1
}

// react组件
function Suberscriber() {

  // 使用useSyncExternalStore钩子完成订阅， 以及store的状态快照获取。
  const snapShot = useSyncExternalStore(
    cb => eventBus.subscribe(cb),
    () => store
  )

  // 两件事： 1. 修改外部状态的值， 2. 发布状态更新事件（触发render）
  function updateStore() {
    store = {
      count: store.count + 1
    }

    eventBus.publish() 
  }

  return (
    <div className="app">
      <div>
        { snapShot.count }
      </div>
      <Button onClick={updateStore}>点击更新页面数据</Button>
    </div>
  )
}

export default Suberscriber
