export function compare<T>(a: T, b: T): boolean {
  if (typeof a !== typeof b) {
    return false
  }

  if (typeof a !== 'object' || a === null || b === null) {
    return a === b
  }

  return a === b
}
