import {compose, map, objOf} from 'ramda'

export const checkPageArgs = (args) => {
  first(args.first)
}

function first(n): asserts n is number {
  if (n < 1) {
    throw new Error('`first` not allow: < 1')
  }
  if (n > 100) {
    throw new Error('`first` not allow: > 1')
  }
}

export const edgesOf = <A, B>(shaper: Shaper<A, B>): <T>(a: T[]) => { edges: { node: B }[] } =>
  compose(
    objOf('edges'),
    map(nodeOf(shaper)),
  )

const nodeOf = (shaper: Shaper) =>
  compose(
    objOf('node'),
    shaper,
  )

export type Shaper<T = any, R = T> = (a: T) => R extends infer U ? U : unknown

