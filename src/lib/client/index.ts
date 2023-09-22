import { GraphQLClient } from 'graphql-request'

const requestHeaders = {
    'x-hasura-admin-secret': process.env.HASURA_SECRET as string,
    'content-type': 'application/json'
}


const graphqlRequestClient = new GraphQLClient(process.env.HASURA_URL as string, {
    headers: requestHeaders
})

export default graphqlRequestClient