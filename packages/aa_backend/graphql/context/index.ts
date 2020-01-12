import {APIGatewayProxyEvent} from 'aws-lambda'
import {Context} from '@deptno/aa_graphql_type'

export const context = (e): Omit<Context, 'dataSources'> => {
  const {req, event, context} = e

  try {
    isLambdaEvent(event)

    return {
      claim: event.requestContext.identity,
    }
  } catch (e) {
    // local

    console.debug('local context')

    return {
      claim: undefined,
    }
  }
}

function isLambdaEvent(event): asserts event is APIGatewayProxyEvent {
  if (!event) {
    throw new Error('not lambda')
  }
}