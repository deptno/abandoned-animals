export function defined(condition): asserts condition is true {
  if (!condition) {
    throw new Error(`${condition} must be defined`)
  }
}

export function yyyyMMdd(v: string): asserts v is string {
  if (typeof v !== 'string') {
    throw new Error(`typeof v !== 'string'`)
  }
  if (v.length !== 8) {
    throw new Error(`v.length !== 8`)
  }
}

