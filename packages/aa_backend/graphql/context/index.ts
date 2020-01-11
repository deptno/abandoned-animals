export const context = (e): Context => {
  const {req, event, context} = e

  try {
    isLambdaEvent(event)

    return {
      claim: event.requestContext.identity
    }
  } catch (e) {
    if (event) {
    }
    /**
     * local
     */
    console.debug('local context')
    return {

    }
  }

}

export type Context = {

}

import {APIGatewayProxyEvent} from 'aws-lambda'

function isLambdaEvent(event): asserts event is APIGatewayProxyEvent {
  if (!event) {
    throw new Error('not lambda')
  }
}