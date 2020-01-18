import {always, compose, converge, ifElse, isEmpty, merge, objOf, pick} from 'ramda'
import {PaginationResult, util} from '@deptno/dynamodb'
import {const_salt} from '../../constant'
import {Raw} from '@deptno/aa_data_source/dist/entity'

export const checkPageArgs = (args) => {
  page(args.first)

  if (args.last) {
    page(args.last)
  }
  if (args.after) {
    cursor(args.after)
  }
  if (args.before) {
    cursor(args.before)
  }
  if (args.query) {

  }
}

function page(n): asserts n is number {
  if (n < 1) {
    throw new Error('`{first,last}` not allow: < 1')
  }
  if (n > 100) {
    throw new Error('`{first,last}` not allow: > 1')
  }
}
function cursor(c): asserts c is string {
  if (!c) {
    throw new Error('`{after,before}` not allow: < 1')
  }
}

export const edgesOf = <A, B>(shaper: Shaper<A, B>): <T>(a: PaginationResult<T>) => { edges: { node: B }[] } => {
  return (p) => {
    const {items, lastEvaluatedKey} = p
    const keys = Object.keys(lastEvaluatedKey || {}) as (keyof Raw)[]

    return {
      edges: items.map(nodeOf(keys, shaper))
    }
  }
}
const nodeOf = (keys: string[], shaper: Shaper) =>
  converge(
    merge,
    [
      compose(
        objOf('node'),
        shaper,
      ),
      compose(
        objOf('cursor'),
        ifElse(
          isEmpty,
          always(null),
          compose(
            (item: any) => util.createToken(item, const_salt),
            pick(keys),
          ),
        ),
      ),
    ],
  )

export const normalizedArgs = args => {
  return {
    ...args,
    after: util.parseToken(args.after, const_salt),
    before: util.parseToken(args.before, const_salt)
  }
}

export type Shaper<T = any, R = T> = (a: T) => R extends infer U ? U : unknown

