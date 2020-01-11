export const context = (e): Context => {
  const {req, event, context} = e

  if (event) {
    return {

    }
  }
  /**
   * local
   */
  console.debug('local context')
  return {

  }
}

export type Context = {

}