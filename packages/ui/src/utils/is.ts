

export const opt = Object.prototype.toString

export const isString = (value: unknown): value is string => typeof value === 'string'

export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

export const isArray = (value: unknown): value is Array<unknown> => Array.isArray(value)

export const isObject = (value: unknown): value is object => opt.call(value) === '[object Object]'

export const isNull = (value: unknown): value is null => value === null

export const isUndefined = (value: unknown): value is undefined => value === undefined

