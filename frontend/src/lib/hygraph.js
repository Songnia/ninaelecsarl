import { GraphQLClient } from 'graphql-request';

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT;

if (!endpoint) {
    console.warn("VITE_HYGRAPH_ENDPOINT is missing. Hygraph features will be deactivated.");
}

export const hygraphClient = endpoint ? new GraphQLClient(endpoint) : null;
