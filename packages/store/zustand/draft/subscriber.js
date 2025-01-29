/* eslint-disable no-undef */
/* eslint-disable no-console */
class EventBus {

  // 初始化，通过一个对象存储整体的订阅者（回调）。
  constructor() {
    // type: Record<string, Function[]>
    this.listeners = {}
  }

  // 订阅，形如addEventListener。
  subscribe (type, callback) {
    if(this.listeners[type]) {
      this.listeners[type].push(callback)
      return
    }

    this.listeners[type] = [callback]
  }

  // 取消订阅， 形如removeEventListener。
  unSubscribe(type, callback) {
    if(!this.listeners[type])
      return

    this.listeners[type] = this.listeners[type].filter(i => i != callback)
  }

  // 事件发布， 形如用户的点击， 这里我们通过顺序运行触发它。
  publish(type, data) {
    if(!this.listeners[type])
      return
    this.listeners[type]?.map(item => item?.(data))
  }

}

// 事件总线
const eventBus = new EventBus()

// 订阅者A
function suberscriberA(data) {
  console.log(data)
}

// 订阅者B
function suberscriberB(data) {
  console.log(data)
}

// 订阅行为 」 注册
eventBus.subscribe("eventA", suberscriberA)

eventBus.subscribe("eventB", suberscriberB)

// 发布事件， 触发订阅者（回调函数）
eventBus.publish("eventA", "A状态更新事件")

eventBus.publish("eventB", "B状态更新事件")
