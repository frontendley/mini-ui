
type Listener = (...rest: unknown[]) => void

// 事件中心
export class EventBus {
  
  // 存储订阅的回调
  listeners: Array<Listener>

  constructor() {
    this.listeners = []
  }
  
  // 订阅动作
  subscribe(callback: Listener) {
    this.listeners.push(callback)
    
    return () => {
      this.listeners.filter(item => item !== callback)
    }
  }

  // 触发所有订阅的回调
  publish () {
    this.listeners?.forEach(i => i())
  }

}