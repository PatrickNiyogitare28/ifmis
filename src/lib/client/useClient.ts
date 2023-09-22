import { GraphQLClient } from 'graphql-request'

export default function useClient(){
    const requestHeaders = {
        'x-hasura-admin-secret': process.env.HASURA_SECRET as string,
        'content-type': 'application/json'
    }
    
    
    const client = new GraphQLClient(process.env.HASURA_URL as string, {
        headers: requestHeaders
    })
    return client
}
