import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o2d0so07nq01xib9ac2k19/master',
    cache: new InMemoryCache()
})