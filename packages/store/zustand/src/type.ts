export type TCreateStore<T> = (setState: (cb: TSetStateParam<T>) => void) => T

export type TSubersciber = () => void

export type TSetStateParam<T> = T | ((state: T) => T)