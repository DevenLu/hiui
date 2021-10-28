export type Dict<T = any> = Record<string, T>

/**
 * Assert is an objectLike
 * TODO: Assert the return type
 */
const isObjectLike = (arg: unknown): arg is any => !!arg && typeof arg === 'object'

/**
 * Assert is an object
 */
export const isObject = (arg: unknown): arg is Dict =>
  isObjectLike(arg) && arg.constructor === Object

/**
 * Assert is an Promise
 */
export const isPromise = <T>(arg: unknown): arg is Promise<T> =>
  isObjectLike(arg) && isFunction(arg.then)

/**
 * Assert is an array
 */
export const isArray: <T>(arg: unknown) => arg is T[] = Array.isArray

/**
 * Assert is an array and `array.length > 0`
 */
export const isArrayNonEmpty = <T>(arg: unknown): arg is T[] & { length: 0 } =>
  isArray(arg) && arg.length > 0

/**
 * Assert is numeric
 */
export const isNumeric = (arg: unknown): arg is string | number => !Number.isNaN(Number(arg))

/**
 * Assert is function
 */
export const isFunction = <T extends Function = Function>(arg: any): arg is T =>
  typeof arg === 'function'
