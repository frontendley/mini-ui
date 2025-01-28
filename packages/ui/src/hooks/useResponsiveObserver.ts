export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type BreakpointMap = Partial<Record<Breakpoint, string>>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;

export const responsiveArray: Breakpoint[] = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
type ResponsiveCallback = (screenMap: ScreenMap, breakpoint: Breakpoint | null) => void

type MatchRecord = {
  token: string;
  func: ResponsiveCallback;
}

export const responsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
  xxxl: '(min-width: 2000px)',
};

class ResponsiveObserver {
  // 单例模式
  private static instance: ResponsiveObserver | null = null
  private responsiveMap: BreakpointMap | null = null
  private token: number
  private screenMap: ScreenMap
  subscribers: MatchRecord[]
  private matchListeners: { mql: MediaQueryList, listener: (e: MediaQueryListEvent) => void }[]

  private constructor(responsiveMap: BreakpointMap) {
    this.screenMap = {}
    this.subscribers = []
    this.token = -1
    this.matchListeners = []
    this.responsiveMap = responsiveMap
  }

  static getInstance(responsiveMap: BreakpointMap) {
    if (!ResponsiveObserver.instance) {
      ResponsiveObserver.instance = new ResponsiveObserver(responsiveMap);
    } else if (ResponsiveObserver.instance.responsiveMap !== responsiveMap) {
      // 如果 responsiveMap 变化，重新初始化实例 为后续监控器配置化做准备
      ResponsiveObserver.instance.unregister();
      ResponsiveObserver.instance.responsiveMap = responsiveMap;
      ResponsiveObserver.instance.register();
    }
    return ResponsiveObserver.instance;
  }

  dispatch(screenMap: ScreenMap, breakpoint: Breakpoint) {
    this.screenMap = screenMap
    this.subscribers?.forEach(item => {
      item.func(screenMap, breakpoint)
    })
  }

  subscribe(cb: ResponsiveCallback) {
    if (this.subscribers.length === 0) {
      this.register()
    }

    const token = (++this.token).toString()

    this.subscribers.push({
      token,
      func: cb
    })

    cb?.(this.screenMap, null)

    return token
  }
  unsubscribe(token: string) {
    this.subscribers = this.subscribers.filter(item => item.token !== token)
    if (this.subscribers.length === 0) {
      return this.unregister()
    }
  }
  unregister() {
    this.matchListeners.forEach(item => {
      item.mql.removeListener(item.listener)
    })

    this.matchListeners = []
  }
  register() {
    const _this = this
    Object.entries(responsiveMap).forEach(([key, value]) => {
      function listener({ matches }: { matches: boolean }) {
        _this.dispatch({
          ..._this.screenMap,
          [key]: matches
        }, key as Breakpoint)
      }

      const mql: MediaQueryList = window.matchMedia(value)
      mql.addListener(listener)

      listener(mql)
    })
  }

}

export function useResponsiveObserver() {
  return ResponsiveObserver.getInstance(responsiveMap)
}