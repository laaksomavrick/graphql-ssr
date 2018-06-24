import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
// tslint:disable:no-string-literal

// TODO environment variable
export const client = new ApolloClient({
    cache: new InMemoryCache().restore(window['__PRELOADED_STATE__']),
    uri: 'http://localhost:3001/graphql'
})

export const query = async (q: string) => {
    return await client.query({
        query: gql`
            ${q}
        `
    })
}